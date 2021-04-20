import React,{useEffect,useState} from 'react'
import profilepic from '../images/User-Example.jpeg'
import EventMini from '../../src/components/Event-Mini/index'
import CardGroup from 'react-bootstrap/CardGroup'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import "./profile.css"
import UCLAv from '../views/images/uclav.png'
import LAC9 from '../views/images/Lac9.png'
import HM from '../views/images/humane.png'
import avatar from '../views/images/avatar.png'
{/* <Card>
<Card.Img variant="top" src={} />
<Card.Body>
<Card.Title>UCLA Veterans</Card.Title>
<Card.Text>
Yewnity is proud to be associated with UCLA Veterans!
</Card.Text>
</Card.Body>
<Card.Footer>
<small className="text-muted">Last updated 3 mins ago</small>
</Card.Footer>
</Card>
))} */}
                    // <Card>
                    //     <Card.Img variant="top" src={ LAC9 } />
                    //     <Card.Body>
                    //     <Card.Title>Card title</Card.Title>
                    //     <Card.Text>
                    //         This card has supporting text below as a natural lead-in to additional
                    //         content.{' '}
                    //     </Card.Text>
                    //     </Card.Body>
                    //     <Card.Footer>
                    //     <small className="text-muted">Last updated 3 mins ago</small>
                    //     </Card.Footer>
                    // </Card>
                    // <Card>
                    //     <Card.Img variant="top" src="holder.js/100px160" />
                    //     <Card.Body>
                    //     <Card.Title>Card title</Card.Title>
                    //     <Card.Text>
                    //         This is a wider card with supporting text below as a natural lead-in to
                    //         additional content. This card has even longer content than the first to
                    //         show that equal height action.
                    //     </Card.Text>
                    //     </Card.Body>
                    //     <Card.Footer>
                    //     <small className="text-muted">Last updated 3 mins ago</small>
                    //     </Card.Footer>
                    // </Card>
const Profile = () => {
    const [username,setusername]=useState("Random")
    const [organizations,setorganizations]=useState([
        {img:UCLAv,title:"UCLA Veterans",text:"Yewnity is proud to be associated with UCLA Veterans!",updated:"Last updated 3 mins ago"},
        {
            img:HM,title:"UCLA Veterans",text:"Yewnity is proud to be associated with UCLA Veterans!",updated:"Last updated 3 mins ago"
        },
        {img:HM,title:"UCLA Veterans",text:"Yewnity is proud to be associated with UCLA Veterans!",updated:"Last updated 3 mins ago"},
        {img:HM,title:"UCLA Veterans",text:"Yewnity is proud to be associated with UCLA Veterans!",updated:"Last updated 3 mins ago"}
    ])
    useEffect(()=>{
        //API CALL (back-end job getUser Info(name atm))
    },[])
    function updateUsername () 
    { console.log(username);
        //API CALL BACK-END /UPDATE Username
        //API .updateUsername(username)
    }
    return (
        <div class="brain">
            <div class="controller" style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"18px 0px",
                borderBottom:"1px solid grey",
                paddingBottom:"30px"
            }}>
                <div>
                    <img style={{width:"300px", height:"250px", borderRadius:"80px"}} 
                    src={avatar}
                    />
                </div>
                <div>
                    <h4>Username:</h4>
                    <div class="profile" style={{display:"flex",justifyContent:"space-between", width:"108%"}}>
                        <input value = {username}
                        onChange={(e)=>setusername(e.target.value)}>
                            
                        </input>
                        <button onClick={updateUsername}>Change Username</button>
                        <h1>TEST</h1>Welcome to Yewnity Profile Page here you can see!
                        <h6>Something goes here</h6>
                        <h6>Something goes here</h6>
                    </div>
                   
                </div>
           </div>  
            <div className="postHistory" style={{justifyContent:"center", borderBottom:"1px solid grey", paddingBottom:"50px"}}>
                <h2>Recent Posts</h2>
                
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={ UCLAv } />
                        <Card.Body>
                        <Card.Title>UCLA Veterans</Card.Title>
                        <Card.Text>
                        Yewnity is proud to be partner with UCLA Veterans. UCLA Veterans has been serving veterans for over 70 years! Whether it's our medical school faculty and residents providing care to 3,000 individual patients a year at the VA, our on-campus supportive services for student veterans, state-of-the-art cosmetic and reconstructive surgery for warriors wounded while serving overseas, or groundbreaking research revolutionizing the way the U.S. military does business, UCLA serves those who serve in myriad ways. If you have any questions about the information, research, resources, and support that UCLA provides to veterans, please contact 310.206.6915 or email us at veteran@saonet.ucla.edu
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={ LAC9 } />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>
            <div className="orgSubscriptions" style={{paddingTop:"30px",borderBottom:"1px solid grey", paddingBottom:"50px"}}>
                <h3>Organizations I'm Following</h3>
                <CardDeck>
                    {organizations?.map(org=>(
                        <Card>
                        <Card.Img variant="top" src={org.img} />
                        <Card.Body>
                        <Card.Title>{org.title}</Card.Title>
                        <Card.Text>
                       {org.text}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">{org.updated}</small>
                        </Card.Footer>
                    </Card>
                    ))}
               
                    
                </CardDeck>

            </div>
        </div>
        
    )
}

export default Profile
