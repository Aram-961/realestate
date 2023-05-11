import Link from "next/link"
import Image from "next/image"
import { Flex, Box, Text, Button } from "@chakra-ui/react"

const Banner = ({ purpose }) => {
  console.log(purpose);
  return (

    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      {/* <Image src={imageUrl} width={500} height={300} alt="banner" /> */}
      <Box p="5">
        <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
        <Text fontSize="3x1" fontWeight="bold">{title}<br />{title2}</Text>
        <Text fontSize="lg" color="gray.700" paddingBottom="3" fontWeight="medium">{purpose}</Text>
        {/* continue working on the button */}
      </Box>
    </Flex>
  )
}

export default function Home() {
  return (
    <>
      {/* <h1>Hello World</h1> */}
      <Banner purpose={"not"} />
      {/* <Banner purpose={'for sale'} /> */}
    </>
  )
}
