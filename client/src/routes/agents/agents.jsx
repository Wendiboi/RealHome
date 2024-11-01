import './agents.scss';

function Agents(){
    return(
        <div className="agents">
            <h1>Meet our Prestigous Agents</h1>

            <div className="team">
                    <div className="member">
                        <img src="https://res-console.cloudinary.com/dp8huimwy/thumbnails/v1/image/upload/v1730412966/YXZhdGFycy9pZTlpanFnaGhudHVnc3R0YmtpaA==/drilldown" alt="Reefe" />
                        <h2>Reefe</h2>
                        <h4>Awards:</h4>
                        <p>Best Hair 2024, Best Looks 2024</p>
                        <h4>User Reviews:</h4>
                        <p>Great Hair, Great Looks, Nice to talk to, Really understands me and my needs</p>
                    </div>
                    <div className="member">
                        <img src="https://res-console.cloudinary.com/dp8huimwy/thumbnails/v1/image/upload/v1730413704/YXZhdGFycy9ydW1iZXp6cHA5eG1keHMwd3ZoMA==/drilldown" alt="Kevin" />
                        <h2>Kevin</h2>
                        <h4>Awards:</h4>
                        <p>Most Deals Closed 2022, Most Homes Sold 2023</p>
                        <h4>User Reviews:</h4>
                        <p>Made funny but strange jokes, Took me to houses I wanted to see, Made me feel like the house was meant to be mine</p>
                    </div>
                    <div className="member">
                        <img src="https://res-console.cloudinary.com/dp8huimwy/thumbnails/v1/image/upload/v1730414864/YXZhdGFycy95bzhzcXdkbnBuYzd4bGpicHFsbw==/drilldown" alt="Zandre" />
                        <h2>Zandre</h2>
                        <h4>Awards:</h4>
                        <p>Most Customer Complaints 2024</p>
                        <h4>User Reviews:</h4>
                        <p>Made funny jokes, Helped me see the light, Taught me that a decrepid house is not a broken one</p>
                    </div>
                </div>
        </div>
    )
}

export default Agents;