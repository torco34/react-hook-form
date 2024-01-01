import { Button } from "antd";

export const ButtonReutilizar = ({ text, onClick, style }) => {
  return (
    <div className="profile-content d-flex ">
      <Button
        onClick={onClick}
        style={{
          background: "#334257",
          color: "#fff",
          height: "40px",
          textAlign: "center",
        }}
      >
        {text}
      </Button>
    </div>
  );
};
