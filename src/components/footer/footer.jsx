import instagram from "../../img/icons/instagram.png";
import facebook from "../../img/icons/facebook.png";
import viber from "../../img/icons/viber.png";
import telegram from "../../img/icons/telegram.png";
import telegramMini from "../../img/icons/telegramMini.png";

function Footer() {
    return(
        <footer className={"footer"}>
            <div className="wrapper">
                <div className={"footer_items"}>

                    <div className="footer_information">
                        <h1 className={"footer_title"}>Information</h1>
                        <li className={"footer_item"}>Gallery</li>
                        <li className={"footer_item"}>Projects</li>
                        <li className={"footer_item"}>Certificates</li>
                        <li className={"footer_item"}>Contacts</li>
                    </div>
                    <div className="footer_contacts">
                        <h1 className={"footer_title"}>Contacts</h1>
                        <li className={"footer_item"}>Ukraine, City Lviv</li>
                        <li className={"footer_item"}>+8 800 555 35 35</li>
                        <li className={"footer_item"}>babyBass@gmail.com</li>
                    </div>
                    <div className="footer_social_media">
                        <h1 className={"footer_title"}>Social Media</h1>
                        <li className={"footer_item"}>
                            <img src={instagram} alt="instagram"/>
                            <span className={"footer_image_properties"}>instagram</span>
                        </li>
                        <li className={"footer_item"}>
                            <img src={facebook} alt="facebook"/>
                            <span className={"footer_image_properties"}>facebook</span>
                        </li>
                        <li className={"footer_item"}>
                            <img src={viber} alt="viber"/>
                            <span className={"footer_image_properties"}>viber</span>
                        </li>
                        <li className={"footer_item"}>
                            <img src={telegram} alt="telegram"/>
                            <span className={"footer_image_properties"}>telegram</span>
                        </li>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="author_block">
                        <span >
                            © 2021 Digital Project. All Rights Reserved. Created By
                            <img className={"author_image"} src={telegramMini} alt="if you want contact with site creator click text" title={"if you want contact with site creator click image"}/>
                        </span>
            </div>
        </footer>
    )
}

export default Footer