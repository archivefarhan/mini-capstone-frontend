import axios from "axios";

export function Logout() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removedItem("jwt");
    window.location.href = "/";
  };
  return (
    <div>
      <a className="nav-link" href="#" onClick={handleClick}>
        Logout
      </a>
    </div>
  );
}
