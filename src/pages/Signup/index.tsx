import { Flex, useToast } from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

import { SignupInfo } from "./SignupInfo";
import { SignupForm } from "./SignupForm";
import { api } from "../../services/api";
import { useHistory } from "react-router-dom";

const SignupSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup
    .string()
    .required("Email obrigatório")
    .email("Digite um email válido"),
  password: yup.string().required("Senha obrigatória"),
  confirm_password: yup
    .string()
    .required("Confirmação de senha obrigatória")
    .oneOf([yup.ref("password")], "Senhas diferentes"),
});

interface SignupData {
  name: string;
  email: string;
  password: string;
}

export const Signup = () => {
  const [loading, setLoading] = useState(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const toast = useToast();
  const history = useHistory();

  const handleSignup = ({ name, email, password }: SignupData) => {
    setLoading(true);

    api
      .post("/register", { name, email, password })
      .then((response) => {
        console.log(response.data);
        setLoading(false);
        toast({
          title: "Conta criada com sucesso!",
          description:
            "sua conta foi criada com sucesso, pode efetuar seu login",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast({
          title: "Email já cadastrado",
          description: "Por favor, tente  outro email",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  return (
    <Flex
      alignItems="center"
      justifyContent={["flex-start", "flex-start", "center", "center"]}
      height="100vh"
      flexDirection={["column", "column", "row", "row"]}
    >
      <SignupInfo />
      <SignupForm
        errors={errors}
        handleSignIn={handleSubmit(handleSignup as any)}
        loading={loading}
        register={register}
      />
    </Flex>
  );
};
