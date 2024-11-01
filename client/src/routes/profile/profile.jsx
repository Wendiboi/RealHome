import './profile.scss';
import List from '../../components/list/list.jsx';
import Chat from '../../components/chat/chat.jsx';
import apiRequest from '../../lib/apiRequest.js';
import { useNavigate, useLoaderData, Await, Link } from 'react-router-dom';
import { Suspense, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.jsx';

function Profile(){
    const navigate = useNavigate();
    const data = useLoaderData();
    const {updateUser, currentUser} = useContext(AuthContext);
    const handleLogout = async () => {
        try{
            await apiRequest.post('/auth/logout');
            updateUser(null);
            navigate("/");
        }catch(err){
            console.log(err);
        }
    }

    return(
        <div className="profile">
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Info</h1>
                        <Link to='/profile/update'>
                            <button>Update Profile</button>
                        </Link>
                    </div>
                    <div className="info">
                        <span>Avatar: <img src={currentUser.avatar || 'noavatar.jpg'} alt="user" /></span>
                        <span>Username: <b>{currentUser.username}</b></span>
                        <span>Email: <b>{currentUser.email}</b></span>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                    <div className="title">
                        <h1>Listings</h1>
                        <Link to='/add'>
                            <button>New Listing</button>
                        </Link>
                    </div>
                    <Suspense fallback={<p>Loading...</p>}>
                        <Await resolve={data.postResponse} errorElement={<p>Error loading posts</p>}>
                            {(postResponse) => <List posts={postResponse.data.userPosts}/>}
                        </Await>
                    </Suspense>
                    <div className="title">
                        <h1>Liked Listings</h1>
                    </div>
                    <Suspense fallback={<p>Loading...</p>}>
                        <Await resolve={data.postResponse} errorElement={<p>Error loading posts</p>}>
                            {(postResponse) => <List posts={postResponse.data.savedPosts}/>}
                        </Await>
                    </Suspense>
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper">
                    <Suspense fallback={<p>Loading...</p>}>
                        <Await resolve={data.chatResponse} errorElement={<p>Error loading chats</p>}>
                            {(chatResponse) => <Chat chats={chatResponse.data}/>}
                        </Await>
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default Profile