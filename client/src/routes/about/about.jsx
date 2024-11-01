import './about.scss';

function About(){
    return(
        <div className="about">
            <div className="top">
                <h1>About RealHome</h1>
                <h3 className='aboutDesc'>At RealHome, we are bridging the gap between cutting-edge tech and urban living. 
                    Our properties, nestled in the vibrant cyberpunk cityscape, combine luxury with smart home innovations.
                    We are committed to revolutionizing your living experience with homes designed for the future. 
                    Join us in shaping tomorrow, today. Welcome to RealHome.</h3>
                    <div className="achievements">
                        <h2>Our Achievements</h2>
                            <div className="cards">
                                <div className="card">
                                    <h3>8+</h3>
                                    <h5>Years of Business</h5>
                                </div>
                                <div className="card">
                                    <h3>0</h3>
                                    <h5>Homes from Dog Town</h5>
                                </div>
                                <div className="card">
                                    <h3>1000+</h3>
                                    <h5>Apartments Ready</h5>
                                </div>
                            </div>
                    </div>
            </div>
            <div className="bottom">
            <h2>The Team</h2>
                <div className="team">
                    <div className="member">
                        <img src="https://res-console.cloudinary.com/dp8huimwy/thumbnails/v1/image/upload/v1730412966/YXZhdGFycy9pZTlpanFnaGhudHVnc3R0YmtpaA==/drilldown" alt="Reefe" />
                        <h4>Reefe</h4>
                        <p>The Honored One</p>
                    </div>
                    <div className="member">
                        <img src="https://res-console.cloudinary.com/dp8huimwy/thumbnails/v1/image/upload/v1730413704/YXZhdGFycy9ydW1iZXp6cHA5eG1keHMwd3ZoMA==/drilldown" alt="Kevin" />
                        <h4>Kevin</h4>
                        <p>CEO Boss</p>
                    </div>
                    <div className="member">
                        <img src="https://res-console.cloudinary.com/dp8huimwy/thumbnails/v1/image/upload/v1730414864/YXZhdGFycy95bzhzcXdkbnBuYzd4bGpicHFsbw==/drilldown" alt="Zandre" />
                        <h4>Zandre</h4>
                        <p>Communist</p>
                    </div>
                </div>
                <h1>Comments From Our Users</h1>
                <div className="comments">
                    <div className="comment">
                        <h5>I love RealHome! They helped me stay out of Dog Town and out of extreme debt. Now I am only in heavy debt. Thanks RealHome</h5>
                        <p>notZandre</p>
                    </div>
                    <div className="comment">
                        <h5>RealHome helped me when I needed them most, unlike the avatar. I might not have had to fight the fire nation but I definitely needed a new bed.</h5>
                         <p>That one guy</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About;