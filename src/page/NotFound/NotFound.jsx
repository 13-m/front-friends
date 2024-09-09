import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>Упс... Мы не смогли найти страницу</h1>
      <Link to="/"> Вернуться на главную страницу</Link>
    </>
  );
};

export default NotFound;
