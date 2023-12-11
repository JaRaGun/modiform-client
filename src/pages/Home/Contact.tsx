import { TextField } from "@mui/material";
import images from "../../themes/images";

const Contact = () => {
  return (
    <div className="py-10 px-20 bg-SecondaryBG">
      <div className="grid grid-cols-2 grid-rows-1 gap-2">
        <div className="py-10 px-10">
          <h1 className="font-extrabold text-5xl mt-10">CONTACT US</h1>
          <p className="text-sm mt-1">LET US KNOW YOUR CONCERN</p>

          <div className="space-y-5 mt-10">
            <TextField
              fullWidth
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
            />

            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </div>
        </div>

        <img className="my-20" src={images.CONTACTS} alt="CONTACT IMAGE" />
      </div>
    </div>
  );
};

export default Contact;
