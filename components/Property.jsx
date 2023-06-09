import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { GoVerified } from 'react-icons/go'
import { BsGridFill } from 'react-icons/bs'
import { FaBed, FaBath } from 'react-icons/fa';
import millify from "millify";

import defaultImg from '../assets/images/house.jpg'
const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }) => (
    <Link href={`/property/${externalID}`} color="#000" style={{ textDecoration: 'none' }} passHref>
        <Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer">
            <Box>
                <Image src={coverPhoto ? coverPhoto.url : defaultImg} width={400} height={260} alt="houseImg" />
            </Box>
            <Box w="full">
                <Flex paddingTop="2" justifyContent="space-between" alignItems="center">
                    <Flex alignItems="center">
                        <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified />}</Box>
                        <Text fontWeight="bold" color='black'>AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
                    </Flex>
                    <Box>
                        <Avatar size="sm" src={agency?.logo?.url} />
                    </Box>
                </Flex>
                <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
                    {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
                </Flex>
                <Text fontSize="lg">
                    {title.length > 30 ? `${title.substring(0, 30)} ...` : title}
                </Text>
            </Box>
        </Flex>
    </Link>
)

export default Property;