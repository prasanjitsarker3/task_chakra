import { Button, Card, CardBody, Center, Container, Grid, Heading, Image, Input, InputGroup, InputRightElement, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Search = () => {
    const [events, setEvent] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [newSearchTerm, setNewSearchTerm] = useState([]);

    useEffect(() => {
        fetch("event.json")
            .then(res => res.json())
            .then(data => {
                setEvent(data)
                setNewSearchTerm(data)
            })
    }, [])

    const handleSearch = () => {
        const newData = events.filter(event => event.name.toLowerCase().includes(searchTerm.toLowerCase()))
        console.log(events)
        setNewSearchTerm(newData);
    }

    const handleEnterKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch(searchTerm);
        }
    }
    return (
        <>
            <InputGroup justifyContent="center" py="12px">
                <Input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleEnterKeyPress}
                    width="200px" border="1px" placeholder="Searc in here"></Input>
                <Button onClick={handleSearch} variant="solid" colorScheme="blue">Seacrh</Button>
            </InputGroup>


            <Center>
                <Grid
                    templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
                    gap={4}
                >
                    {
                        newSearchTerm.map((event) =>
                            <Card maxW='sm' key={event.id}>
                                <CardBody>
                                    <Image
                                        width="280px" height="200px"
                                        src={event.photo}
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>{event.name}</Heading>
                                        <Text>
                                            {event.title}
                                        </Text>
                                        <Button variant="solid" colorScheme="blue">Details</Button>
                                    </Stack>
                                </CardBody>

                            </Card>
                        )
                    }
                </Grid>
            </Center>
        </>
    )
}
export default Search;