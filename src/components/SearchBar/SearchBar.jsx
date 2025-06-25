import '../SearchBar/SearchBar.scss'
import { FaSearch } from "react-icons/fa";
import { fetchSearch } from '../../api/authService';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';


export default function SearchBar() {
    const [input, setInput] = useState("")
    const [error, setError] = useState(null)
    const [products, setProducts] = useState(); // state to store the fetched data
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchSearch();
                console.log(data);
                
                setProducts(data); // store the fetched data
            } catch (err) {
                setError(err.message);
                console.error(err);
            }
        };

        fetchData()
    }, [])

    
        const handleSearch = () => {
        if (input.trim()) {
            navigate(`/products?query=${encodeURIComponent(input)}`)
            setInput("")
        }
        }

    return (
        <>
            <div className="search-container">
                <input
                    type="search"
                    placeholder="Search product..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type='submit' onClick={handleSearch}><FaSearch/></button>

            </div>

            {error && <p className="error">{error}</p>}

        </>
    );
}


