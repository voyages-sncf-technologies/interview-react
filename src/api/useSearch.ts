import {MultiResponse} from "giphy-api";
import {useEffect, useState} from "react";

const useSearch = (search: string | undefined): string => {

    const [result, setResult] = useState('');
    const apikey = 'af1hnh8Res7tM5qpGOTgp2wNex8RWnCu'
    const searchGiphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}`
    const trendingGiphyUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apikey}`

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch(!search ? trendingGiphyUrl : `${searchGiphyUrl}&q=${search}`)
            const responseData: MultiResponse = await response.json()

            const {data} = responseData
            if (data && data.length !== 0) {
                console.log(data)
                setResult(data[0].images.original.url)
            }
        }

        fetchData()

    }, [search, searchGiphyUrl, trendingGiphyUrl]);

    return result

}

export default useSearch