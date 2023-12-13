import { Textarea, Input, Button } from "@material-tailwind/react";
import images from "../../../themes/images";
import Navbar from "../../../components/navbar/Navbar";

const Contact = () => {
  return (
    <div className="bg-SecondaryBG" style={{ minHeight: "calc(100vh" }}>
      <Navbar />
      <div>
        <div className="py-16 lg:py-24 px-5 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div>
            <h1 className="font-extrabold text-5xl">CONTACT US</h1>
            <p className="text-sm mt-1">LET US KNOW YOUR CONCERN</p>

            <div className="space-y-5 mt-10">
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
                className="bg-blue-500 hover:bg-green-500 text-black font-base"
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
            className="mx-auto hidden md:hidden lg:block" // Hide on mobile view (hidden class) and display on larger screens (md:block)
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
