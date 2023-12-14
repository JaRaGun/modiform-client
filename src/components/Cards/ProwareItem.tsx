import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

interface ModiDescription {
  uniPicture: string;
  uniName: string;
}

const ProwareItem: React.FC<ModiDescription> = ({ uniPicture, uniName }) => {
  return (
    <div className="px-10">
      <div className="flex py-5">
        <Card className="w-80 bg-yellow-100" placeholder={undefined}>
          <CardHeader
            shadow={false}
            floated={false}
            className="h-80"
            placeholder={undefined}
          >
            <img
              src={uniPicture}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody placeholder={undefined}>
            <div className="mb-2 text-center">
              <Typography
                color="blue-gray"
                className="font-extrabold"
                placeholder={undefined}
              >
                {uniName}
              </Typography>
            </div>
          </CardBody>
          <CardFooter className="pt-0" placeholder={undefined}>
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-500 text-black font-semibold shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
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

export default ProwareItem;
