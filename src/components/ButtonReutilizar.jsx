import { Button } from "antd";
import "../assets/css/buttonReutilizable.css";
export const ButtonReutilizar = ({ text, onClick }) => {
  return (
    <div className="profile-content  ">
      <Button onClick={onClick}>{text}</Button>
    </div>
  );
};
