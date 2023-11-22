import { Footer } from "../../Components/Footer/Footer";
import { Welcome } from "../../Components/Welcome/Welcome";
import { About } from "../../Components/About/About";
import { Contact } from "../../Components/Contact/Contact";
import { Projects } from "../../Components/Projects/Projects";

import styles from './Landing.module.css'

export const Landing = () => {
    return (
        <div className={styles.container}>
            <Welcome />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
};