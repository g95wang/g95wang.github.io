function submitEmail() {
  if (!document.getElementById("email").checkValidity()) {
    document.getElementById("warn_email").click();
    return;
  }
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  console.log(message);

  document.getElementById(
    "send_email_real"
  ).href = `mailto:g95wang@gmail.com?subject=${subject}&body=From:%20${name}%20(${email})%0D%0A%0D%0A${message}`;
  document.getElementById("send_email_real").click();
}
