interface product {
  imageurl: string;
  name: string;
  price: number;
  description: string;
  slug: string;
}

const productData: product[] = [
  {
    name: " Event Ticket",
    price: 500,
    description:
      "Join EthCC Hackathon! Code, connect, innovate. Your ticket to crypto development!",
    slug: "1",
    imageurl: "/Images/PricesLogos/EthGlobal.png",
  },
  {
    name: " Intership",
    price: 2000,
    description:
      "Secure your future! 3-month Ledger internship. Explore crypto & blockchain tech.",
    slug: "2",
    imageurl: "/Images/PricesLogos/Ledger.png",
  },
  {
    name: "Training to Devconect",
    price: 1000,
    description:
      "Devconnect ticket: Network, learn, innovate. Your entry to the tech frontier!",
    slug: "3",
    imageurl: "/Images/PricesLogos/Group.png",
  },
  {
    name: "Solidity Bootcamp",
    price: 1000,
    description:
      "Dive into blockchain! 6-month Solidity Bootcamp. Fast-track your coding prowess.",
    slug: "3",
    imageurl: "/Images/PricesLogos/Encode.png",
  },
];

export default productData;
