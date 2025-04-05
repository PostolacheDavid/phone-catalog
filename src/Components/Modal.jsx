const Modal = () => {
  return (
    <aside className="offscreen">
      <div>
        <h4>Remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button type="button">Confirm</button>
          <button type="button">Clear</button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
