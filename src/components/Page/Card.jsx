import { Button, Center, Container, Input, InputGroup, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

const Card = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [newSearch, setNewSearch] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responsive = await axios.get("https://jsonplaceholder.typicode.com/users")
                setData(responsive.data)
                setNewSearch(responsive.data)
            }
            catch (error) {
                console.log("Error", error)
            }
        }
        fetchData()
    }, [])

    const handleClickedBtn = () => {
        const newData = data.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
        setNewSearch(newData)
    }
    // console.log("User Information Data", data);
    return (
        <>
            <InputGroup justifyContent="center" py="12px">
                <Input
                    value={search} onChange={(e) => setSearch(e.target.value)}
                    width="200px" border="1px" placeholder="Searc in here"></Input>
                <Button onClick={handleClickedBtn} variant="solid" colorScheme="blue">Seacrh</Button>
            </InputGroup>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing="15px" px="18px">
                {
                    newSearch.length === 0 ? (
                        <Center justifyContent="center">
                            <Text color="red.500" >No results found. Please search with a correct name.</Text>
                        </Center>
                    ) : (
                        newSearch.map(user =>
                            <VStack padding={3} border="1px " rounded="md">
                                <Text fontSize="">{user.name}</Text>
                                <Text>{user?.email}</Text>
                                <Text>{user.phone}</Text>
                            </VStack>
                        ))
                }
            </SimpleGrid>
        </>
    )
}
export default Card;