import { useContext } from "react";
import "./App.scss";
import UserProfile from "./Components/UserProfile/UserProfile.jsx";
import ListTasks from "./Components/ListTask/ListTasks.jsx";
import CartProducts from "./Components/CartProducts/CartProducts.jsx";
import { ThemeContext } from "./contexts/ThemeContext.jsx";

function App() {
  const { theme, themeToggle } = useContext(ThemeContext);

  return (
    <>
      <button className={"button-" + theme} onClick={themeToggle}>
        Изменить тему
      </button>
      <div>
        <UserProfile />
        <ListTasks />
        <CartProducts />
      </div>
    </>
  );
}

export default App;
