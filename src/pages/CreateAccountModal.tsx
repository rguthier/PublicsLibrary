// src/components/CreateAccountModal.jsx
import "./CreateAccountModal.css"; // Add styles for modal

const CreateAccountModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>Create Account</h2>
        {/* Add your form fields here */}
        <form>
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountModal;
