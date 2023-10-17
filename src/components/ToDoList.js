import "../styles/ToDo.css";
import { useEffect, useState } from "react";
import axios from "axios";

const ToDoList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let data = await axios.get("https://tough-goat-visor.cyclic.app/task");
      setData(data.data.reverse());
    };

    getData();
  });

  return (
    <div>
      {data
        ? data.map((item, index) => (
            <div className="TodoList">
              <input type="checkbox" />
              <p> {item.name} </p>
            </div>
          ))
        : ""}
    </div>
  );
};

export default ToDoList;
