import React from "react";

const SlideMenu = ({slideIn, contactLink, blogLink}) =>{

    const styles = {
        menuBox:{
            
            width: 200,
            height: 160,
            position: "fixed",
            top: 65,
            right: "0",
            borderRadius: "0px 0px 0px 25px",
            border:"solid black",
            borderWidth: "0 0 thin thin",
        },
        menuBoxViewable:{
            backgroundColor: "white",
            transform: "translateX(0px)",
            transition: "transform 400ms ease-in",
            
 
        },
        menuBoxUnViewable:{
            backgroundColor: "blue",
            transform: "translateX(300px)",
            transition: "transform 400ms ease-in",
        },
        linkListText:{
            color:"black",
            fontSize:30,
            
        },
        linkList:{
            listStyleType:"none",
            textAlign: "right",
            padding: "5px 10px 5px 0px",

        },
        unorderList:{
            padding: 0,
        }

    }
    return(
        <div style= {slideIn ? {...styles.menuBoxViewable, ...styles.menuBox} : {...styles.menuBox, ...styles.menuBoxUnViewable} }>
        <ul style={styles.unorderList}>
            <li style={styles.linkList}><a style={styles.linkListText} href={contactLink}>The Team</a></li>
            <li style={styles.linkList}><a style={styles.linkListText}href={blogLink}>The Blogs</a></li>
            <li style={styles.linkList}><a style={styles.linkListText}href={contactLink}>Join Our List</a></li>
            <li style={styles.linkList}><a style={styles.linkListText}href={contactLink}>ContactUs</a></li>
        </ul>


        </div>
    );
};

export default SlideMenu;