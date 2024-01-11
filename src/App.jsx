import Body from "./Body";
import { Footer } from "./Footer";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <div className="max-w-[70rem] mx-auto font-inter grid place-content-center min-h-screen">
        <Navbar />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
