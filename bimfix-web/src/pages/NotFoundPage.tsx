import { Link } from "react-router-dom";
export function NotFoundPage() {
  return (
    <div>
      <h1>404</h1>
      <p>Сторінку не знайдено.</p>
      <Link to="/">На головну</Link>
    </div>
  );
}