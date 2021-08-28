import "./App.css";
import { List } from "./components/List";
import { Form } from "./components/Form";
import { Alert } from "./components/Alert";

const App = () => {
  return (
    <>
      <Alert />
      <Form />
      <List />
    </>
  );
};

export default App;
