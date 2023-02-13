import { Background } from "./components/background/Background";
import { IconsPetBlock } from "./components/IconsPetBlock";
import { MainPage } from "./components/MainPage";
import { Navbar } from "./components/Navbar";
import { DifferentCategory } from "./components/differentCategory/DifferentCategory";
import { OurService } from "./components/OurService";
import { ThirdPage } from "./components/ThirdPage";

function App() {
  return (
    <>
      <Background />
      <div className="container">
        <Navbar />
        <MainPage />
        <div className="orange-line">
          <DifferentCategory />
          <IconsPetBlock />
        </div>
        <OurService />
        <ThirdPage />
      </div>
    </>

  );
}

export default App;
