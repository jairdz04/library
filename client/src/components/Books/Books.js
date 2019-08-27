import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import NotFound from "../NotFound";
import { useStyles } from "./styles";
import { default as InitializeProps } from "./Container";

const Books = () => {
  const classes = useStyles();
  const { books = [] } = InitializeProps();
  return (
    <div>
      {!!books.length ? (
        books.map(book => {
          return (
            <Card
              key={book._id}
              className={classes.card}
              style={{ marginBottom: "10px" }}
            >
              <CardMedia
                className={classes.cover}
                image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1552398900l/41147279._SY475_.jpg"
                title="Live from space album cover"
              />

              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    {book.name}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {book.author}
                  </Typography>

                  <Typography variant="subtitle2" color="textSecondary">
                    Editorial: {book.editorial} - Edition {book.edition} - Year:{" "}
                    {book.year}
                  </Typography>

                  <Typography variant="subtitle2" color="textSecondary">
                    <strong>ISBN: {book.isbn}</strong>
                  </Typography>
                </CardContent>
              </div>
            </Card>
          );
        })
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Books;
