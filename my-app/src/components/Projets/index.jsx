export default function Projects(){
    const projets = {
        names: ["e-commerce ALIEN STREET", "e-commerce ZTEAM", "POKE-API", "DOGS-API"],
        images: {
            alien: "",
            zteam: "",
            poke: "",
            dogs: ""
        },
        descriptions: {
            alien: "The project consists of a clothing e-commerce, where the user will be able to make purchases, pay with a credit/debit card, PayPal or cash. In the administration part, we will be able to create a product, modify those already created, purchase orders and registered users can also be controlled.",
            zteam: "This project consists of a video game e-commerce, in which the user can buy video games with a credit/debit card or Mercadopago, and also works as a social network, being able to add friends, make publications, and leave comments. It also has an administrator profile, with which sales and users can be managed.",
            poke: "Development of a Single Page Application. The app displays types of pokemons brought in through the use of an external API, at the same time as it pages them. You can sort, filter, or search for them. You can also create your own pokemon and view the details of any of them.",
            dogs: "Development of a Single Page Application. The app displays dog breeds brought in using an external API, while also paging them. You can sort, filter, or search for them. You can also create your own dog breed and view the details of any particular breed."
        }

    }
    return(
        <div>
            <h1>My Projets</h1>

        </div>
    )
}