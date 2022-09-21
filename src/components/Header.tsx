import { Box, Heading, Text } from "@chakra-ui/react";

export default function Header() {
    return (
        <Box as="section" color="#F7FAFC" bg="#6B46C1" pt="90px" pb="198px" px="32px" textAlign={["left", "left", "center"]}>
            <Heading fontWeight="800" fontSize={["3xl", "3xl", "5xl"]} pb="16px">
                Simple pricing for your buisnes
            </Heading>
            <Text fontWeight="500" fontSize="24px">
                Plans that ar carefullu crafted to suit to your buisness.
            </Text>
        </Box>
    );
}
