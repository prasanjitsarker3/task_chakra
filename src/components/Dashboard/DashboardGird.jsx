import { Box, Center, Flex, Grid, GridItem, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FiCornerRightDown, FiCornerDownLeft, FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { CiBookmarkPlus, CiAirportSign1, CiAlignBottom, CiBrightnessDown, CiCloudRainbow, CiAlignCenterV, CiUser, CiSettings, CiExport, CiCircleChevRight, CiCircleChevLeft } from "react-icons/ci";
const DashboardGird = () => {
    const [hover, setHover] = useState(false);
    return (
        <>
            <Box py="20px" px="24px">
                <Flex justifyContent="space-between" px="32px" py="2px" pt="12px">
                    <Text color="white" fontWeight="semibold">Dsashboard</Text>
                    <Flex align="center" gap="8px">
                        <Icon as={CiSettings} boxSize="30px" color="white" />
                        <Icon as={CiExport} boxSize="30px" color="white" />
                        <Icon as={CiUser} boxSize="30px" color="white" bg="blue.500" borderRadius={100} p={1} />
                    </Flex>
                </Flex >

                <Grid templateColumns={['repeat(1, 1fr)', 'repeat(6, 1fr)', 'repeat(12, 1fr)']} py="7px" gap={2}>
                    <GridItem onMouseMove={() => setHover(!hover)} onMouseLeave={() => setHover(hover)} colSpan={2} bg='blue.500' p={3} rounded="xl">
                        <Center transform={hover ? "scale(1.3)" : "scale(0.9)"}
                            transition="transform 0.2s ease-in-out" >
                            <Icon as={CiBookmarkPlus} boxSize="40px" color="white" />
                        </Center>
                        <Text color="white" textAlign="center" fontSize="lg">102</Text>
                        <Text textAlign="center" fontSize="lg" color="white">New Ticket</Text>
                    </GridItem>
                    <GridItem >
                        <Flex display="flex" height="full" justifyContent="center" align="center" color="white">
                            <Text fontWeight={700}>--------</Text>
                            <Box pt="4px"><FiArrowRight /></Box>
                        </Flex>
                    </GridItem>
                    <GridItem  colSpan={2} bg='blue.500' p={3} rounded="xl">
                        <Center>
                            <Icon as={CiAirportSign1} boxSize="50px" color="white" />
                        </Center>
                        <Text color="white" textAlign="center" fontSize="lg">02</Text>
                        <Text textAlign="center" fontSize="lg" color="white">My Ticket</Text>
                    </GridItem>
                    <GridItem >
                        <Flex display="flex" height="full" justifyContent="center" align="center" color="white">
                            <Text fontWeight={700}>--------</Text>
                            <Box pt="4px"><FiArrowRight /></Box>
                        </Flex>
                    </GridItem>
                    <GridItem colSpan={2} bg='blue.500' p={3} rounded="xl">
                        <Center>
                            <Icon as={CiAlignBottom} boxSize="50px" color="white" />
                        </Center>
                        <Text color="white" textAlign="center" fontSize="lg">202</Text>
                        <Text textAlign="center" fontSize="lg" color="white">Dispatch Ticket</Text>
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Flex display="flex" height="full" justifyContent="center" align="center" color="white">
                            <Text fontWeight={700}>----------------------</Text>
                            <Box mt="14px">
                                <FiCornerRightDown />
                            </Box>
                        </Flex>
                    </GridItem>
                    <GridItem  >  </GridItem>
                    <GridItem  ></GridItem>
                    <GridItem  ></GridItem>
                </Grid>

                {/* Second Grid Section */}
                <Grid templateColumns={['repeat(1, 1fr)', 'repeat(6, 1fr)', 'repeat(12, 1fr)']} gap={2} py="7px">
                    <GridItem colSpan={2}></GridItem>
                    <GridItem  ></GridItem>
                    <GridItem colSpan={2} bg='blue.500' p={3} rounded="xl">
                        <Center>
                            <Icon as={CiBrightnessDown} boxSize="50px" color="white" />
                        </Center>
                        <Text color="white" textAlign="center" fontSize="lg">54</Text>
                        <Text textAlign="center" fontSize="lg" color="white">Invalid Ticket</Text>
                    </GridItem>
                    <GridItem  >
                        <Flex display="flex" height="full" justifyContent="center" align="center" color="white">
                            <Box pt="4px"><FiArrowLeft /></Box>
                            <Text fontWeight={700}>--------</Text>
                        </Flex>
                    </GridItem>
                    <GridItem colSpan={2} bg='blue.500' p={3} rounded="xl">
                        <Center>
                            <Icon as={CiCloudRainbow} boxSize="50px" color="white" />
                        </Center>
                        <Text color="white" textAlign="center" fontSize="lg">102</Text>
                        <Text textAlign="center" fontSize="lg" color="white">Complain Center</Text>
                    </GridItem>
                    <GridItem >
                        <Flex display="flex" height="full" justifyContent="center" align="center" color="white">
                            <Box pt="4px"><FiArrowLeft /></Box>
                            <Text fontWeight={700}>--------</Text>
                        </Flex>
                    </GridItem>
                    <GridItem colSpan={2} bg='blue.500' p={3} rounded="xl">
                        <Center>
                            <Icon as={CiBookmarkPlus} boxSize="50px" color="yellow" />
                        </Center>
                        <Text color="white" textAlign="center" fontSize="lg">00</Text>
                        <Text textAlign="center" fontSize="lg" color="white">Recall</Text>
                    </GridItem>
                    <GridItem  ></GridItem>
                </Grid>
                {/* Third Gird Section */}
                <Grid templateColumns={['repeat(1, 1fr)', 'repeat(6, 1fr)', 'repeat(12, 1fr)']} gap={2} py="7px">
                    <GridItem colSpan={2} ></GridItem>
                    <GridItem  ></GridItem>
                    <GridItem colSpan={2} bg='blue.500' p={3} rounded="xl">
                        <Center>
                            <Icon as={CiAlignCenterV} boxSize="50px" color="white" />
                        </Center>
                        <Text color="white" textAlign="center" fontSize="lg">000</Text>
                        <Text textAlign="center" fontSize="lg" color="white">Complete Ticket</Text>
                    </GridItem>
                    <GridItem  >
                        <Flex display="flex" height="full" justifyContent="center" align="center" color="white">
                            <Box pt="4px"><FiArrowLeft /></Box>
                            <Text fontWeight={700}>--------</Text>
                        </Flex>
                    </GridItem>
                    <GridItem colSpan={2} bg='blue.500' p={3} rounded="xl">
                        <Center>
                            <Icon as={CiBookmarkPlus} boxSize="50px" color="white" />
                        </Center>
                        <Text color="white" textAlign="center" fontSize="lg">0</Text>
                        <Text textAlign="center" fontSize="lg" color="white">Complain Center Resolve</Text>
                    </GridItem>
                    <GridItem colSpan={2} >
                        <Flex display="flex" height="full" justifyContent="center" align="center" color="white">
                            <Box pt="4px"><FiArrowLeft /></Box>
                            <Text fontWeight={700}>---------------------</Text>
                            <FiCornerDownLeft />
                        </Flex>
                    </GridItem>
                    <GridItem  >

                    </GridItem>
                    <GridItem  ></GridItem>
                    {/* <GridItem  ></GridItem> */}
                </Grid>
            </Box>
        </>
    )
}
export default DashboardGird;