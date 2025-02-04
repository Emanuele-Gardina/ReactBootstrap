import "./App.css";
import CustomFooter from "./components/CustomFooter";
import CustomNavbar from "./components/CustomNavbar";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <CustomNavbar />
      <Welcome />
      <CustomFooter />
    </>
  );
}

export default App;
