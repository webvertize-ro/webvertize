import { useEffect, useRef } from 'react';
import { Modal as BSModal } from 'bootstrap';

function ModalForm({ show, onClose, title, children, isLoading }) {
  const modalRef = useRef(null);
  const bsModal = useRef(null);

  // Initialize Bootstrap modal once
  useEffect(() => {
    bsModal.current = new BSModal(modalRef.current, {
      backdrop: true,
      keyboard: true,
    });

    // Trigger onClose AFTER Bootstrap fully hides modal
    modalRef.current.addEventListener('hidden.bs.modal', onClose);
  }, [onClose]);

  // Reactively show/hide
  useEffect(() => {
    if (show) {
      bsModal.current.show();
    } else {
      bsModal.current.hide(); // DO NOT call onClose() manually
    }
  }, [show]);

  return (
    <div className="modal fade" tabIndex="-1" ref={modalRef}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              <div className="d-flex gap-2">
                <div>{title}</div>
              </div>
            </h5>
            <button className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default ModalForm;
