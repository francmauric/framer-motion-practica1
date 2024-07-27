import Header from "../components/Header";
import Body from "../components/Body";
import Body2 from "../components/Body2";
import Nav from "../components/nav/NavBar";

function App() {
  return (
    <div >
      <div >
        <Nav />
      </div>
        <Header />
      <div className="flex justify-center">
      <Body />
      <Body2 />

      </div>
    </div>
  );
}

export default App;
