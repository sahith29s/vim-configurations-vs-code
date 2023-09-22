import { Box, Container, Text } from '@chakra-ui/react'
import React from 'react'

const Homepage = () => {
    return (
        <Container maxW="xl" centerContent>
            <Box
                display="flex"
                justifyContent="center"
                p={3}
                bg={"white"}
                w="100%"
                m="40px 0 15px 0"
                borderRadius="lg"
                borderWidth="1px"
            >
                <Text>
                    Talk-A-Tive
                </Text>
            </Box>

            <Box>

            </Box>
        </Container>

    )
}

export default Homepage