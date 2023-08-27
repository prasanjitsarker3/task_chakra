import { Button, Center, HStack, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Country from "./Country";
import Pagination from "./Pagination";

const About = () => {
    const [country, setCountry] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pastPage, setPastPage] = useState(9);

    const getCountryData = async () => {
        try {
            const res = await axios.get("https://restcountries.com/v3.1/all")
            setCountry(res.data.slice(0, 36));
        }
        catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getCountryData();
    }, [])

    const latestPageIndex = currentPage + pastPage;
    const firstPageIndex = latestPageIndex - pastPage;
    const currentCountry = country.slice(firstPageIndex, latestPageIndex)

    return (
        <>
            <VStack>
                <Text>Country Information : {country.length}</Text>
                <Country currentCountry={currentCountry}></Country>
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}
                 pastPage={pastPage} totalPage={country.length}></Pagination>
            </VStack>
        </>
    )
}
export default About;