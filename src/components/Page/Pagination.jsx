import { Button, Flex, Text } from "@chakra-ui/react";

const Pagination = ({ pastPage, totalPage, setCurrentPage, currentPage }) => {
    // Looping Section in pagination
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPage / pastPage); i++) {
        pages.push(i)
    }

    return (
        <>
            <Flex justifyContent="center" mt={4} gap={3}>
                {
                    pages.map((page, index) => {
                        return <Text cursor="pointer" borderRadius="full" onClick={() => setCurrentPage(page)} className={page == currentPage ? "active" : "default"} key={index}>{page}</Text>
                    })
                }
            </Flex>
        </>
    )
}
export default Pagination;