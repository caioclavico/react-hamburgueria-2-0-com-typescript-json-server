import { Button } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";

export const Dashboard = () => {
  const { signOut } = useAuth();
  return (
    <div>
      <h2>Dashboard</h2>
      <Button onClick={signOut}>Sair da conta</Button>
    </div>
  );
};
