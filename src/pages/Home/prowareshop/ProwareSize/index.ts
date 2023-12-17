interface Product {
  id: number;
  uniPicture: string;
  uniName: string;
  uniGender?: string; // Make uniGender optional
  uniPrice: number;
  uniSize: string;
}

// IT Small Size
const bsitSmallItems: Product[] = [
  {
    id: 1,
    uniPicture:
      "https://firebasestorage.googleapis.com/v0/b/modiform-35693.appspot.com/o/front_end_pictures%2FBSIT%2FITUNIF.jpg?alt=media&token=147b9262-7618-45e9-8933-426653120a17",
    uniName: "POLO",
    uniGender: "MENS", // Provide uniGender for items
    uniPrice: 100.0,
    uniSize: "SMALL",
  },

  {
    id: 2,
    uniPicture:
      "https://firebasestorage.googleapis.com/v0/b/modiform-35693.appspot.com/o/front_end_pictures%2FBSIT%2FITPANTS.png?alt=media&token=98109abd-7b81-461d-afd2-d26576242c78",
    uniName: "PANTS",
    uniGender: "MENS",
    uniPrice: 120.0,
    uniSize: "SMALL",
  },
  // Add other products with or without uniGender
];

// IT Medium Size
const bsitMediumItems: Product[] = [
  {
    id: 10,
    uniPicture:
      "https://firebasestorage.googleapis.com/v0/b/modiform-35693.appspot.com/o/front_end_pictures%2FBSIT%2FITUNIF.jpg?alt=media&token=147b9262-7618-45e9-8933-426653120a17",
    uniName: "IT POLO",
    uniGender: "MENS", // Provide uniGender for items
    uniPrice: 100.0,
    uniSize: "MEDIUM",
  },

  {
    id: 11,
    uniPicture:
      "https://firebasestorage.googleapis.com/v0/b/modiform-35693.appspot.com/o/front_end_pictures%2FBSIT%2FITPANTS.png?alt=media&token=98109abd-7b81-461d-afd2-d26576242c78",
    uniName: "IT PANTS",
    uniGender: "MENS",
    uniPrice: 120.0,
    uniSize: "MEDIUM",
  },
  // Add other products with or without uniGender
];

// TM Small Size
const tourismSmallItems: Product[] = [
  {
    id: 101,
    uniPicture:
      "https://firebasestorage.googleapis.com/v0/b/modiform-35693.appspot.com/o/front_end_pictures%2FTOURISM%2FTourPolo.JPG?alt=media&token=983018ae-39a1-418c-ada2-d950e73f0a0f",
    uniName: "TM POLO",
    uniGender: "MENS", // Provide uniGender for items
    uniPrice: 90.0,
    uniSize: "SMALL",
  },

  {
    id: 102,
    uniPicture:
      "https://firebasestorage.googleapis.com/v0/b/modiform-35693.appspot.com/o/front_end_pictures%2FTOURISM%2FTourPants.JPG?alt=media&token=709c822d-b5db-429b-9080-d576f83313e2",
    uniName: "TM PANTS",
    uniGender: "MENS",
    uniPrice: 200.0,
    uniSize: "SMALL",
  },

  {
    id: 103,
    uniPicture:
      "https://firebasestorage.googleapis.com/v0/b/modiform-35693.appspot.com/o/front_end_pictures%2FTOURISM%2FNecktie.JPG?alt=media&token=0123a1d6-d70b-4905-851e-204f46d55c40",
    uniName: "NECKTIE",
    uniGender: "MENS",
    uniPrice: 50.0,
    uniSize: "Unisize",
  },

  {
    id: 104,
    uniPicture:
      "https://firebasestorage.googleapis.com/v0/b/modiform-35693.appspot.com/o/front_end_pictures%2FTOURISM%2FTourFormal.JPG?alt=media&token=9ed72e53-20eb-4974-a87b-9bd08de734c6",
    uniName: "TM MALE BLAZER",
    uniGender: "MENS",
    uniPrice: 1000.0,
    uniSize: "SMALL",
  },
];

const tourismMediumlItems: Product[] = [
  {
    id: 110,
    uniPicture:
      "https://firebasestorage.googleapis.com/v0/b/modiform-35693.appspot.com/o/front_end_pictures%2FTOURISM%2FTourPolo.JPG?alt=media&token=983018ae-39a1-418c-ada2-d950e73f0a0f",
    uniName: "TM POLO",
    uniGender: "MENS", // Provide uniGender for items
    uniPrice: 90.0,
    uniSize: "MEDIUM",
  },

  {
    id: 111,
    uniPicture:
      "https://firebasestorage.googleapis.com/v0/b/modiform-35693.appspot.com/o/front_end_pictures%2FTOURISM%2FTourPants.JPG?alt=media&token=709c822d-b5db-429b-9080-d576f83313e2",
    uniName: "TM PANTS",
    uniGender: "MENS",
    uniPrice: 200.0,
    uniSize: "MEDIUM",
  },

  {
    id: 112,
    uniPicture:
      "https://firebasestorage.googleapis.com/v0/b/modiform-35693.appspot.com/o/front_end_pictures%2FTOURISM%2FNecktie.JPG?alt=media&token=0123a1d6-d70b-4905-851e-204f46d55c40",
    uniName: "NECKTIE",
    uniGender: "MENS",
    uniPrice: 50.0,
    uniSize: "Unisize",
  },

  {
    id: 113,
    uniPicture:
      "https://firebasestorage.googleapis.com/v0/b/modiform-35693.appspot.com/o/front_end_pictures%2FTOURISM%2FTourFormal.JPG?alt=media&token=9ed72e53-20eb-4974-a87b-9bd08de734c6",
    uniName: "TM MALE BLAZER",
    uniGender: "MENS",
    uniPrice: 1000.0,
    uniSize: "MEDIUM",
  },
];

export {
  bsitSmallItems,
  bsitMediumItems,
  tourismSmallItems,
  tourismMediumlItems,
};
