import { Grid, Text, VStack } from "@chakra-ui/react";

const Country = ({ currentCountry }) => {
    // console.log("Country", country)
    return (
        <>
            <VStack>
                <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
                    gap={4}>
                    {
                        currentCountry.map(page =>
                            <Text border="1px " p={3}>{page.name.common}</Text>
                        )
                    }
                </Grid>
            </VStack>
        </>
    )
}
export default Country;