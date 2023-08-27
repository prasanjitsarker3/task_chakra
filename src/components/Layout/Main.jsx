import { Outlet } from "react-router-dom";
import Navbar from "../Page/Navbar";
import { Box, Flex, VStack } from "@chakra-ui/react";
import Side from "./Side";

const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <Flex>
                <Box width="150px">
                    <Side></Side>
                </Box>
                <Box flex="1">  

                </Box>
            </Flex> */}
        </>
    )
}
export default Main;