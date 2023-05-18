import { Box, Flex, Spacer, Text, Avatar } from '@chakra-ui/react'
import { GoVerified } from 'react-icons/go'
import { BsGridFill } from 'react-icons/bs'
import { FaBed, FaBath } from 'react-icons/fa';
import millify from "millify";

import { fetchApi, basedUrl } from '@/utils/fetchapi';
import { dataKeyAttribute } from 'react-horizontal-scrolling-menu/dist/types/constants';

const propertyDetails = ({ propertyDetails: { price, rentFrequency, rooms, title, baths, area, agency, isVerifed, type, purpose, description, furnishingStatus, amenities, photos } }) => (
    <Box maxWidth="1000px" margin="auto" p="4">
    {photos && <ImageScrollbar />}
    </Box>
);
data
export default propertyDetails;

export async function getServerSideProps({ params: { id } }) {
    const data = await fetchApi(`${basedUrl}/properties/detail?externalIDs=${id}`);

    return {
        props: {
            propertyDetails: data
        }
    }
}