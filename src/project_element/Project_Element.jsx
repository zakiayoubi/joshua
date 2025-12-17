import styles from "./Project_Element.module.css";
import { useState } from "react";

export default function Project_Element(props) {
    const [open, setOpen] = useState(false);

    function handleClick() {
        if (window.innerWidth <= 768) {
            return; // Do nothing on mobile
        }
        setOpen(!open)
    }

    return (
        <div
            className={`${styles.card} ${open ? styles.open : ""}`}
            onClick={handleClick}
        >
            <div className={styles.slider}>
                {/* SCREEN 1 – Only this is visible when small */}
                <div className={styles.screen}>
                    <img src={`${props.thumbnail}`} alt="thumb" />
                    <div className={styles.title}>
                        <h3>{props.name}</h3>
                        <p>{props.year}</p>
                    </div>
                </div>

                {/* SCREEN 2 – Hidden until you click */}
                <div className={styles.screen}>
                    <iframe className={styles.pdfIframe}
                        src={`https://drive.google.com/file/d/${props.videoID}/preview`}
                        title="Project Video"
                        allow="autoplay"
                    />
                </div>

                <div className={styles.screen}>
                    <iframe className={styles.pdfIframe}
                        src={`https://drive.google.com/file/d/${props.pdfID}/preview`}
                        title="Project PDF"
                        allow="autoplay"
                    />
                </div>
            </div>
        </div>
    );
}

