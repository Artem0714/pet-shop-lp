import { Background } from "./components/background/Background";
import { MainPage } from "./components/MainPage";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Background />
      <div className="container">
        <Navbar />
        <MainPage />
      </div>
    </>

  );
}

export default App;
