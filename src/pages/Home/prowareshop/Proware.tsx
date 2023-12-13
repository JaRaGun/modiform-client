import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import images from "../../../themes/images";

import Navbar from "../../../components/navbar/Navbar";

const Proware = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Card className="w-96" placeholder={undefined}>
          <CardHeader
            shadow={false}
            floated={false}
            className="h-96"
            placeholder={undefined}
          >
            <img
              src={images.BSITUNIFORM}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody placeholder={undefined}>
            <div className="mb-2 flex items-center justify-between">
              <Typography
                color="blue-gray"
                className="font-medium"
                placeholder={undefined}
              >
                Apple AirPods
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                placeholder={undefined}
              >
                $95.00
              </Typography>
            </div>
          </CardBody>
          <CardFooter className="pt-0" placeholder={undefined}>
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              placeholder={undefined}
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-96" placeholder={undefined}>
          <CardHeader
            shadow={false}
            floated={false}
            className="h-96"
            placeholder={undefined}
          >
            <img
              src={images.BSITPANTS}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody placeholder={undefined}>
            <div className="mb-2 flex items-center justify-between">
              <Typography
                color="blue-gray"
                className="font-medium"
                placeholder={undefined}
              >
                Apple AirPods
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                placeholder={undefined}
              >
                $95.00
              </Typography>
            </div>
          </CardBody>
          <CardFooter className="pt-0" placeholder={undefined}>
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              placeholder={undefined}
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Proware;
