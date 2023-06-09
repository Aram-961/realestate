import axios from "axios";

export const basedUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {

        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': `${process.env.RAPID_API_KEY}`
        }

    })

    return data;
}