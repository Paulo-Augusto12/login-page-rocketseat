import { Flex, Grid, Text } from "@chakra-ui/react";
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
      </Flex>
      <Text color={'purple.500'}>
        aaa
      </Text>
    </Grid>
  );
}
