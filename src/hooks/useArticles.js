import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../components/Firebase/Firebase.config";

const useArticles = () =>{
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(()=>{  
        const getArticles = async() =>{
            const articlesDocs = await getDocs(query(collection(db, "articles"), orderBy('Date', "desc")))
            const articlesData = articlesDocs.docs.map(doc => ({...doc.data(), id: doc.id}));
            setArticles(articlesData)
            setLoading(true)
        }
        getArticles();
    }, [])

    return {articles, loading}
}

export default useArticles;