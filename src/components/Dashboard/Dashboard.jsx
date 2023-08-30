import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { CiHome, CiCircleInfo, CiMaximize1, CiBookmarkPlus, CiShare1 } from "react-icons/ci";
import DashboardGird from "./DashboardGird";
import DashboardData from "./DashboarsData";
// import { IconName } from "react-icons/fa";

const Dashboard = () => {
    return (
        <>
            <Box 
             mt="12px"   background="rgba(255, 255, 255, 0.1)" backdropFilter="blur(7px)" borderRadius="8px" m="20px" >
                <DashboardGird></DashboardGird>
                {/* <DashboardData></DashboardData> */}
            </Box>
        </>
    )
}
export default Dashboard;