import { authApi } from "../app/authApi";
import { useNavigate } from "react-router-dom";
import { routes } from "../app/routes";

export function CabinetPage() {
  const nav = useNavigate();

  async function logout() {
    await authApi.logout();
    nav(routes.home);
  }

  return (
    <div>
      <h1>Cabinet</h1>
      <p>Тут буде особистий кабінет (замовлення/статуси/заявки).</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}