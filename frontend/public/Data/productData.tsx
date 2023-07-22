interface product {
  name: string;
  price: number;
  description: string;
  slug: string;
}

const productData: product[] = [
  {
    name: " Event Ticket",
    price: 500,
    description: "Ticket to EthCC",
    slug: "1",
  },
  {
    name: " Intership",
    price: 2000,
    description: "3 month intership at Ledger",
    slug: "2",
  },
  {
    name: "Training Course",
    price: 1000,
    description: "Solidity Bootcamp 6 months",
    slug: "3",
  },
];

export default productData;
