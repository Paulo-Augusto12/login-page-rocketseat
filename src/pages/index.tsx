import {
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { Divider } from "../../Components/Divider/Divider";
export default function Home() {
  return (
    <Grid
      as={"main"}
      height={"100vh"}
      templateColumns={"1fr 480px 480px 1fr"}
      templateRows={"1fr 480 1fr"}
      templateAreas={" '. . . .' '. logo form .' ' . . . .' "}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex gridArea={"logo"} flexDir={"column"} alignItems={"flex-start"}>
        <img src="/rocketseat.svg" alt="rocketseat" />
        <Heading size={"2xl"} lineHeight={"shorter"} marginTop={16}>
          Faça seu login na plataforma
        </Heading>
      </Flex>
      <Flex
        gridArea={"form"}
        backgroundColor={"gray.700"}
        borderRadius={"md"}
        flexDir={"column"}
        alignItems={"stretch"}
        padding={16}
      >
        <Input
          height={"50px"}
          backgroundColor={"gray.800"}
          focusBorderColor="purple.500"
          borderRadius={"sm"}
          placeholder="E-mail"
          border={"none"}
        />
        <Input
          height={"50px"}
          backgroundColor={"gray.800"}
          focusBorderColor="purple.500"
          borderRadius={"sm"}
          placeholder="Senha"
          marginTop={2}
          border={"none"}
        />
        <Link
          alignSelf={"flex-start"}
          marginTop={2}
          fontSize={"sm"}
          color={"purple.600"}
          fontWeight={"bold"}
          _hover={{ color: "purple.500" }}
        >
          Esqueci minha senha
        </Link>
        <Button
          marginTop={6}
          height={"50px"}
          backgroundColor={"purple.500"}
          borderRadius={"sm"}
          _hover={{ backgroundColor: "purple.600" }}
        >
          ENTRAR
        </Button>

        <Text
          textAlign={"center"}
          fontSize={"sm"}
          color={"gray.300"}
          marginTop={6}
        >
          Não tem uma conta? {""}{" "}
          <Link
            color={"purple.600"}
            fontWeight={"bold"}
            _hover={{ color: "purple.500" }}
          >
            Registre-se
          </Link>
        </Text>
        <Divider />
        <Flex alignItems={"center"}>
          <Text fontSize={"sm"}>Ou entre com</Text>
          <Button
            height={"50px"}
            flex={1}
            _hover={{ backgroundColor: "purple.500" }}
            marginLeft={6}
            fontSize={"sm"}
            borderRadius={"sm"}
          >
            Github
          </Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
