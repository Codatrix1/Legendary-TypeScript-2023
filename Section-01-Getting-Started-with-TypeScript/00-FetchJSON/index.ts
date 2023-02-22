import axios from "axios";

// Address for Network Request
const url = "https://jsonplaceholder.typicode.com/todos/1";

// Object structure
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// Args with Type Annotations
const logTasks = (id: number, title: string, completed: boolean) => {
  console.log(`
  The Todo with ID: ${id}
  has a title of: ${title}
  Is it finished?: ${completed}
  `);
};

// Rest of the code
axios.get(url).then((response) => {
  const tasks = response.data as Todo;

  const id = tasks.id;
  const title = tasks.title;
  const completed = tasks.completed;

  logTasks(id, title, completed);
});
