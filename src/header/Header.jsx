import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* Text Logo – "Joshua Badillo" */}
                <a href="#" className={styles.brand}>
                    <span className={styles.firstName}>Joshua</span>{" "}
                    <span className={styles.lastName}>Badillo</span>
                </a>

                {/* Desktop Navigation */}
                <nav className={styles.nav}>
                    <a href="/" className={`${styles.navLinkCta}`}>
                        Projects
                    </a>
                    <a href="/aboutme" className={styles.navLinkCta}>
                        About Me
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header;