import React from 'react';

import styles from "./Header.module.css";
function Header() {
  return (
    <div className={styles.container}>
    <div className={styles.left}>
<p className={styles.heading}>
  A <span>Resume</span> that stands out!
</p>
<p className={styles.heading}>
  Make your own resume! <span> IT'S FREE!</span>
</p>
    </div>
    <div className={styles.right}>
        <img src='https://static.vecteezy.com/system/resources/previews/011/432/524/original/privacy-policy-protecting-your-privacy-colorful-illustration-the-concept-of-protecting-computer-data-for-a-web-page-flat-modern-illustration-vector.jpg' alt='resume'/>
    </div>
    </div>
  );
}

export default Header;