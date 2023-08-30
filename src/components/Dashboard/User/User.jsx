import { Box, Button, Grid, GridItem, IconButton, Input, InputGroup, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const User = () => {
    const [userData, setUserData] = useState([]);
    const [userSearch, setuserSearch] = useState("");
    const [newUserSearch, setNewUserSearch] = useState([])
    useEffect(() => {
        fetch("student.json")
            .then(res => res.json())
            .then(data => {
                setUserData(data.students)
                setNewUserSearch(data.students)
            })
    }, [])

    const handleClicked = () => {
        const newData = userData.filter(user => user.name.toLowerCase().includes(userSearch.toLowerCase()));
        setNewUserSearch(newData);
    }
    const handleEnterKeyPress = (e) => {
        if (e.key === "Enter") {
            handleClicked(userSearch);
        }
    }
    return (
        <>
            <Box mt="12px" py={10} px="12px" bg="white">
                {/* Searching Section Get Value And Handle Clicked */}
                <InputGroup justifyContent="center" py="12px">
                    <Input
                        value={userSearch}
                        onChange={(e) => setuserSearch(e.target.value)}
                        onKeyUp={handleEnterKeyPress}
                        width="200px" border="1px" placeholder="Searc in here"></Input>
                    <Button onClick={handleClicked} variant="solid" colorScheme="blue">Seacrh</Button>
                </InputGroup>

                {/* When Searching Value Null Then Show  */}
                {newUserSearch.length == 0 && <Text textAlign="center" fontWeight={700} py={3}>Please Typing Valid Name</Text>}


                {/* Show Table Data  */}
                <TableContainer py={7}>
                    <Table variant='striped' colorScheme="cyan">
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Class</Th>
                                <Th>Roll</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                newUserSearch.slice(0, 7).map((user, index) =>
                                    <Tr key={index}>
                                        <Td>{user.name}</Td>
                                        <Td>{user.class}</Td>
                                        <Td >{user.roll_number}</Td>
                                    </Tr>)
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}
export default User;