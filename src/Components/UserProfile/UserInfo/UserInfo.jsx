import { memo } from "react";
const UserInfo = ({ user }) => {
  console.log("render UserInfo");
  return (
    <>
      <p>Имя: {user.name}</p>
      <p>Возраст: {user.age}</p>
      <p>Активен: {user.isActive ? "да" : " нет"}</p>
    </>
  );
};

export default memo(UserInfo);
