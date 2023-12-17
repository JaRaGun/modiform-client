import { Button } from "@material-tailwind/react";

interface GenderButtonsProps {
  onGenderSelect: (gender: string) => void;
  selectedGender: string;
}

export const GenderButtons: React.FC<GenderButtonsProps> = ({
  onGenderSelect,
  selectedGender,
}: GenderButtonsProps) => {
  const GenderButton = ["Male", "Female", "All"]; // Buttons if Mens or Womens

  const handleGenderClick = (gender: string) => {
    onGenderSelect(gender); // Trigger the provided callback with the selected gender
  };

  return (
    <div className="flex items-center justify-start py-8 px-10">
      {GenderButton.map((gender: string, index: number) => {
        return (
          <div key={index} className="mr-4">
            <Button
              size="lg"
              placeholder={undefined}
              variant="outlined"
              color="gray"
              ripple={true}
              className={`hover:bg-green-900 hover:text-white ${
                selectedGender === gender ? "bg-green-900 text-white" : ""
              }`}
              onClick={() => handleGenderClick(gender)}
            >
              {gender}
            </Button>
          </div>
        );
      })}
    </div>
  );
};
