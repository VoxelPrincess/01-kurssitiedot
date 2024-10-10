import "./Notification.css";

const Notification = ({ type = "success", children }) => {
  return <div className={`notification ${type}`}>{children}</div>;
};

export default Notification;
