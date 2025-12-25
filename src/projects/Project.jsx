import Header from "../header/Header"
import Footer from "../footer/Footer"
import styles from "./Project.module.css"
import Project_Element from "../project_element/Project_Element"
import ThreeD_Element from "../threed_element/ThreeD_Element"
import CustomElement from "../customElement/CustomElement"
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
                    videoID={"1ybqh6kyv3v-DNANuFf1G3WcMhL1zA69o"}
                    thumbnail={"./capstone/capstone_cover.png"}
                    pdfID={"122h1lo0aWLS7G-0jbL8Xc6WNlXqVZn3x"}
                />
                
                {/* Audubon */}
                <Project_Element
                    name={"Audubon Center"}
                    year={"2025"}
                    thumbnail={"./audubon/audubon_thumbnail.png"}
                    videoID={"13leGSkpVuTMLIFHfFIHQx1NcqBQ68dg-"}
                    pdfID={"1JAoXOk1IwFiCBj7h-h3jUltVm9lxzV7I"}
                />

                {/* Powerhouse */}
                <ThreeD_Element 
                name={"PowerHouse"}
                year={"2024"}
                thumbnail={"./powerhouse/powerhouse_cover.JPG"}
                pdfID={"1V_3fnn-_yB-Rru_CtNtohnkdoUwt0zfS"}
                />

                {/* Commercial */}
                <CustomElement
                    name={"Commercial"}
                    year={"2024"}
                    thumbnail={"./commercial/commercial_cover.png"}
                    pdfID={"1fGbxOC_daKR5yfigVy2roerEOZaFs5r7"}
                />

                {/* Multifamily */}
                <CustomElement
                name={"Multifamily"}
                year={"2023"}
                thumbnail={"./multifamily/multifamily_cover.png"}
                pdfID={"1DePfeiQVK_fE0quoWGCN-7UAj1dgrJmK"}
                />
            </main>
            <Footer />
        </div>
    )
}

export default Project;