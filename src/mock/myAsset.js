import c1 from '../assets/img/card1.png';
import c2 from '../assets/img/card2.png';
import c3 from '../assets/img/card3.png';

const myAssets = [{
        id: 1,
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
        id: 2,
        imageCard: {
            image: c3,
            title: "1918",
            name: "Inveted Jenny",
            content: "Stamp"
        },
        chartCard: {
            data: [500, 550, 478, 620, 600, 688, 690, 540, 600, 590, 600, 680]
        }
    },
    {
        id: 3,
        imageCard: {
            image: c1,
            title: "'86 Fleer",
            name: "Michael Jordan",
            content: "Rookie Card"
        },
        chartCard: {
            data: [400, 450, 560, 420, 500, 588, 590, 640, 600, 590, 600, 680]
        }
    },
];

export { myAssets };