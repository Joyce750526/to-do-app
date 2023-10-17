import Header from "../components/Header";
import "../styles/ToDo.css";
import Button from "../components/Button";
import AddToDo from "../components/AddToDo";
import ToDoList from "../components/ToDoList";

const ToDo = () => {
  return (
    <div id="todo_container">
      <Header />
      <div>
        <AddToDo />
      </div>
      <ToDoList />
    </div>
  );
};

export default ToDo;
