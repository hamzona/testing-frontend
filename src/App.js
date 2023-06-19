import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("https://testb-urt9.onrender.com/get").then((res) => {
      setItems(res.data[0].niz);
    });
  }, []);

  function add() {
    axios.post("https://testb-urt9.onrender.com/add").then((res) => {
      setItems(res.data.niz);
    });
  }

  function del() {
    axios.delete("https://testb-urt9.onrender.com/delete").then((res) => {
      setItems(res.data.niz);
    });
  }
  return (
    <div>
      <button
        onClick={() => {
          add();
        }}
      >
        ADD
      </button>
      <button
        onClick={() => {
          del();
        }}
      >
        DELETE
      </button>
      {items.map((item, index) => {
        return <div key={index}>{"Selmic"}🌸</div>;
      })}
    </div>
  );
}

export default App;
