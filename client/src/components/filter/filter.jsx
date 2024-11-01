import './filter.scss';
import { useState } from 'react';
import {useSearchParams} from 'react-router-dom';

function Filter(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState({
        type: searchParams.get("type") || "",
        city: searchParams.get("city") || "",
        property: searchParams.get("property") || "",
        minPrice: searchParams.get("minPrice") || "",
        maxPrice: searchParams.get("maxPrice") || "",
        bedroom: searchParams.get("bedroom") || "",
    });

    const handleChange = (e) => {
        setQuery({
            ...query,
            [e.target.name]: e.target.value,
        });
    };

    const handleFilter = () => {
        setSearchParams(query);
    };

    return(
        <div className="filter">
            <h1>Search Results For <b>{searchParams.get("city")}</b></h1>
            <div className="top">
                <div className="item">
                    <label htmlFor="city">Location</label>
                    <input type="text" id='city' name='city' placeholder='City Location' onChange={handleChange} defaultValue={query.city}/>
                </div>
            </div>
            <div className="bottom">
                <div className="item">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type" onChange={handleChange} defaultValue={query.type}>
                        <option value="">Choose</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="property">Property</label>
                    <select name="property" id="property" onChange={handleChange} defaultValue={query.property}>
                        <option value="">Choose</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="minPrice">Min Price</label>
                    <input type="number" id='minPrice' name='minPrice' placeholder='Min' onChange={handleChange} defaultValue={query.minPrice}/>
                </div>
                <div className="item">
                    <label htmlFor="maxPrice">Max Price</label>
                    <input type="number" id='maxPrice' name='maxPrice' placeholder='Max' onChange={handleChange} defaultValue={query.maxPrice}/>
                </div>
                <div className="item">
                    <label htmlFor="bedroom">Bedrooms</label>
                    <input type="number" id='bedroom' name='bedroom' placeholder='Amnt.' onChange={handleChange} defaultValue={query.bedroom}/>
                </div>
                <button onClick={handleFilter}>
                    <img src="/search.png" alt="search" />
                </button>
            </div>
        </div>
    )
}

export default Filter