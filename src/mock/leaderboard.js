import l1 from '../assets/img/Leaderboard/l1.png';
import l2 from '../assets/img/Leaderboard/l2.png';
import l3 from '../assets/img/Leaderboard/l3.png';
import l4 from '../assets/img/Leaderboard/l4.png';
import l5 from '../assets/img/Leaderboard/l5.png';
import l6 from '../assets/img/Leaderboard/l6.png';
import l7 from '../assets/img/Leaderboard/l7.png';
import l8 from '../assets/img/Leaderboard/l8.png';
import l9 from '../assets/img/Leaderboard/l9.png';
import l10 from '../assets/img/Leaderboard/l10.png';

const users = [
    {
        name: 'Ben O\'hansen',
        avatar: l1,
        background: '#E25353 0% 0% no-repeat padding-box',
        color: '#E25353',
        group: '',
    },
    {
        name: 'Jenny Rios',
        avatar: l2,
        background: '#E2AB53 0% 0% no-repeat padding-box',
        color: '#DFA852',
        group: '',
    },
    {
        name: 'Dallas Rushing',
        avatar: l3,
        background: 'transparent linear-gradient(266deg, #7953E2 0%, #60D0B2 100%) 0% 0% no-repeat padding-box',
        color: '#7953E2',
        group: 'Admin',
    },
    {
        name: 'Mario Charlos',
        avatar: l4,
        background: '#42DDB3 0% 0% no-repeat padding-box',
        color: '#42DDB3',
        group: 'Admin',
    },
    {
        name: 'Anderson Souza',
        avatar: l5,
        background: '#D142DD 0% 0% no-repeat padding-box',
        color: '#D142DD',
        group: '',
    },
    {
        name: 'Alexander Bevin',
        avatar: l6,
        background: '#E2AB53 0% 0% no-repeat padding-box',
        color: '#E2AB53',
        group: '',
    },
    {
        name: 'Kyle Santos',
        avatar: l7,
        background: '#E2AB53 0% 0% no-repeat padding-box',
        color: '#E2AB53',
        group: '',
    },
    {
        name: 'Rob Triplett',
        avatar: l8,
        background: 'transparent linear-gradient(266deg, #7953E2 0%, #60D0B2 100%) 0% 0% no-repeat padding-box',
        color: '#7953E2',
        group: '',
    },
    {
        name: 'Maria Gonzalez',
        avatar: l9,
        background: '#42DDB3 0% 0% no-repeat padding-box',
        color: '#42DDB3',
        group: '',
    },
    {
        name: 'Quincy Leo',
        avatar: l10,
        background: '#42A7DD 0% 0% no-repeat padding-box',
        color: '#42A7DD',
        group: '',
    },
]

const activeUsers = [{
    id: 1,
    user: users[0],
    value: 38194.20,
},
{
    id: 2,
    user: users[1],
    value: 32773.48,
},
{
    id: 3,
    user: users[2],
    value: 29143.22,
},
{
    id: 4,
    user: users[3],
    value: 27188.96,
},
{
    id: 5,
    user: users[4],
    value: 24323.22,
},
];

const largestHoldings = [{
    id: 1,
    user: users[5],
    value: 482194.20,
},
{
    id: 2,
    user: users[6],
    value: 320773.48,
},
{
    id: 3,
    user: users[7],
    value: 219143.22,
},
{
    id: 4,
    user: users[8],
    value: 207132.96,
},
{
    id: 5,
    user: users[9],
    value: 184923.02,
},
];

export { activeUsers, largestHoldings };