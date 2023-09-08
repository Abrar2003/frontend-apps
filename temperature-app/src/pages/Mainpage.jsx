import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Select,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Mainpage = () => {
  const [value, setValue] = useState(0);
  const [query, setQuery] = useState("");
  const toast = useToast();
  const [res, setRes] = useState("");
  const handleClick = (q, factor) => {
    if (q == factor) {
      toast({
        title: `You can not convert the same value`,
        status: "error",
        position: "top",
        isClosable: true,
      });
      return;
    }
    if (factor == "f") {
      setRes(((value * 9) / 5 + 32).toFixed(3));
    }
    if (factor == "c") {
      setRes((((value - 32) * 5) / 9).toFixed(3));
    }
  };
  return (
    <Box
      pos={"absolute"}
      top={"200px"}
      left={"30%"}
      w={"40%"}
      h={"300px"}
      m={"auto"}
      shadow={"xl"}
    >
      <Flex
        justify={"center"}
        gap={"30px"}
        width={"70%"}
        m={"auto"}
        mt={"60px"}
      >
        <Input
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder="Please enter the value"
          type="number"
        />
        <Select
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Please select a value"
        >
          <option value={"f"}>Fahrenheit</option>
          <option value={"c"}>Celsius</option>
        </Select>
      </Flex>
      <Flex
        gap={"30px"}
        justify={"center"}
        width={"70%"}
        m={"auto"}
        mt={"30px"}
      >
        <Button onClick={() => handleClick(query, "c")}>
          Convert to Celcius
        </Button>
        <Button onClick={() => handleClick(query, "f")}>
          Convert to Fahrenheit
        </Button>
      </Flex>
      <Flex justify={"center"}>
        <Heading mt={"30px"} fontSize={"24px"}>
          Result: {res}
        </Heading>
      </Flex>
    </Box>
  );
};

export default Mainpage;
