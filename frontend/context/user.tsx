import { useEffect, useState } from "react";

export default function useUser() {
  const [address, setAddress] = useState("");
  useEffect(() => {
    console.log("useeffect", address);
  }, [address]);
  return { address, setAddress };
}
