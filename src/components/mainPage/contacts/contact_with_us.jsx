import {useState} from "react";
import styles from "./contact_with_us.module.scss"
export const ContactWithUs = () => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert("please input text")
            return
        }
        setText("")
    }

    return (
        <form onSubmit={onSubmit} className={styles.form_input}>
            <div className={styles.form__group}>
                <input type="text" className={styles.form__input} id="name" placeholder="Full name" required=""
                       value={text}
                       onChange={(e) => setText(e.target.value)} />
                <label htmlFor="name" className={styles.form__label}>Full Name</label>
            </div>

            <div className={styles.form__group}>
                <input type="text" className={styles.form__input} id="Phone_Number" placeholder="Phone Number" required=""
                       value={text}
                       onChange={(e) => setText(e.target.value)} />
                <label htmlFor="Phone_Number" className={styles.form__label}>Phone Number</label>
            </div>
            <div className={styles.form__group}>
                <input type="text" className={styles.form__input} id="Email" placeholder="Email" required=""
                       value={text}
                       onChange={(e) => setText(e.target.value)} />
                <label htmlFor="Email" className={styles.form__label}>Email</label>
            </div>
            <div className={styles.form__group}>
                <input type="text" className={styles.form__input} id="What_Interests_You" placeholder="What Interests You?" required=""
                       value={text}
                       onChange={(e) => setText(e.target.value)} />
                <label htmlFor="What_Interests_You" className={styles.form__label}>What Interests You?</label>
            </div>
            <div className={styles.form__group}>
                <input type="text" className={styles.form__input} id="Message" placeholder="Message" required=""
                       value={text}
                       onChange={(e) => setText(e.target.value)} />
                <label htmlFor="Message" className={styles.form__label}>Message</label>
            </div>
            <input type='submit' value='Send →' className={`${styles.btn} ${styles.projects_title_all_projects}`}/>
        </form>
    )
}