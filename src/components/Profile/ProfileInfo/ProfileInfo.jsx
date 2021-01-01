import React from 'react'
import styles from "./ProfileInfo.module.css";


const ProfileInfo = () => {
    return (
       <div>
           <img className={styles.header} src='https://www.reuters.com/investigates/special-report/assets/waters-edge-the-crisis-of-rising-sea-levels/mastheads/shutterstock_113174281-small.jpg?v=092916211117' />
           <div className={styles.info}>
               <img className={styles.img} src='https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/r/raccoon_thumb.JPG' />
               <div>
                   <h3>Racoon</h3>
                   <h4>Date of Birth: 1 April</h4>
                   <h4>City: Kyiv</h4>
                   <h4>Web site: <a href='https://en.wikipedia.org/wiki/Raccoon'>click here</a></h4>
               </div>
           </div>
       </div>
    )
}

export default ProfileInfo;