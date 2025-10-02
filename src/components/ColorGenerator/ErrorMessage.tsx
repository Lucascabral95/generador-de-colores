import { memo } from "react";

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = memo<ErrorMessageProps>(({ message }) => {
  if (!message) return null;

  return (
    <div className="error-error">
      <div className="texto-error">
        <p className="error">{message}</p>
      </div>
      <div className="imagen">
        <img
          src="/img/error-generador-colores.gif"
          alt="Error 500"
          className="imagen-error"
          loading="lazy"
        />
      </div>
    </div>
  );
});

ErrorMessage.displayName = "ErrorMessage";
