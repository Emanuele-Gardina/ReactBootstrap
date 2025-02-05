import "./App.css";
import AllTheBooks from "./components/AllTheBooks";
import CustomFooter from "./components/CustomFooter";
import CustomNavbar from "./components/CustomNavbar";

import Welcome from "./components/Welcome";
import fantasy from "./assets/books/fantasy.json";

function App() {
  console.log(fantasy[0]);
  return (
    <>
      <CustomNavbar />
      <Welcome />

      <AllTheBooks emanuele={fantasy} />
      <CustomFooter />
    </>
  );
}

export default App;
