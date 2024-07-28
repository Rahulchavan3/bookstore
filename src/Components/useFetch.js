import {useState,useEffect} from 'react';
const useFetch=(url)=>{
    const [data, setData] = useState([]);

    

    useEffect(()=>{
        fetch('http://localhost:8000/books')
        .then(res=>{
             if(!res.ok){
                throw new Error(`HTTP error! status: ${res.status}`);
             } 
             return res.json();
        })
        .then((data)=>{
            setData(data);
        })
        .catch((err)=>{
            console.error('Error:', err);
        })
    },[url]);
    return {data}
}
export default useFetch;

