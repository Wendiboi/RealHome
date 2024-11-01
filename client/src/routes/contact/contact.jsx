import './contact.scss';

function Contact(){
    return(
        <div className="contact">
            <div className="formContainer">
                <div className="wrapper">
                    <form action="">
                        <div className="name">
                            <div>
                                <label htmlFor="firstName" >First Name</label>
                                <input type="text" name="firstName" id="firstName" required placeholder='Enter Here'/>
                            </div>

                            <div>
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" name='lastName' id='lastName' required placeholder='Enter Here'/>
                            </div>                        
                        </div>

                        <div className='contentContainer'>
                            <label htmlFor="email">Email</label>
                            <input type='email' name='email' id='email' required placeholder='Enter Here'/>
                        </div>

                        <div className='contentContainer'>
                            <label htmlFor="textBlock">Want to describe why you are reaching out?</label>
                            <textarea name="textBlock" id="textBlock" placeholder='Enter Message Here'></textarea>
                        </div>
                        
                        <button>Submit</button>
                    </form>
                </div>
            </div>
            <div className="sideContainer">
                <div className="textContainer">
                    <h1>Contact Us</h1>
                    <h3>Need to get in contact with us?
                        Fill out this form and we will get back to you as soon as possible.
                        Or follow us on our social media accounts and chat to us there.</h3>
                </div>
            </div>
        </div>
    )
}

export default Contact;