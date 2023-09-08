import React from "react";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const TodoList = ({ todos, handleDelete }) => {
  return (
    <Box>
      <Text my={"30px"} textAlign={"center"} fontSize={"xl"}>Todo List</Text>
      <Stack shadow={"xl"} height={"250px"} overflow={"auto"} m={"auto"} gap={"20px"} width={"80%"}>
        {todos.map((el, i) => (
          <Flex fontSize={"lg"} borderBottom={"2px solid"} width={"100%"} justify={"space-between"}>
            <Text>{el}</Text>
            <Box onClick={() => handleDelete(i)}>
              <DeleteIcon />
            </Box>
          </Flex>
        ))}
      </Stack>
    </Box>
  );
};

export default TodoList;
