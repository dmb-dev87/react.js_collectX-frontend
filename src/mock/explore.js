import c1 from '../assets/img/card1.png';
import c2 from '../assets/img/card2.png';
import c3 from '../assets/img/card3.png';

const explores = [{
        id: 1,
        imageCard: {
            image: c1,
            title: "'86 Fleer",
            name: "Michael Jordan",
            content: "Rookie Card"
        },
        chartCard: {
            data: [400, 459, 478, 620, 600, 688, 690, 540, 600, 590, 420, 400]
        }
    },
    {
        id: 2,
        imageCard: {
            image: c2,
            title: "'52 Topps",
            name: "Mickey Mantle",
            content: "Rookie Card"
        },
        chartCard: {
            data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
        }
    },
    {
        id: 3,
        imageCard: {
            image: c3,
            title: "1918",
            name: "Inveted Jenny",
            content: "Stamp"
        },
        chartCard: {
            data: [545, 674, 459, 663, 400, 505, 578, 620, 700, 540, 600, 480]
        }
    },
];

export { explores };