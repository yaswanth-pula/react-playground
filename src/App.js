import "./App.css";
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import InputText from "./InputComponent/InputText";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <div className="app">
          <InputText />
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;
