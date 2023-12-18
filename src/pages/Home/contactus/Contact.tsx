import { Textarea, Input, Button } from "@material-tailwind/react";
import images from "../../../themes/images";
import Navbar from "../../../components/navbar/Navbar";

const Contact = () => {
  return (
    <div className="bg-SecondaryBG" style={{ minHeight: "calc(100vh" }}>
      <Navbar />
      <div>
        <div className="grid grid-cols-1 gap-2 px-5 py-16 lg:py-24 lg:px-24 lg:grid-cols-2">
          <div>
            <h1 className="text-5xl font-extrabold">CONTACT US</h1>
            <p className="mt-1 text-sm">LET US KNOW YOUR CONCERN</p>

            <div className="mt-10 space-y-5">
              <Input
                label="Full Name"
                variant="outlined"
                crossOrigin={undefined}
              />

              <Input
                label="Outlook Account/Email"
                variant="outlined"
                crossOrigin={undefined}
              />

              <div className="w-full">
                <Textarea label="Message" />
              </div>

              <Button
                className="text-black bg-blue-500 hover:bg-green-500 font-base"
                fullWidth
                variant="filled"
                placeholder={undefined}
              >
                SEND MESSAGE
              </Button>
              <div></div>
            </div>
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
