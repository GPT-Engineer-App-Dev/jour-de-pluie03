import React from "react";
import { Container, VStack, HStack, Box, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, IconButton } from "@chakra-ui/react";
import { FaChartLine, FaDollarSign, FaUsers, FaShoppingCart } from "react-icons/fa";

const DashboardStat = ({ icon, label, value, change, changeType }) => (
  <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
    <HStack>
      <Box as={icon} size="24px" />
      <Stat>
        <StatLabel>{label}</StatLabel>
        <StatNumber>{value}</StatNumber>
        <StatHelpText>
          <StatArrow type={changeType} />
          {change}
        </StatHelpText>
      </Stat>
    </HStack>
  </Box>
);

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Text fontSize="3xl" fontWeight="bold" textAlign="center">
          Business Dashboard
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          <DashboardStat icon={FaDollarSign} label="Revenue" value="$50,000" change="5%" changeType="increase" />
          <DashboardStat icon={FaShoppingCart} label="Sales" value="1,200" change="3%" changeType="increase" />
          <DashboardStat icon={FaUsers} label="Customers" value="300" change="2%" changeType="decrease" />
          <DashboardStat icon={FaChartLine} label="Growth" value="15%" change="1%" changeType="increase" />
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
