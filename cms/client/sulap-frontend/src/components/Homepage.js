import React from 'react'
import { Container } from 'react-bootstrap';

const styles = {
    containerHomePage: {
        justifyContent:'center', alignItems:'center', padding:'30px'
    },
    homePageSulap: {
        fontSize:'20vh', letterSpacing:'30px', fontWeight:'200'
    },
    homePageSulapInfo: {
        letterSpacing:'2px', fontSize:'20px', color:'grey', fontWeight:'200', textAlign:'center'
    }
}

export default function Homepage() {
    return (
        <div style={styles.containerHomePage}>
            <Container >
                <p style={styles.homePageSulap}> <b>SULAP</b><span style={{ color:'#00b894'}}>-JS</span></p>
                <p style={styles.homePageSulapInfo}> 
                    Sulap JS is a JavaScript Content Management System Generator which provides users an instant client-server website model. It includes user management system and simple CRUD model. The package is mostly powered by Node Js and MongoDb. In client-side, we use React Js as its framework and in server-side, we use express Js for its REST. It aims to assist users or developers for saving time in initiating  their website. By using 2 commands, a user is able to build a simple client-server website. The package also provides users to put some options or configuration while initiating their website, so it eases users in developing their website.
                </p> 
            </Container>
        </div>
    )
}
