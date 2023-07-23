interface mission {
  name: string;
  logoUrl: string;
  partnerName: string;
  description: string;
  amountGrant: number;
  slug: string;
}

const data: mission[] = [
  {
    logoUrl: "/Images/SponsorLogos/biconomy.png",
    partnerName: "Biconomy",
    name: "Social LogIn",
    description: "Create a project using Social LogIn from Biconomy",
    amountGrant: 1000,
    slug: "1",
  },
  {
    logoUrl: "/Images/SponsorLogos/polygon.png",
    partnerName: "Polygon",
    name: "Test Tokens",
    description: "Accuire Test Tockens from Faucets",
    amountGrant: 100,
    slug: "4",
  },
  {
    logoUrl: "/Images/SponsorLogos/sismo.jpeg",
    partnerName: "Sismo",
    name: "Safe Autentification",
    description:
      "Create a project where you provide safe proof of identity of your users",
    amountGrant: 3000,
    slug: "2",
  },
  {
    logoUrl: "/Images/SponsorLogos/polygon.png",
    partnerName: "Polygon",
    name: "Deploy a smartContract",
    description: "Deploy a smartcontract using Mumbai Testnet",
    amountGrant: 150,
    slug: "3",
  },
  {
    logoUrl: "/Images/SponsorLogos/sismo.jpeg",
    partnerName: "Sismo",
    name: "Deploy a Smart Contract",
    description: "Find a use case for Sismo zk Solution",
    amountGrant: 1500,
    slug: "5",
  },
  {
    logoUrl: "/Images/SponsorLogos/biconomy.png",
    partnerName: "Biconomy",
    name: "Paymaster",
    description: "Create a project using a Paymaster Smart Contract",
    slug: "6",
    amountGrant: 2000,
  },
];

export default data;
