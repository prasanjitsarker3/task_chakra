import { Flex, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import routerTemplate from "../Layout/routerLayout";

const Navbar = () => {
    const routerTem = routerTemplate;
    console.log(routerTem);
    return (
        <>
            <Flex justify="space-between" py={3} px="3px" mx={3} bg="gray.200">
                <VStack px={2}>
                    <Text>Navbar</Text>
                </VStack>
                <VStack px={2}>
                    <Flex justify="flex-start" gap={2}>
                        {routerTem.map(router => (
                            <Link key={router.id} to={router.path}>
                                {router.routeName}
                            </Link>
                        ))}
                    </Flex>
                </VStack>
            </Flex>
        </>
    )
}
export default Navbar;