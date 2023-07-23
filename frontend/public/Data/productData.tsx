import { ethers } from "ethers";
import DAO_ABI from "../../utils/DAODemic.json";

interface product {
  imageurl: string;
  name: string;
  price: number;
  description: string;
  slug: string;
}

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_DAO_CONTRACT_ADDRESS || "";
const RPC_URL = process.env.NEXT_PUBLIC_RPC_URL;
const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATEKEY || "";

export const executeTransaction = async (address: string) => {
const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
const contract = new ethers.Contract(CONTRACT_ADDRESS, DAO_ABI);

const nonce = await wallet.getTransactionCount();
  const gasPrice = await provider.getGasPrice();
  const gasLimit = await contract.estimateGas.ConfirmGrant();

  const transaction = {
    to: CONTRACT_ADDRESS,
    nonce,
    gasPrice,
    gasLimit,
    data: contract.interface.encodeFunctionData("ConfirmGrant", [
      1, process.env.NEXT_PUBLIC_SMART_ACCOUNT,
    ]),
  };

  const transactionResponse = await wallet.sendTransaction(transaction);
  const transactionReceipt = await transactionResponse.wait();
  console.log(transactionReceipt);

  return transactionReceipt;
};


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
    name: " Internship",
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
