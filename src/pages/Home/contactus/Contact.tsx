import { Textarea, Input, Button } from "@material-tailwind/react";
import images from "../../../themes/images";
import Navbar from "../../../components/navbar/Navbar";
import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [account, setAccount] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailMessage = (e: any) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_2ro22pb";
    const templateId = "template_axscyr7";
    const publicKey = "y3doIGwMo0uL3fRAQ";

    // Validate the recipient's email before sending
    if (!account || !account.trim()) {
      console.error("Recipient's email is empty or contains only whitespace!");
      // Optionally, inform the user about the empty email field
      return;
    }

    // Create a new object that contains dynamic template params
    const templateParams = {
      subjectEmailJS: name, // Match 'senderEmailJS' with your placeholder in the EmailJS template
      toEmailJS: "proware.sti@gmail.com",
      replytoEmailJS: account, // Match 'from_email' with your placeholder in the EmailJS template
      messagEmailJS: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setAccount("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="bg-SecondaryBG" style={{ minHeight: "calc(100vh)" }}>
      <Navbar />
      <div>
        <div className="grid grid-cols-1 gap-2 px-5 py-16 lg:py-24 lg:px-24 lg:grid-cols-2">
          <div>
            <h1 className="text-5xl font-extrabold">CONTACT US</h1>
            <p className="mt-1 text-sm">LET US KNOW YOUR CONCERN</p>

            <form onSubmit={handleEmailMessage}>
              <div className="mt-10 space-y-5">
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  label="Full Name"
                  variant="outlined"
                  crossOrigin={undefined}
                />

                <Input
                  value={account}
                  onChange={(e) => setAccount(e.target.value)}
                  label="Outlook Account/Email"
                  variant="outlined"
                  crossOrigin={undefined}
                />

                <div className="w-full">
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    label="Message"
                  />
                </div>

                <Button
                  placeholder={undefined}
                  type="submit"
                  className="text-black bg-blue-500 hover:bg-green-500 font-base"
                  fullWidth
                  variant="filled"
                >
                  SEND MESSAGE
                </Button>
              </div>
            </form>
          </div>

          <img
            className="hidden mx-auto md:hidden lg:block" // Hide on mobile view (hidden class) and display on larger screens (md:block)
            src={images.CONTACTS}
            width={500}
            alt="CONTACT IMAGE"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
