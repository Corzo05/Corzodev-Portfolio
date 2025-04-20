import ButtonForm from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Swal from "sweetalert2";

export default function FormContact() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = document.getElementById("form-email") as HTMLFormElement;

    const email = e.currentTarget.elements.namedItem("email") as HTMLInputElement
    const subject = e.currentTarget.elements.namedItem("subject") as HTMLInputElement
    const message = e.currentTarget.elements.namedItem("message") as HTMLTextAreaElement

    if(email.value === "" || subject.value === "" || message.value === ""){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No deje campos vacíos!',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
      });
    }else{
      const data = {
        email: email.value,
        subject: subject.value,
        message: message.value,
      };
  
      const JSONdata = JSON.stringify(data);
      
      const endpoint = "/api/send";
  
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSONdata,
      };
  
      const response = await fetch(endpoint, options);
  
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Correo Enviado',
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false
        });
      }
    }
    form.reset();
  };

  return (
    <>
      <Form style={{ width: "100%", height: "100%" }} onSubmit={handleSubmit} id="form-email">
        <Form.Group as={Row} className="mb-3" controlId="formEmail">
          <Form.Label column sm="2" style={{ color: "#d4ffd9" }}>
            Tu email:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="email"
              placeholder="ejemplo@gmail.com"
              style={{ backgroundColor: "#d4ffd9" }}
              name="email"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formAsunto">
          <Form.Label column sm="2" style={{ color: "#d4ffd9" }}>
            Asunto:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Asunto del correo"
              style={{ backgroundColor: "#d4ffd9" }}
              name="subject"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formMensaje">
          <Form.Label column sm="2" style={{ color: "#d4ffd9" }}>
            Mensaje:
          </Form.Label>
          <Col sm="10">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Mensaje"
              style={{
                height: "100px",
                resize: "none",
                backgroundColor: "#d4ffd9",
              }}
              name="message"
            />
          </Col>
        </Form.Group>

        <ButtonForm
          style={{
            backgroundColor: "#71c947",
            border: "none",
            color: "#1c1c1c",
            borderRadius: "30px",
            padding: "10px 20px",
            width: "100%",
            alignItems: "center",
          }}
          type="submit"
        >
          Enviar
        </ButtonForm>
      </Form>
    </>
  );
}
