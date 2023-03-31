import Header from "./components/Header";
import Introduce from "./components/Introduce";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe"; //scss처럼 정리해주는 느낌

function App() {
  return (
    <div className="bg-red-100 min-h-screen">
      <Header />
      <main>
        <Introduce />
        <Portfolio />
        <ContactMe />
      </main>
      <footer className="max-w-screen-xl mx-auto flex justify-end items-center py-1 md:py-2">
        2023, Designed by, Dio
      </footer>
    </div>
  );
}

export default App;
