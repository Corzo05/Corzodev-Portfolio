type EmailTemplateProps={
  message: string
  email: string
}

export default function EmailTemplate({message, email}: EmailTemplateProps) {
  return (
    <>
      <h3><b>Nuevo Mensaje de: </b>{email}</h3>
      <p>{message}</p>
    </>
  );
}
