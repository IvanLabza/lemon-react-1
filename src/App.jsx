import "./index.css";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Form from "./component/form/Form";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="wrapper__desc">
          <Header />
          <Form />
          <Footer />
        </div>
        <div className="image-container">
          <img src="./assets/bg.png" alt="" className="wrapper-img" />
        </div>
      </div>
    </div>
  );
}

export default App;
