import { Flex, useToast } from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

import { LoginInfo } from "./LoginInfo";
import { LoginForm } from "./LoginForm";
import { useHistory } from "react-router-dom";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email obrigatório")
    .email("Digite um email válido"),
  password: yup.string().required("Senha obrigatória"),
});

interface LoginData {
  email: string;
  password: string;
}

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const toast = useToast();
  const history = useHistory();
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
      .then((response) => {
        console.log(response);
        setLoading(false);
        toast({
          title: "Bem vindo de volta!!",
          description: "Pode matar sua fome",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast({
          title: "Email ou senha incorretos",
          description: "Por favor, tente  novamente ou efetue seu cadastro",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  return (
    <Flex
      alignItems="center"
      justifyContent={["flex-end", "flex-end", "center", "center"]}
      height="100vh"
      flexDirection={["column-reverse", "column-reverse", "row", "row"]}
    >
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
