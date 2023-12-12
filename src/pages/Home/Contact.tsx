import { Button, TextField } from "@mui/material";
import { Textarea } from "@material-tailwind/react";
import images from "../../themes/images";

const Contact = () => {
  return (
    <div className="bg-SecondaryBG">
      <div>
        <div className="py-10 px-5 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div>
            <h1 className="font-extrabold text-5xl">CONTACT US</h1>
            <p className="text-sm mt-1">LET US KNOW YOUR CONCERN</p>

            <div className="space-y-5 mt-10">
              <TextField fullWidth label="Full Name" variant="outlined" />

              <TextField fullWidth label="Email" variant="outlined" />

              <div className="w-full">
                <Textarea label="Message" />
              </div>

              <Button
                className="bg-SecondaryBG"
                fullWidth
                variant="contained"
                size="large"
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
