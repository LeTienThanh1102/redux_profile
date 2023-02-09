import { useSelector } from "react-redux";
import "./header.css";
function Header(props) {
  const { setEdit } = props;
  const handleEdit = () => {
    setEdit(true);
  };
  const user = useSelector((state) => state.user);
  return (
    <>
      <header
        style={{
          backgroundColor: `${user.theme}`,
          backgroundImage: `linear-gradient(180deg,${user.theme} 2%,${user.theme},65%,#181818 100%)`,
        }}
      >
        <div className="infor-container">
          <div className="infor-edit" onClick={handleEdit}>
            Edit
          </div>
          <img className="infor-ava" src={user.avaUrl} alt=""></img>
          <div className="infor-username">{user.name}</div>
          <div className="infor-age">{user.age}</div>
          <div className="infor-about">{user.about}</div>
        </div>
      </header>
    </>
  );
}

export default Header;
