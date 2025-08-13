export default function ErrorMessage({ message, onClose }) {
  return (
    <div className="error-message">
      <span className="error-icon">⚠️</span>
      <span className="error-text">{message}</span>
      <button 
        onClick={onClose} 
        className="error-close"
        title="Cerrar"
      >
        ✕
      </button>
    </div>
  );
}
