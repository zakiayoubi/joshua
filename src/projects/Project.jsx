import Header from "../header/Header"
import Footer from "../footer/Footer"
import styles from "./Project.module.css"
import Project_Element from "../project_element/Project_Element"
import ThreeD_Element from "../threed_element/ThreeD_Element"
function Project () {

    function handleClick() {
        console.log("I got clicked.")
    }
    return (
        <div>
            <Header />
            <main className={styles.main}>
                {/* CAPSTONE */}
                <div className={styles.title}>
                    <h2>Projects</h2>
                </div>
                {/* Capstone */}
                <Project_Element
                    name={"Mars Base"}
                    year={"2025"}
                    video={"./capstone/capstone_video.mp4"}
                    thumbnail={"./capstone/capstone_cover.png"}
                    pdfUrl={"./capstone/capstone_pdf.pdf"}
                />
                
                {/* Audubon */}
                <Project_Element
                    name={"Audubon Center"}
                    year={"2025"}
                    thumbnail={"./audubon/audubon_thumbnail.png"}
                    video={"./audubon/Part1_Audubon_Center_Flyover.mp4"}
                    pdfUrl={"./audubon/audubon_pdf.pdf"}
                />

                {/* Powerhouse */}
                <ThreeD_Element 
                name={"PowerHouse"}
                year={"2024"}
                thumbnail={"./powerhouse/powerhouse_cover.JPG"}
                pdfUrl={"./powerhouse/powerhouse_pdf.pdf"}
                />

                {/* Commercial */}
                <Project_Element
                    name={"Commercial"}
                    year={"2024"}
                    thumbnail={"./commercial/commercial_cover.png"}
                    pdfUrl={"./commercial/commercial_pdf.pdf"}
                />

                {/* Multifamily */}
                <Project_Element
                name={"Multifamily"}
                year={"2023"}
                thumbnail={"./multifamily/multifamily_cover.png"}
                pdfUrl={"./multifamily/multifamily_pdf.pdf"}
                />
            </main>
            <Footer />
        </div>
    )
}

export default Project;