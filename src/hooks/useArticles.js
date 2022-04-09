import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../components/Firebase/Firebase.config";

const useArticles = () =>{
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(()=>{  
        const getArticles = async() =>{
            const articlesDocs = await getDocs(collection(db, "articles"))
            const articlesData = articlesDocs.docs.map(doc => ({...doc.data(), id: doc.id}));
            setArticles(articlesData)
            setLoading(true)
        }
        getArticles();
    }, [])

    return {articles, loading}
}

export default useArticles;