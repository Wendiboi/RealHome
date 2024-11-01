import SearchBar from "../../components/searchBar/searchBar";
import "./homePage.scss";
import { useContext } from "react";
import {AuthContext} from '../../context/AuthContext.jsx'

function HomePage(){

    const {currentUser} = useContext(AuthContext)

    return(
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">Real Estate To Elevate Past Your Reality</h1>
                    <p>Welcome to RealHome, where the future meets your doorstep.
                         Our homes blend cutting-edge technology with sleek, modern design to offer you the best in living.
                         Experience luxury and innovation in every corner. Welcome home.
                    </p>
                    <SearchBar/>
                    <div className="boxes">
                        <div className="box">
                            <h1>8+</h1>
                            <h2>Years in Business</h2>
                        </div>
                        <div className="box">
                            <h1>0</h1>
                            <h2>Dog Town Homes</h2>
                        </div>
                        <div className="box">
                            <h1>1000+</h1>
                            <h2>Apartments</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="bg" />
            </div>
        </div>
    )
}

export default HomePage