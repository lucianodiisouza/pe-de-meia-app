import React from "react";
import { Button, Image, Text, View, YStack } from "tamagui";

import logo from "../../assets/logo.png";

export const Home = () => {
  return (
    <YStack alignItems="center" justifyContent="center" flex={1} gap="$4">
      <YStack
        alignItems="center"
        justifyContent="center"
        maxWidth="80%"
        gap="$2"
        paddingBottom="$4"
      >
        <Image source={logo} />
        <Text color="#00D09E" fontWeight="bold" fontSize={32}>
          Pé de Meia
        </Text>
        <Text textAlign="center" fontWeight="100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.{" "}
        </Text>
      </YStack>
      <YStack gap="$3" alignItems="center">
        <Button
          width="$16"
          borderRadius="$12"
          backgroundColor="#00D09E"
          fontWeight="bold"
          fontSize="$6"
          color="#093030"
        >
          Log In
        </Button>
        <Button
          width="$16"
          borderRadius="$12"
          backgroundColor="#DFF7E2"
          fontWeight="bold"
          fontSize="$6"
          color="#093030"
        >
          Sign Up
        </Button>
        <Button backgroundColor="transparent" fontWeight="bold" fontSize={12}>
          Forgot password?
        </Button>
      </YStack>
    </YStack>
  );
};
