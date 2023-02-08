import { Background } from "./components/background/Background";
import { IconsPetBlock } from "./components/IconsPetBlock";
import { MainPage } from "./components/MainPage";
import { Navbar } from "./components/Navbar";
import { DifferentCategory } from "./components/differentCategory/DifferentCategory";
import { ChangeButton } from "./components/buttons/ChangeButton";
import { OurService } from "./components/OurService";

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
      </div>
    </>

  );
}

export default App;
