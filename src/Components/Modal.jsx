const Modal = ({ modal, onClose, children }) => {
  if (!modal) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-xl shadow-lg w-180 transform transition-all duration-300
          scale-95 opacity-0
          animate-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
