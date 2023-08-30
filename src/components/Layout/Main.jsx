import { Outlet } from "react-router-dom";
import Navbar from "../Page/Navbar";
import { Box, Flex, VStack } from "@chakra-ui/react";
import Side from "./Side";

const Main = () => {
    return (
        <>
            {/* <Navbar></Navbar> */}
            <Box style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/scenery-sunset-ovead-perhower-line_181624-19969.jpg?size=626&ext=jpg&ga=GA1.1.720187752.1692781749&semt=ais")', backgroundSize: '100% 100%' }}>

                <Flex>
                    <Box width="200px">
                        <Side></Side>
                    </Box>
                    <Box flex="1">
                        <Outlet></Outlet>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}
export default Main;