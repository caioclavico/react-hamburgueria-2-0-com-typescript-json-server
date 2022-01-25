import { Button, Flex, Grid, Text, VStack } from "@chakra-ui/react";
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { useHistory } from "react-router-dom";
import { CustomInput } from "../../components/Form/Input";

interface SignupFormProps {
  handleSignIn: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<FieldValues>;
  loading: boolean;
}

export const SignupForm = ({
  handleSignIn,
  errors,
  register,
  loading,
}: SignupFormProps) => {
  const history = useHistory();
  return (
    <Grid
      as="form"
      onSubmit={handleSignIn}
      bgColor="#FFFFFF"
      border="2px solid #F5F5F5"
      borderRadius="5px"
      padding="26px 24px"
      w="500px"
    >
      <Flex justifyContent="space-between">
        <Text textStyle="h3">Cadastrar</Text>
        <Text
          textStyle="body"
          color="gray.300"
          textDecoration="underline"
          onClick={() => history.push("/")}
          cursor="pointer"
        >
          retornar para o login
        </Text>
      </Flex>
      <VStack spacing="6" mt="4">
        <CustomInput
          type="text"
          floating={true}
          label="Nome"
          error={errors.name}
          {...register("name")}
        />
        <CustomInput
          type="text"
          floating={true}
          label="Email"
          error={errors.email}
          {...register("email")}
        />
        <CustomInput
          type="password"
          floating={true}
          label="Senha"
          error={errors.password}
          {...register("password")}
        />
        <CustomInput
          type="password"
          floating={true}
          label="Confirmar Senha"
          error={errors.confirm_password}
          {...register("confirm_password")}
        />

        <Button variant="disable" size="lg" type="submit" isLoading={loading}>
          Cadastrar
        </Button>
      </VStack>
    </Grid>
  );
};
