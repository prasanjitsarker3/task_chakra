import { Box, Container, HStack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import routerTemplate from "./routerLayout";

const Side = () => {
    const routerTem = routerTemplate; 
    return (
        <>
            <Container>
                <Box bg="gray.300 " height="500px" p={3} shadow="lg" rounded="md">
                    <Text>Side Navbar</Text>

                    <VStack py={3}>
                        {routerTem.map(router => (
                            <Link key={router.id} to={router.path}>
                                {router.routeName}
                            </Link>
                        ))}
                    </VStack>
                </Box>
            </Container>
        </>
    )
}
export default Side;