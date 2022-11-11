import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - Denti Care`;
    }, [title]);
};

export default useTitle;