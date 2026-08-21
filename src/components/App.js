import { Container } from "react-bootstrap";
import { Route, Routes } from 'react-router-dom'
import Meme from "./Meme";
import NewMeme from "./NewMeme";
import './Style.css'
import Home from "./Home";

function App() {
  return (
    <Container>
      <div className="font">
      <div className="box">
        <a href="/" className="logo"><h1 style={{textAlign:'left', fontWeight: 'bold'}}>MemeGen</h1></a>
      </div>
      <div className="center-meme">
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/meme" element={<Meme />} />
              <Route path="/meme/newmeme" element={<NewMeme />} />
          </Routes>
      </div>
      </div>
    </Container>
  );
}

export default App;
