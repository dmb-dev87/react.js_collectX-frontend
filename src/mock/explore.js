import feature1 from '../assets/img/explore/feature1.png';
import feature2 from '../assets/img/explore/feature2.png';
import feature3 from '../assets/img/explore/feature3.png';
import feature4 from '../assets/img/explore/feature4.png';
import feature5 from '../assets/img/explore/feature5.png';

import newera1 from '../assets/img/explore/newera1.png';
import newera2 from '../assets/img/explore/newera2.png';
import newera3 from '../assets/img/explore/newera3.png';
import newera4 from '../assets/img/explore/newera4.png';

import ninezero1 from '../assets/img/explore/1990s1.png';
import ninezero2 from '../assets/img/explore/1990s2.png';
import ninezero3 from '../assets/img/explore/1990s3.png';
import ninezero4 from '../assets/img/explore/1990s4.png';

import eightzero1 from '../assets/img/explore/1980s1.png';
import eightzero2 from '../assets/img/explore/1980s2.png';
import eightzero3 from '../assets/img/explore/1980s3.png';
import eightzero4 from '../assets/img/explore/1980s4.png';

import sevenzero1 from '../assets/img/explore/1970s1.png';
import sevenzero2 from '../assets/img/explore/1970s2.png';
import sevenzero3 from '../assets/img/explore/1970s3.png';
import sevenzero4 from '../assets/img/explore/1970s4.png';

import classic1 from '../assets/img/explore/classic1.png';
import classic2 from '../assets/img/explore/classic2.png';
import classic3 from '../assets/img/explore/classic3.png';
import classic4 from '../assets/img/explore/classic4.png';


const explores_features = [
    {
        id: 1,
        image: feature1,
        title: "Rookie Card",
        content: "1986 Fleer Michael Jordan",
        percent: 2.48,
        type: "MJR",
        detail: 'PSA 10'
    },
    {
        id: 2,
        image: feature2,
        title: "Rookie Card",
        content: "1992 Fleer Shaquille O/'neal",
        percent: -3.41,
        type: "SOR",
        detail: 'PSA 9.3'
    },
    {
        id: 3,
        image: feature3,
        title: "Rookie Card",
        content: "2011 Panini Paul George",
        percent: 8.39,
        type: "PGR",
        detail: 'PSA 10'
    },
    {
        id: 4,
        image: feature4,
        title: "Michael Jordan",
        content: "1985 Prism Jewel Sticker",
        percent: 4.28,
        type: "PMJ",
        detail: 'PSA 9.1'
    },
    {
        id: 5,
        image: feature5,
        title: "Wilt Chamberlain",
        content: "1971 Topps #70",
        percent: -2.48,
        type: "WCT",
        detail: 'PSA 9.6'
    }
]

const explores_new_era_card = [
    {        
        id: 1,
        image: newera1,
        title: "Rookie Card",
        content: "2011 Panini Paul George",
        percent: 8.39,
        type: "PGR",
    },
    {
        id: 2,
        image: newera2,
        title: "Rookie Card",
        content: "2014 Panini Aaron Gordon",
        percent: -6.79,
        type: "AGR",
    },
    {
        id: 3,
        image: newera3,
        title: "James Rookie Card",
        content: "2003 Upper Deck Lebron",
        percent: 7.16,
        type: "LBJ",
    },    
    {
        id: 4,
        image: newera4,
        title: "Rookie Card",
        content: "2020 Zion Williamson",
        percent: -1.14,
        type: "ZWR",
    },
]

const explores_1990 = [
    {        
        id: 1,
        image: ninezero1,
        title: "Rookie Card",
        content: "1992 Fleer Shaquille O’neal",
        percent: -3.41,
        type: "SOR",
    },
    {
        id: 2,
        image: ninezero2,
        title: "Iverson Rookie Card",
        content: "1997 Upper Deck Allen",
        percent: 10.01,
        type: "AIR",
    },
    {
        id: 3,
        image: ninezero3,
        title: "Metal Universe",
        content: "1997 Michael Jordan ",
        percent: 30.6,
        type: "MJM",
    },
    {
        id: 4,
        image: ninezero4,
        title: "Rookie Card",
        content: "1997 Topps Tim Duncan",
        percent: 8.73,
        type: "TDR",
    },
]

const explores_1980 = [
    {        
        id: 1,
        image: eightzero1,
        title: "Michael Jordan",
        content: "1985 Prism Jewel Sticker",
        percent: 2.48,
        type: "PJS",
    },
    {        
        id: 2,
        image: eightzero2,
        title: "Moore Premier",
        content: "1986 Fleer Johny",
        percent: -1.86,
        type: "FJM",
    },
    {        
        id: 3,
        image: eightzero3,
        title: "Abdul-Jabar",
        content: "1986 Fleer Kareem",
        percent: 21.69,
        type: "KAJ",
    },
    {        
        id: 4,
        image: eightzero4,
        title: "Scoring Leaders",
        content: "1980 Bird Erving Johnson ",
        percent: -6.14,
        type: "BEJ",
    },
]

const explores_1970 = [
    {        
        id: 1,
        image: sevenzero1,
        title: "Wilt Chamberlain",
        content: "1971 Topps #70",
        percent: -2.48,
        type: "WCT",
    },
    {
        id: 2,
        image: sevenzero2,
        title: "Barry Rookie Card",
        content: "1971 Topps #170 Rick",
        percent: 6.39,
        type: "JCW",
    },
    {
        id: 3,
        image: sevenzero3,
        title: "Rookie Card",
        content: "1970 “Pistol” Pete Maravich",
        percent: 26.39,
        type: "PPM",
    },
    {
        id: 4,
        image: sevenzero4,
        title: "Rookie Card",
        content: "1970 Lew Alcindor",
        percent: -7.38,
        type: "LAR",
    },
]

const explores_classic = [
    {
        id: 1,
        image: classic1,
        title: "Rookie Card",
        content: "1961 Fleer #3 Elgin Baylor",
        percent: -3.48,
        type: "EBR",
    },
    {
        id: 2,
        image: classic2,
        title: "West Rookie Card",
        content: "1961 Fleer #43 Jerry",
        percent: -3.41,
        type: "JCW",
    },
    {
        id: 3,
        image: classic3,
        title: "George Mikan",
        content: "1948 Bowman",
        percent: 11.40,
        type: "BGM",
    },
    {
        id: 4,
        image: classic4,
        title: "Rookie Card",
        content: "1957 Bill Russell",
        percent: -5.41,
        type: "BRR",
    },
];

export { explores_features, explores_new_era_card, explores_1990, explores_1980, explores_1970, explores_classic};