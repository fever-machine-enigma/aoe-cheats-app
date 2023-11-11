import Container from "./components/Container";
import Cheats from "./components/Cheats";
import { useState, useEffect } from "react";

function App() {
  const API_URL = "http://localhost:3500/";
  const [reqType, setReqType] = useState("aoe-1");
  const [newPage, setNewPage] = useState([]);

  useEffect(() => {
    const fetchCheats = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setNewPage(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchCheats();
  }, [reqType]);

  return (
    <div className="App">
      <Container reqType={reqType} setReqType={setReqType} />
      <Cheats newPage={newPage} />
    </div>
  );
}

export default App;
