import axios from "axios";

export const basedUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {

        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'd13f4346eamshf03dd88d4599f0ap16712bjsn8ecb68c75fdb'
        }

    })

    return data;
}