import { Flex } from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

import { LoginInfo } from "./LoginInfo";
import { LoginForm } from "./LoginForm";

const loginSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});

interface LoginData {
  name: string;
  password: string;
}

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = (data: LoginData) => {
    setLoading(true);
    signIn(data)
      .then((_) => setLoading(false))
      .catch((err) => setLoading(false));
  };

  return (
    <Flex alignItems="center" justifyContent="center" height="100vh">
      <LoginForm
        errors={errors}
        handleSignIn={handleSubmit(handleLogin as any)}
        loading={loading}
        register={register}
      />

      <LoginInfo />
    </Flex>
  );
};
