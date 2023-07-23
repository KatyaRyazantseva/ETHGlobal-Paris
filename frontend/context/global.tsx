import React, {
  useContext,
  createContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface Props {
  children?: ReactNode;
}

interface AuthInterface {
  address: string;
  setAddress: (address: string) => void;
  ping: () => void;
}

const AuthContext = createContext<AuthInterface>({
  address: "",
  setAddress: () => undefined,
  ping: () => undefined,
});

const AuthProvider = ({ children }: Props): JSX.Element => {
  const [address, setAddress] = useState("");

  const ping = () => {
    console.log("ping");
  };

  return (
    <AuthContext.Provider
      value={{
        address: address,
        setAddress: setAddress,
        ping: ping,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
