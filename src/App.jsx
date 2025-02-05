import "./App.css";
import AllTheBooks from "./components/AllTheBooks";
import CustomFooter from "./components/CustomFooter";
import CustomNavbar from "./components/CustomNavbar";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <CustomNavbar />
      <Welcome />
      <AllTheBooks />
      <CustomFooter />
    </>
  );
}

export default App;
