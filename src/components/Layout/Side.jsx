import { Box, Center, Container, Divider, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import routerTemplate from "./routerLayout";
import { CiHome, CiUser, CiDatabase, CiCircleInfo } from "react-icons/ci";

const Side = () => {
    return (
        <>
            <Box mt="12px" ml="7px" bg="gray.300 " height="610px" p={5} shadow="lg" rounded="md">
                <Box>
                    <Center>
                        <VStack>
                            <Image width="50" height="50" borderRadius="full" src="https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-design_460848-8717.jpg?size=626&ext=jpg&ga=GA1.1.720187752.1692781749&semt=ais"></Image>
                            <Text color="linkedin.800" fontWeight="semibold">Comapny Name</Text>
                            <Divider py="3px" borderColor="linkedin.800" borderBottomWidth="3px" fontWeight="bold" />
                        </VStack>
                    </Center>
                </Box>
                <Link to="/dashboard">
                    <Flex justifyContent="space-between" pt="12px" align="center" color="linkedin.800">
                        <Text>Dashboard</Text>
                        <CiHome />
                    </Flex>
                </Link>
                <Link to="/user">
                    <Flex justifyContent="space-between" py="9px" align="center" color="linkedin.800">
                        <Text>All User</Text>
                        <CiUser />
                    </Flex>
                </Link>
                <Link to="/dashboard">
                    <Flex justifyContent="space-between" align="center" color="linkedin.800">
                        <Text>Data Analysis</Text>
                        <CiDatabase />
                    </Flex>
                </Link>
                <Link to="/dashboard">
                    <Flex justifyContent="space-between" py="9px" align="center" color="linkedin.800">
                        <Text>User Info</Text>
                        <CiCircleInfo />
                    </Flex>
                </Link>


            </Box>
        </>
    )
}
export default Side;