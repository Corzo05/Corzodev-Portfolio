import { ReactNode } from "react";
import ButtonModal from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

type ModalProps = {
  show: boolean;
  handleClose: () => void;
  children: ReactNode
  titleModal: string
};

export default function ModalProyectos({ show, handleClose, children, titleModal }: ModalProps) {

  return (
    <>
      <Modal size="lg" data-bs-theme="dark" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-white">
            {titleModal}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="embed-responsive embed-responsive-16by9 d-flex justify-content-center">
            {children}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <ButtonModal variant="secondary" onClick={handleClose}>
            Cerrar
          </ButtonModal>
        </Modal.Footer>
      </Modal>
    </>
  );
}
