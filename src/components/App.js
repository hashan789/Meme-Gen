import { Container } from "react-bootstrap";
import { Route, Routes } from 'react-router-dom'
import Meme from "./Meme";
import NewMeme from "./NewMeme";
import './Style.css'

function App() {
  return (
    <Container>
      <div className="center-meme">
      <div className="box">
        <h1 style={{textAlign:'center'}} className="font">MemeGen</h1>
      </div>
      <div className="center-meme" style={{marginLeft:'100px'}}>
          <Routes>
              <Route exact path="/" element={<Meme />} />
              <Route path="/newmeme" element={<NewMeme />} />
          </Routes>
      </div>
      </div>
    </Container>
  );
}

export default App;
