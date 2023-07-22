interface mission {
  name: string;
  logoUrl: string;
  partnerName: string;
  description: string;
  slug: string;
}

const data: mission[] = [
  {
    logoUrl: "/Images/SponsorLogos/biconomy.png",
    partnerName: "Biconomy",
    name: "Social LogIn",
    description: "Create a project using Social LogIn from Biconomy",
    slug: "1",
  },
  {
    logoUrl: "/Images/SponsorLogos/sismo.jpeg",
    partnerName: "Sismo",
    name: "Safe Autentification",
    description:
      "Create a project where you provide safe proof of identity of your users",
    slug: "2",
  },
  {
    logoUrl: "/Images/SponsorLogos/polygon.png",
    partnerName: "Polygon",
    name: "Deploy a smartContract",
    description: "Deploy a smartcontract using Mumbai Testnet",
    slug: "3",
  },
];

export default data;
