import Header from "../components/Header";
import Body from "../components/Body";
import Body2 from "../components/Body2";
import Nav from "../components/nav/NavBar";
import Body3 from "../components/Body3";
import ImageCard from "../components/ImageCard";

const images = [
  { src: "./image/gatito.jpg", alt: "image 1" },
  { src: "./image/hoja.jpg", alt: "image 2"},
  { src: "./image/niña.jpg", alt: "image 3"},
  { src: "./image/lobo.jpg", alt: "image 4"},
  { src: "./image/programadora.jpg", alt: "image 5"},
  { src: "./image/monito.jpg", alt: "image 6"},
]

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
      <div className="flex flex-wrap items-center justify-center min-h-screen  bg-gray-100 gap-4">
          {images.map((images, index) => (
          <ImageCard  key={index} src={images.src} alt={images.alt}/>
          ))}
      </div>
      <div className="bg-slate-200">
          <Body3 />
      </div>
    </div>
  );
}

export default App;
