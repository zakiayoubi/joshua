import styles from "./ThreeD_Element.module.css";
import { useState } from "react";

export default function ThreeD_Element(props) {
    const [open, setOpen] = useState(false);

    function handleClick() {
        if (window.innerWidth <= 768) {
            return; // Do nothing on mobile
        }
        setOpen(!open)
    }

    const handleMouseLeave = () => {
        if (window.innerWidth <= 768) {
            return;
        }
        setOpen(false);
    };

    return (
        <div
            className={`${styles.card} ${open ? styles.open : ""}`}
            onClick={handleClick}
        >
            <div onMouseLeave={handleMouseLeave} className={styles.slider}>
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
                    <iframe title="Speckle" 
                    src="https://app.speckle.systems/projects/331c00d28b/models/0b31262df5?embedToken=59a3602f1998d963e8dbb0d802983600840c8bde07#embed=%7B%22isEnabled%22%3Atrue%7D"
                    >
                    </iframe>
                </div>

                <div className={styles.screen}>
                    <div className={styles.screen}>
                        <iframe className={styles.pdfIframe}
                            src={`https://drive.google.com/file/d/${props.pdfID}/preview`}
                            title="Project PDF"
                            allow="autoplay"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

