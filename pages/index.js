import Link from "next/link"
import Image from "next/image"
import { Flex, Box, Text, Button } from "@chakra-ui/react"
import { basedUrl, fetchApi } from "@/utils/fetchapi"
import Property from "@/components/Property"

const Banner = ({ purpose, title, title2, desc1, desc2, ButtonText, linkName, imageUrl }) => {
  return (

    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Image src={imageUrl} width={500} height={300} alt="banner" />
      <Box p="5">
        <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
        <Text fontSize="3x1" fontWeight="bold">{title}<br />{title2}</Text>
        <Text fontSize="lg" color="gray.700" paddingTop="3" paddingBottom="3" fontWeight="medium">{desc1} <br /> {desc2}</Text>
        <Button fontSize="xl" bg="blue.300" color="white">
          <Link href={linkName}>{ButtonText}</Link>
        </Button>
      </Box>
    </Flex>
  )
}

const Home = ({ propertyForSale, propertyForRent }) => {
  // console.log(propertyForRent, propertyForSale);
  return (
    <Box>
      {/* <h1>Hello World</h1> */}
      <Banner
        purpose="Rent a home"
        title="Rental homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        ButtonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'

      />
      {/* Fetching props of rent */}
      <Flex flexWrap="wrap">
        {propertyForRent.map((property) => <Property property={property} key={property.id} />)}
      </Flex>
      <Banner
        purpose="Buy a home"
        title="Find, Buy & Own Your"
        title2="Luxurious Home"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        ButtonText="Explore Renting"
        linkName="/search?purpose=for-sale"
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
      />
      {/* Fetching props of buy */}
      <Flex flexWrap="wrap">
        {propertyForSale.map((property) => <Property property={property} key={property.id} />)}
      </Flex>
    </Box>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${basedUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${basedUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertyForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits,
    }
  }
}

export default Home;
