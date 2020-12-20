import React, { useState } from "react";
import SlideMenu from "./SlideMenu"
// requires slide Menu

const styles = {
    header: {
        backgroundColor: 'black',
        justifyContent: 'space-between',
        display: 'flex'

    },
    nameLogoDiv:{
        justifyContent: 'space-between',
        display: 'flex',
        margin: '10px'
    },
    menuDiv: {
        height: '35px',
        width: '35px',
        margin: '15px',
    },
    logoText:{
        flexDirection: 'column',
        justifyContent:'center',
        fontSize: '30px',
        color: 'white',
    },
    menuImage:{
        backgroundColor:'white',
        padding: '2px',
        borderRadius: '5px',
    }
}
const Header = ({
    logoLocation,
    mainLink,
    contactLink,
    blogLink,
    menuImageLocation,
}) => {
    const [slideIn, setSlideIn] = useState(true);
    return(
        <div style={styles.header}>
        
                <a href={mainLink}>
                    <div style={styles.nameLogoDiv}>
                            <div>
                            <img alt="Logo" src={logoLocation}/>
                            </div>
                            <div style={styles.logoText}>
                            <p>QurrentApp</p>
                            </div>
                    </div>
                </a>
                <div  style={styles.menuDiv} onClick={() => {slideIn ? setSlideIn(false) : setSlideIn(true)}} >
                    <SlideMenu slideIn={slideIn} contactLink={contactLink} blogLink={blogLink} />
                    <img alt="menu" src={menuImageLocation} style={styles.menuImage}/>
                </div>
        </div>
    )

}

export default Header