import React from "react";
import Container from "@material-ui/core/Container";
import { AppBar, Books } from "./components";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <AppBar />
        <Container maxWidth="sm" style={{ marginTop: '10%'}}>
          <Books />
        </Container>
      </header>
    </div>
  );
}

export default App;
