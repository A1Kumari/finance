import { useState } from "react";
import PixIcon from "@mui/icons-material/Pix";
import Link from "next/link";
import styles from "./Navbar.module.css"; // Import your CSS module file

const Navbar = () => {
    const [selected, setSelected] = useState("dashboard");

    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <PixIcon className={styles.logoIcon} />
                <span className={styles.logoText}>Finanseer</span>
            </div>
            <div className={styles.linksContainer}>
                <Link href="/"  className={`${styles.link} ${
                            selected === "dashboard" ? styles.selected : ""
                        }`}
                        onClick={() => setSelected("dashboard")}>
                    
                        Dashboard
                    
                </Link>
                <Link href="/chat"   className={`${styles.link} ${
                            selected === "prediction" ? styles.selected : ""
                        }`}
                        onClick={() => setSelected("prediction")}>
                        Chatbot
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
