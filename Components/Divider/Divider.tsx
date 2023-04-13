import React from "react";
import { Divider as DividerChakra, Grid } from "@chakra-ui/react";

export function Divider() {
  return (
    <Grid gridTemplateColumns={"1fr 1fr"} columnGap={12} opacity={0.4}>
      <DividerChakra marginY={6} />
      <DividerChakra marginY={6} />
    </Grid>
  );
}
