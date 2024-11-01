import Slider from '../../components/slider/slider';
import './singlePage.scss';
import Map from '../../components/map/map.jsx'
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext.jsx';
import apiRequest from '../../lib/apiRequest.js';
import DOMPurify from 'dompurify';


function SinglePage(){
    const post = useLoaderData();
    const [saved, setSaved] = useState(post.isSaved);
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSave = async () => {
        if (!currentUser) {
          navigate("/login");
        }
        setSaved((prev) => !prev);
        try {
          await apiRequest.post("/users/save", { postId: post.id });
        }catch(err){
          console.log(err);
          setSaved((prev) => !prev);
        }
      };

    return(
        <div className="singlePage">
            <div className="details">
                <div className="wrapper">
                    <Slider images={post.images}/>
                    <div className="info">
                        <div className="top">
                            <div className="post">
                                <h1>{post.title}</h1>
                                <div className="address">
                                    <img src="/pin.png" alt="pin" />
                                    <span>{post.address}</span>
                                </div>
                                <div className="price">$ {post.price}</div>
                            </div>
                            <div className="user">
                                <img src={post.user.avatar} alt="user" />
                                <span>{post.user.username}</span>
                            </div>
                        </div>
                        <div className="bottom" dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(post.postDetail.desc),
                        }}>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features">
                <div className="wrapper">
                    <p className='title'>General</p>
                    <div className="listVertical">
                        <div className="feature">
                            <img src="/utility.png" alt="utility" />
                            <div className="featureText">
                                <span>Utilities</span>
                                {post.postDetail.utilities === "owner"? (
                                    <p>Owner is Responsible</p>
                                ):(
                                    <p>Tenant is Responsible</p>
                                )}
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/pet.png" alt="pet" />
                            <div className="featureText">
                                <span>Pet Policy</span>
                                {post.postDetail.pet === "allowed"? (
                                    <p>Pets Allowed</p>
                                ):(
                                    <p>Pets not Allowed</p>
                                )}
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/fee.png" alt="fees" />
                            <div className="featureText">
                                <span>Property Fees</span>
                                <p>{post.postDetail.income}</p>
                            </div>
                        </div>
                    </div>
                    <p className='title'>Rooms</p>
                    <div className="sizes">
                        <div className="size">
                            <img src="/size.png" alt="size" />
                            <span>{post.postDetail.size} sqm</span>
                        </div>
                        <div className="size">
                            <img src="/bed.png" alt="bedroom" />
                            <span>{post.bedroom} Bedroom</span>
                        </div>
                        <div className="size">
                            <img src="/bath.png" alt="bathroom" />
                            <span>{post.bathroom} Bathroom</span>
                        </div>
                    </div>
                    <p className='title'>Nearby</p>
                    <div className="listHorizontal">
                        <div className="feature">
                            <img src="/school.png" alt="school" />
                            <div className="featureText">
                                <span>School</span>
                                <p>{post.postDetail.school > 999
                                    ? post.postDetail.school / 1000 + "km"
                                    : post.postDetail.school + "m"}{" "}Away</p>
                            </div> 
                        </div>
                        <div className="feature">
                            <img src="/bus.png" alt="bus" />
                            <div className="featureText">
                                <span>Bus Stop</span>
                                <p>{post.postDetail.bus}m Away</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="/restaurant.png" alt="restaurant" />
                            <div className="featureText">
                                <span>Restaurant</span>
                                <p>{post.postDetail.restaurant}m Away</p>
                            </div>
                        </div>
                    </div>
                    <p className='title'>Location</p>
                    <div className="mapContainer">
                        <Map items={[post]}/>
                    </div>
                    <div className="buttons">
                        <button>
                            <img src="/chat.png" alt="chat" />
                            Send a Message
                        </button>
                        <button onClick={handleSave} style={{backgroundColor: saved? "#fece51":"white",
                        }}>
                            <img src="/heart.png" alt="heart" />
                            {saved? "Place Saved":"Save the Place"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePage