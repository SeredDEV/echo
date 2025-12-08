import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const RedirectFromHtml = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    // Si la URL termina en .html, redirigir a la versión sin .html
    if (path.endsWith(".html")) {
      const newPath = path.replace(".html", "");
      navigate(newPath + location.search, { replace: true });
    }
  }, [location, navigate]);

  return null;
};

export default RedirectFromHtml;
