import React, { useState } from 'react';
import styles from '../../Pages/Searchcards/Searchcards.module.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Store/Store';

const CardData = [
    {
        id: 1,
        title: "coding Card",
        description: "card with the image of coding",
        image: "https://media.istockphoto.com/id/1322201622/photo/digitally-enhanced-shot-of-multiple-lines-of-computer-code.jpg?s=1024x1024&w=is&k=20&c=96j4WVZ9rDHw7_ltKvq7hbidslgz5jLefmHyL2Is-C0="
    },
    {
        id: 2,
        title: "Maths Card",
        description: "card with the image of maths",
        image: "https://media.istockphoto.com/id/1458664845/photo/learning-math.jpg?s=1024x1024&w=is&k=20&c=-lSuTLdmwhxwVWuikGCyEoNfX9oaqddIYmN1vbA_dL0="
    },
    {
        id: 3,
        title: "Netword Card",
        description: "card with the image of Network",
        image: "https://media.istockphoto.com/id/1297339011/photo/human-network-concept-worldwide-business-human-resources.jpg?s=2048x2048&w=is&k=20&c=6_RVEhFz0Y1Hw5POS0QIMunlZC7qQJkx_qXEuB2DIUE="
    },
    {
        id: 4,
        title: "Brain card",
        description: "card with the image of brain",
        image: "https://media.istockphoto.com/id/1345919562/photo/3d-illustration-of-brain-white-matter-of-cerebral-hemisphere-anatomy.jpg?s=2048x2048&w=is&k=20&c=cbvKUhFgWXKkKG8t_hxkeSf6fqK41XybEvFu-FTXZ3M="
    },
    {
        id: 5,
        title: "Physics card",
        description: "card with the image of Physics",
        image: "https://media.istockphoto.com/id/1017116892/photo/molecular-structure.jpg?s=2048x2048&w=is&k=20&c=w6Pe_DTHcWEO6N3Y6MAaLaZk0W3-TAd5oIYMFwdRJZQ="
    },
    {
        id: 6,
        title: "Brain card",
        description: "card with the image of brain",
        image: "https://media.istockphoto.com/id/1495819409/photo/digital-mind-brain-artificial-intelligence-concept.jpg?s=2048x2048&w=is&k=20&c=uFuRuep-omkmvwKSjfvEEMIF9u5oU7r6CSNszBr6mVc="
    },
    {
        id: 7,
        title: "Chemistry card",
        description: "card with the image of chem",
        image: "https://media.istockphoto.com/id/157378066/photo/formulas.jpg?s=2048x2048&w=is&k=20&c=lXGwn39iVQSYOqM7qkun_eiwT9Ap-QF_nUrU8AtXQVA="
    },
    {
        id: 8,
        title: "Histroy card",
        description: "card with the image of histroy",
        image: "https://media.istockphoto.com/id/1336346717/photo/3d-rendering-background.jpg?s=2048x2048&w=is&k=20&c=AGVfcuIUzTWo_I0Ob8JwGwyRKWBCfLqXne-pBpQR9tk="
    },
    {
        id: 9,
        title: "Quantum card",
        description: "card with the image of quatum ",
        image: "https://media.istockphoto.com/id/1464561980/photo/futuristic-central-processor-unit-powerful-quantum-cpu-on-pcb-motherboard-with-data-transfers.jpg?s=2048x2048&w=is&k=20&c=FBMDIk88XURwadhRlCAjr8ub0h2uc__KveMmHUDAdaE="
    },
    {
        id: 10,
        title: "biology card",
        description: "card with the image of biology",
        image: "https://media.istockphoto.com/id/1533148452/photo/human-cell-on-scientific-background.jpg?s=2048x2048&w=is&k=20&c=ecB70XWv6R9usIeDETGni-dib0fJPa0IbfZRwlp12LM="
    },
    {
        id: 11,
        title: "neurology card",
        description: "card with the image of neurons",
        image: "https://media.istockphoto.com/id/1358327684/photo/neuron-cell-network-model.jpg?s=2048x2048&w=is&k=20&c=eH_l3zpgWTeguj0jqbwdAKUVVoaEcSqAHYTZdxbDqKA="
    },
    {
        id: 12,
        title: "Environment card",
        description: "card with the image of  env",
        image: "https://media.istockphoto.com/id/1450272068/photo/wind-sun-and-water-energy.jpg?s=2048x2048&w=is&k=20&c=SWW3cYI5IkccJBhYwGEiWbYZeTZImQiGUNH9osVbVxI="
    },

];


const Searchcards = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();


    const filteredCards = CardData.filter(card =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const handleAddToCart = (card) => {
        dispatch(addToCart({
            id: card.id,
            title: card.title,
            description: card.description,
        }));
    };


    return (
        <>
            <div className={styles.inputdiv}>
                <input
                    type="search"
                    placeholder="Search items"
                    className={styles.searchinput}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className={styles.imagegrid}>

                {filteredCards.length > 0 ? (
                    filteredCards.map(card => (
                        <div key={card.id} className={styles.card}>
                            <img src={card.image} alt={card.title} className={styles.cardImage} />
                            <h3 className={styles.cardTitle}>{card.title}</h3>
                            <p className={styles.cardDescription}>{card.description}</p>
                            <div className={styles.buttondiv}>
                                <button onClick={() => handleAddToCart(card)}>Add to Cart</button>
                            </div>
                        </div>
                    ))
                ) : (

                    <div className={styles.noCardsMessage}>
                        <p>No cards match your search</p>
                    </div>
                )}

            </div>
        </>
    );
};

export default Searchcards;
