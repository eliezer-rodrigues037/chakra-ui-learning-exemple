import { Box, Flex, Text, Heading, Button, HStack, StackProps, Icon, Stack } from "@chakra-ui/react";
import { CheckIcon } from "../assets/icons/Icon";

export const ListItem = (props: StackProps) => {
    const { children, ...rest } = props;
    return (
        <HStack as="li" spacing="20px" {...rest} alignItems="start">
            <Icon as={CheckIcon} w="22px" h="22px" />
            <Text textAlign={["left", "left", "center"]}>{children}</Text>
        </HStack>
    );
};

export default function Pricing() {
    return (
        <Box mx="25px">
            <Box
                maxW="994px"
                margin="auto"
                borderRadius="12px"
                mt="-141"
                overflow="hidden"
                boxShadow="box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.04);

        box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1);
        "
            >
                <Flex direction={["column", "column", "row"]}>
                    <Box bg="#E5E5E5" p="60px">
                        <Box color="#171923;">
                            <Text fontWeight="800" fontSize="24px" mb="16px">
                                Premium PRO
                            </Text>
                            <Heading as="h3" fontSize={["48px", "48px", "60px"]} mb="8px">
                                $329
                            </Heading>
                            <Text>billed just once</Text>
                        </Box>
                        <Button colorScheme="purple" size="lg" w={["100%", "282px", "282px"]} mt="24px">
                            Get Started
                        </Button>
                    </Box>
                    <Box p="60px" fontSize="18px" bg="#FFFFFF">
                        <Text w={["353px", "353px", "520px"]} textAlign="left">
                            Access these features when you get this pricing package for your business.
                        </Text>
                        <Stack spacing="16px" pt="24px">
                            <ListItem>International calling and messaging API</ListItem>
                            <ListItem>Additional phone numbers</ListItem>
                            <ListItem>Automated messages via Zapier</ListItem>
                            <ListItem>24/7 support and consulting</ListItem>
                        </Stack>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}
