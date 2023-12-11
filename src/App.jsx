import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function App() {
  return (
    <>
      <main className="font-grotesk">
        <div className="flex flex-col items-center md:flex-row">
          {/* <LeftSection /> */}
          <RightSection />
        </div>
      </main>
    </>
  );
}

export default App;
