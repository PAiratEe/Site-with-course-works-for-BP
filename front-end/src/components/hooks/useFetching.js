import {useState} from "react";

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false)

    const fetching = async () => {
        setIsLoading(true)
        await callback()
        setIsLoading(false)
    }

    return [fetching, isLoading]
}