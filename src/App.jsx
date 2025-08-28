import ListTasks from "./Components/ListTask/ListTasks.jsx";
import CartProducts from "./Components/CartProducts/CartProducts.jsx";
import UserProfile from "./Components/UserProfile/UserProfile.jsx";
import "./App.css";

function App() {
  return (
    <>
      <UserProfile />
      <ListTasks />
      <CartProducts />
      {/* Мы кликаем по кнопкам и в консоли видно,что ререндерится каждый раз,
      только тот компонет, в котором были изменения. Потому что React знает,
      что все остальные компоненты остаются неизменными.  React просто сравнивает
      пропсы (React.memo), видит, что они не изменились, и не будет трогать компонент.*/}
    </>
  );
}

export default App;
