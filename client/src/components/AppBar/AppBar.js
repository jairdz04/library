import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./styles";
import { default as InitializeProps } from "./Container";

export default function SearchAppBar() {
  const classes = useStyles();
  let state = {
    showMenu: false
  };

  const setter = (key, value) => {
    state[key] = value;
  };

  const { searchBooks } = InitializeProps();

  return (
    <div className={classes.root} style={{ backgroundColor: "#0c225f" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={setter("showMenu", !state.showMenu)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Biblioteca
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={event =>
                searchBooks({ searchTerm: event.target.value })
              }
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
