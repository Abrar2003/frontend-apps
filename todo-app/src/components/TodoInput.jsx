import React from "react";
import { Box, Input, Button, FormLabel, Flex } from "@chakra-ui/react";
import { useState } from "react";

const TodoInput = ({setTodo, handleAddTodo}) => {
  return (
    <Box>
      <FormLabel>Your Todo</FormLabel>
      <Flex>
        <Input type="text"  onChange={(e) => setTodo(e.target.value)}/>
        <Button onClick={handleAddTodo}>Add Todo</Button>
      </Flex>
    </Box>
  );
};

export default TodoInput;
