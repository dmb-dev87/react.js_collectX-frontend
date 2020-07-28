import i1 from '../assets/img/discussion/1.png';
import i2 from '../assets/img/discussion/2.png';
import i3 from '../assets/img/discussion/3.png';
import i4 from '../assets/img/discussion/4.png';
import i5 from '../assets/img/discussion/5.svg';

import a1 from '../assets/img/avatars/l1.png';
import a2 from '../assets/img/avatars/l2.png';
import a3 from '../assets/img/avatars/l3.png';
import a4 from '../assets/img/avatars/l4.png';
import a5 from '../assets/img/avatars/l5.png';
import a6 from '../assets/img/avatars/l6.png';
import a7 from '../assets/img/avatars/l7.png';
import a8 from '../assets/img/avatars/l8.png';
import a9 from '../assets/img/avatars/l9.png';
import a10 from '../assets/img/avatars/l10.png';

const users = [
    {
        name: 'Ben O\'hansen',
        avatar: a1,
        background: '#E25353 0% 0% no-repeat padding-box',
        color: '#E25353',
        group: '',
    },
    {
        name: 'Jenny Rios',
        avatar: a2,
        background: '#E2AB53 0% 0% no-repeat padding-box',
        color: '#DFA852',
        group: '',
    },
    {
        name: 'Dallas Rushing',
        avatar: a3,
        background: 'transparent linear-gradient(266deg, #7953E2 0%, #60D0B2 100%) 0% 0% no-repeat padding-box',
        color: '#7953E2',
        group: 'Admin',
    },
    {
        name: 'Mario Charlos',
        avatar: a4,
        background: '#42DDB3 0% 0% no-repeat padding-box',
        color: '#42DDB3',
        group: 'Admin',
    },
    {
        name: 'Anderson Souza',
        avatar: a5,
        background: '#D142DD 0% 0% no-repeat padding-box',
        color: '#D142DD',
        group: '',
    },
    {
        name: 'Alexander Bevin',
        avatar: a6,
        background: '#E2AB53 0% 0% no-repeat padding-box',
        color: '#E2AB53',
        group: '',
    },
    {
        name: 'Kyle Santos',
        avatar: a7,
        background: '#E2AB53 0% 0% no-repeat padding-box',
        color: '#E2AB53',
        group: '',
    },
    {
        name: 'Rob Triplett',
        avatar: a8,
        background: 'transparent linear-gradient(266deg, #7953E2 0%, #60D0B2 100%) 0% 0% no-repeat padding-box',
        color: '#7953E2',
        group: '',
    },
    {
        name: 'Maria Gonzalez',
        avatar: a9,
        background: '#42DDB3 0% 0% no-repeat padding-box',
        color: '#42DDB3',
        group: '',
    },
    {
        name: 'Quincy Leo',
        avatar: a10,
        background: '#42A7DD 0% 0% no-repeat padding-box',
        color: '#42A7DD',
        group: '',
    },
]

const pokemon = [
    {
        user: users[2],
        chat_text: 'Yes!\n I think we can find a happy medium between new Pokemon cards and old cards with nostalgic value!',
        quote_user: users[3],
        quote_text: 'To the best of my knowledge I think that it\'s best to find the 3...',
        time: '7:42 PM',
    },
    {
        user: users[3],
        chat_text: 'I want to know, what\'s everyone\'s favorite Pokemon? \n It\'s been crazy to see how much the illustrator card has gone up in value since getting listed here. I\'m just happy that I was able to get a piece.',
        quote_user: null,
        quote_text: null,
        time: '7:31 PM',
    },
    {
        user: users[1],
        chat_text: 'I love Jigglypuff. I heard there\'s a super rare card that is being sold right now. Do you guys think @collectx can acquire that card and list it here? I\'d love to own a piece.',
        quote_user: null,
        quote_text: null,
        time: '7:31 PM',
    },
    {
        user: users[2],
        chat_text: 'There\'s only 3 charizard\'s left! I hope you\'re excited when it rolls out on CollectX.',
        quote_user: null,
        quote_text: null,
        time: '7:42 PM',
    },
]

const topics = [
    {
        id: 1,
        title: 'MLB Baseball Cards',
        description: "I can't wait for the Honus Wagner...",
        time: '1:36 PM',
        members: 1238,
        onlines: 194,
        image: i1,
        chats: null,
    },
    {
        id: 2,
        title: 'NBA Basketball Cards',
        description: "The MJ Card it $126.31 right now. You...",
        time: '1:42 PM',
        members: 1238,
        onlines: 194,
        image: i2,
        chats: null,
    },
    {
        id: 3,
        title: 'Pokemon',
        description: "There's only 3 Charizard's left like this...",
        time: '7:42 PM',
        members: 1238,
        onlines: 194,
        image: i3,
        chats: pokemon,
    },
    {
        id: 4,
        title: 'Rare Stamps',
        description: "The MJ Card it $126.31 right now. You...",
        time: '11:37 PM',
        members: 1238,
        onlines: 194,
        image: i4,
        chats: null,
    },
    {
        id: 5,
        title: 'CollectX Support',
        description: "Hey I just the instant buy I want to...",
        time: '9:14 PM',
        members: 1238,
        onlines: 194,
        image: i5,
        chats: null,
    },
];

export { topics };