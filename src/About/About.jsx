import styles from "./About.module.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {useState} from "react"
import bioText from './bioText.txt?raw'

function About() {
    const [status, setStatus] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        
        const { value: name } = e.target.name;
        const { value: email } = e.target.email;
        const { value: message } = e.target.message;
        

        const accessKey = import.meta.env.VITE_FORM_ACCESS_KEY;

        const formData = new FormData();
        formData.append('name', name)
        formData.append('email', email)
        formData.append('message', message)
        formData.append('access_key', accessKey)

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });
            
            const result = await response.json()

            if (result.success) {
                setStatus('success');
                e.target.reset()
            } else {
                setStatus('error')
            }

        } catch (error) {
            setStatus('error')
        }
            
    }

    return (
        <div>
            <Header />
            <main className={styles.main}>
                {/* HERO */}
                <section id="hero" className={styles.hero}>
                    <h1 className={styles.name}>Joshua Badillo Arciniega</h1>
                    <p className={styles.tagline}>
                        CAD & BIM Technician | Bridging Design, Constructability, and Innovation
                    </p>
                </section>

                {/* ABOUT */}
                <section id="intro" className={styles.section}>
                    <h2 className={styles.sectionTitle}>Bio</h2>
                    <div className={styles.about}>
                        <img src="joshua.jpeg" alt="Joshua Badillo" className={styles.photo} />
                        <div className={styles.bio}>
                            <p>{bioText}</p>
                            <a href="#contact" className={styles.ctaButton}>Get in Touch</a>
                        </div>
                    </div>
                </section>

                {/* SKILLS */}
                <section id="skills" className={styles.section}>
                    <h2 className={styles.sectionTitle}>Skills & Tools</h2>
                    <ul className={styles.skillsList}>
                        <li>Proficient in AutoCAD, Revit (2023–2026), Civil 3D, and SketchUp</li>
                        <li>Experienced with Bluebeam and Adobe Acrobat for documentation</li>
                        <li>Skilled in Enscape, Twinmotion, and D5 Render for visualization</li>
                        <li>Real-world industrial construction experience, including plan interpretation, team leadership, and coordination</li>
                        <li>Hands-on expertise in concrete, wood, and steel framework with focus on safety and schedules</li>
                        <li>Strong foundation in BIM, steel structures, reinforced concrete, foundations, and statics</li>
                        <li>Actively exploring AI tools (ChatGPT, Claude, Gemini), generative design (Autodesk Forma, Finch), and parametric tools (Rhino, Grasshopper, Dynamo)</li>
                        <li>Committed to adopting emerging technologies for improved efficiency and design outcomes</li>
                    </ul>
                </section>

                {/* CONTACT */}
                <section id="contact" className={styles.section}>
                    <h2 className={styles.sectionTitle}>Get in Touch</h2>
                    <div className={styles.contactContainer}>
                        <p className={styles.contactText}>
                            Currently open to mentorship, freelance, and full-time opportunities in architecture & design.
                        </p>

                        <form onSubmit={handleSubmit} className={styles.form}>
                            <input type="text" name="name" placeholder="Your name" required className={styles.input} />
                            <input type="email" name="email" placeholder="Your email" required className={styles.input} />
                            <textarea placeholder="Your message" name="message" rows="6" required className={styles.textarea}></textarea>
                            <button 
                                type="submit" 
                                className={styles.submitButton}
                                disabled={status === 'sending'}
                                >
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>
                            {status === 'success' && (
                                <p>Thank you! Your message has been sent. I'll get back to you soon.</p>
                            )}
                            {status === 'error' && (
                                <p>Oops! Something went wrong. Please try again or email me directly</p>
                            )}
                        </form>
                    </div>

                </section>
            </main>
            <Footer />
        </div>
        
    );
}

export default About;