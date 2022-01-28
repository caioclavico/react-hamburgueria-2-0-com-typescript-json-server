import { Box, Button, Grid, Text, VStack } from "@chakra-ui/react";
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { useHistory } from "react-router-dom";
import { CustomInput } from "../../components/Form/Input";

interface LoginFormProps {
  handleSignIn: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<FieldValues>;
  loading: boolean;
}

export const LoginForm = ({
  handleSignIn,
  errors,
  register,
  loading,
}: LoginFormProps) => {
  const history = useHistory();

  return (
    <Grid
      as="form"
      onSubmit={handleSignIn}
      bgColor="#FFFFFF"
      border="2px solid #F5F5F5"
      borderRadius="5px"
      padding="26px 24px"
    >
      <Text textStyle="h3">Login</Text>
      <VStack spacing="6" mt="4">
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

        <Button size="lg" type="submit" isLoading={loading}>
          Logar
        </Button>
        <Box textAlign="center" px={["10px", "10px", "86px", "86px"]}>
          <Text textStyle="body" color="gray.50">
            Crie sua conta para saborear muitas delícias e<br /> matar sua fome!
          </Text>
        </Box>
        <Button
          variant="disable"
          size="lg"
          onClick={() => history.push("/signup")}
        >
          Cadastrar
        </Button>
      </VStack>
    </Grid>
  );
};
