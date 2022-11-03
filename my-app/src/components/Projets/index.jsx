import img1 from "../../images/alien_images/Captura de pantalla (55).png"
import img2 from "../../images/alien_images/Captura de pantalla (56).png"
import img3 from "../../images/alien_images/Captura de pantalla (57).png"
import img4 from "../../images/alien_images/Captura de pantalla (58).png"
import img5 from "../../images/alien_images/Captura de pantalla (59).png"
import img6 from "../../images/alien_images/Captura de pantalla (60).png"
import img7 from "../../images/alien_images/Captura de pantalla (61).png"
import img8 from "../../images/alien_images/Captura de pantalla (62).png"
import img9 from "../../images/alien_images/Captura de pantalla (63).png"
import img10 from "../../images/alien_images/Captura de pantalla (64).png"
import img11 from "../../images/alien_images/Captura de pantalla (65).png"
import img12 from "../../images/alien_images/Captura de pantalla (66).png"
import img13 from "../../images/alien_images/Captura de pantalla (67).png"
import img14 from "../../images/alien_images/Captura de pantalla (68).png"
import img16 from "../../images/Zteam_images/Captura de pantalla (83).png"
import img17 from "../../images/Zteam_images/Captura de pantalla (84).png"
import img18 from "../../images/Zteam_images/Captura de pantalla (85).png"
import img19 from "../../images/Zteam_images/Captura de pantalla (86).png"
import img20 from "../../images/Zteam_images/Captura de pantalla (87).png"
import img21 from "../../images/Zteam_images/Captura de pantalla (88).png"
import img22 from "../../images/Zteam_images/Captura de pantalla (89).png"
import img23 from "../../images/Zteam_images/Captura de pantalla (90).png"
import img24 from "../../images/Zteam_images/Captura de pantalla (91).png"
import img25 from "../../images/Zteam_images/Captura de pantalla (92).png"
import img26 from "../../images/Zteam_images/Captura de pantalla (93).png"
import img27 from "../../images/Zteam_images/Captura de pantalla (94).png"
import img28 from "../../images/Zteam_images/Captura de pantalla (95).png"
import img29 from "../../images/poke_images/Captura de pantalla (78).png"
import img30 from "../../images/poke_images/Captura de pantalla (79).png"
import img31 from "../../images/poke_images/Captura de pantalla (96).png"
import img32 from "../../images/dogs_images/Captura de pantalla (80).png"
import img33 from "../../images/dogs_images/Captura de pantalla (81).png"
import img34 from "../../images/dogs_images/Captura de pantalla (82).png"
import Card from "./card"
import "./index.css"

export default function Projects(){
    const projets = [{
        name: "e-commerce ALIEN STREET",
        images: [{src: img1}, {src: img2}, {src: img3},{src: img4}, {src: img5}, {src: img6}, {src: img7}, {src: img8}, {src: img9}, {src: img10}, {src: img11}, {src: img12}, {src: img13}, {src: img14}],
        description: "The project consists of a clothing e-commerce, where the user will be able to make purchases, pay with a credit/debit card, PayPal or cash. In the administration part, we will be able to create a product, modify those already created, purchase orders and registered users can also be controlled."
    },
    {
        name: "e-commerce ZTEAM",
        images: [{src: img16}, {src: img18}, {src: img19}, {src: img20}, {src: img21}, {src: img22}, {src: img23}, {src: img24}, {src: img25}, {src: img26}, {src: img27}, {src: img28}],
        description: "This project consists of a video game e-commerce, in which the user can buy video games with a credit/debit card or Mercadopago, and also works as a social network, being able to add friends, make publications, and leave comments. It also has an administrator profile, with which sales and users can be managed."
    },
    {
        name: "POKE_API",
        images: [{src: img29}, {src: img30}, {src: img31}],
        description: "Development of a Single Page Application. The app displays types of pokemons brought in through the use of an external API, at the same time as it pages them. You can sort, filter, or search for them. You can also create your own pokemon and view the details of any of them."
    },
    {
        name: "DOGS_API",
        images: [{src: img32}, {src: img33}, {src: img34}],
        description: "Development of a Single Page Application. The app displays dog breeds brought in using an external API, while also paging them. You can sort, filter, or search for them. You can also create your own dog breed and view the details of any particular breed."
    }
]

    return(
        <section id="projects">
            <h1 className="titleProjets">My Projets</h1>
        <div className="projetsContainer">
            {projets.map(p => 
            <div>
            <Card
             name = {p.name} 
             images = {p.images}
             description= {p.description} /> 
             </div>
            )}
        </div>
        </section>
    )
}