const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const submit = document.getElementById("submit");

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  let ebody = `
    <h1>First Name: </h1>${fname.value}
    <br>
    <h1>Last Name: </h1>${lname.value}
    `;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "proware.sti@gmail.com",
    Password: "password",
    To: "proware.sti@gmail.com",
    From: "proware.sti@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
});
