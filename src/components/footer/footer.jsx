import instagram from "../../img/icons/instagram.png";
import facebook from "../../img/icons/facebook.png";
import viber from "../../img/icons/viber.png";
import telegram from "../../img/icons/telegram.png";
import telegramMini from "../../img/icons/telegramMini.png";

import styles from "./footer.module.sass"

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="wrapper">
                <div className={styles.footer_items}>

                    <div>
                        <h1 className={styles.footer_title}>Information</h1>
                        <li className={styles.footer_item}>Gallery</li>
                        <li className={styles.footer_item}>Projects</li>
                        <li className={styles.footer_item}>Certificates</li>
                        <li className={styles.footer_item}>Contacts</li>
                    </div>
                    <div>
                        <h1 className={styles.footer_title}>Contacts</h1>
                        <li className={styles.footer_item}>Ukraine, City Lviv</li>
                        <li className={styles.footer_item}>+8 800 555 35 35</li>
                        <li className={styles.footer_item}>babyBass@gmail.com</li>
                    </div>
                    <div>
                        <h1 className={styles.footer_title}>Social Media</h1>
                        <li className={styles.footer_item}>
                            <img src={instagram} alt="instagram"/>
                            <span className={styles.footer_image_properties}>instagram</span>
                        </li>
                        <li className={styles.footer_item}>
                            <img src={facebook} alt="facebook"/>
                            <span className={styles.footer_image_properties}>facebook</span>
                        </li>
                        <li className={styles.footer_item}>
                            <img src={viber} alt="viber"/>
                            <span className={styles.footer_image_properties}>viber</span>
                        </li>
                        <li className={styles.footer_item}>
                            <img src={telegram} alt="telegram"/>
                            <span className={styles.footer_image_properties}>telegram</span>
                        </li>
                    </div>
                </div>
            </div>
            <hr/>
            <div className={styles.author_block}>
                        <span>
                            © 2021 Digital Project. All Rights Reserved. Created By
                            <img src={telegramMini} className={styles.author_image}
                                 alt="if you want contact with site creator click text"
                                 title={"if you want contact with site creator click image"}/>
                        </span>
            </div>
        </footer>
    )
}

export default Footer