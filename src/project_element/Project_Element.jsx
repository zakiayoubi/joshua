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
                    <video
                    controls
                    autoPlay                  // ← Starts playing automatically
                    muted                     // ← Required for autoplay in most browsers
                    loop                      // ← Optional: restarts when finished (nice for flyovers)
                    playsInline
                    >
                        <source src={`${props.video}`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className={styles.screen}>
                    <iframe
                        src={`${props.pdfUrl}#view=Fit&scrollbar=1&toolbar=0&navpanes=0&pagemode=none`}
                        title="Project PDF"
                        className={styles.pdfIframe}
                    />
                </div>
            </div>
        </div>
    );
}

