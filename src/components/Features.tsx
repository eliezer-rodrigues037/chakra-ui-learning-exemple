import { Box, Stack, Icon, StackProps, Text, HStack } from "@chakra-ui/react";
import { ElementType } from "react";
import { PriceTagIcon, ReturnIcon, ShieldStarIcon } from "../assets/icons/Icon";

interface FeatureProps extends StackProps {
    icon: ElementType;
}

export const Feature = (props: FeatureProps) => {
    const { icon, children, ...rest } = props;
    return (
        <HStack as="li" spacing="24px" {...rest}>
            <Icon as={icon} boxSize="48px" />
            <Text fontSize="18px" fontWeight="700" textAlign="left">
                {children}
            </Text>
        </HStack>
    );
};

export function Features() {
    return (
        <Box maxW="1024px" m="auto" pt="57px" pb="135px" px="30px">
            <Stack spacing="25px" direction={["column", "column", "row"]}>
                <Feature icon={ShieldStarIcon}>30 days money back Guarantee</Feature>
                <Feature icon={PriceTagIcon}>No setup fees 100% hassle-free</Feature>
                <Feature icon={ReturnIcon}>No monthly subscription Pay once and for all</Feature>
            </Stack>
        </Box>
    );
}
