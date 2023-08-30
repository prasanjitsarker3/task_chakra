import { Box, Text } from "@chakra-ui/react";

const DashboardData = () => {
    const series = [
        {
            name: 'BAN',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
            name: 'IND',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
            name: 'USA',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
    ];
    return (
        <>
            <Box px="32px" pt="12px">
                <Text>Dashboard Data Analysis</Text>
            </Box>
        </>
    )
}
export default DashboardData;