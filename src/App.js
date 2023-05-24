import logo from "./logo.svg";
import Game from "./components/Game";
import ContactForm from "./components/ContactForm";
import { useState } from "react";
import Background from "./assets/img-bg-desktop.svg";

function App() {
  return (
    <div className="App">
      <Game />
      <ContactForm />
    </div>
  );
}

export default App;
