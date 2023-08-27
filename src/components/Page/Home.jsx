import { Button, Card, CardBody, Center, Container, Heading, Image, Stack } from "@chakra-ui/react";
import { useState } from "react";

const Home = () => {
    const [card, setCard] = useState(false);

    const handleMouseEnter = () => {
        setCard(true);
    }
    const handleMouseLeave = () => {
        setCard(false);
    }

    return (
        <Container>
            <Card  cursor="pointer" maxW='sm' bg="blue.400" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <CardBody>
                    <Center>
                        <Image
                            width="280px"
                            height="160px"
                            color="white"
                            transform={card ? "scale(1) rotate(4deg)" : "scale(0.9) rotate(0deg)"}  // Corrected the closing parenthesis
                            transition='transform 0.5s ease, rotate 0.5s ease'
                            src='https://img.icons8.com/?size=1x&id=108639&format=png'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                    </Center>
                    <Stack mt='6' spacing='3'>
                        <Heading color="white" textAlign="center" size="sm">Living room Sofa</Heading>
                        <Button variant='solid' colorScheme='blue'>
                            Add to cart
                        </Button>
                       
                    </Stack>
                </CardBody>
            </Card>
        </Container>
    )
}

export default Home;
