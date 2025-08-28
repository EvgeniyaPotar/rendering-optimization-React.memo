import { useCallback, useState } from "react";
import UserInfo from "./UserInfo/UserInfo.jsx";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Иван",
    age: 25,
    isActive: true,
  });

  const changeName = useCallback(() => {
    setUser((prevUser) => ({
      ...prevUser,
      name: prevUser.name === "Ivan" ? "Peter" : "Ivan",
    }));
  }, []);

  const changeAge = useCallback(() => {
    setUser((prevUser) => ({
      ...prevUser,
      age: prevUser.age++,
    }));
  }, []);

  const changeActive = useCallback(() => {
    setUser((prevUser) => ({
      ...prevUser,
      isActive: !prevUser.isActive,
    }));
  }, []);

  return (
    <div className="card">
      <h2>Профиль пользователя</h2>
      <UserInfo user={user} />
      <div>
        <button onClick={changeName}>Сменить имя</button>
        <button onClick={changeAge}>Увеличить возраст</button>
        <button onClick={changeActive}>Переключить активность</button>
      </div>
    </div>
  );
};
export default UserProfile;
