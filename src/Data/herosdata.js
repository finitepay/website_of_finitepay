import apple from '../images/icons8-app-store-48.png'
import google from '../images/icons8-play-store-48.png'
import star from '../images/icons8-star-48.png'

import logo01 from '../images/kenyannews.png'
import logo02 from '../images/Mastercardlogo.png'
import logo03 from '../images/Airtermoney.png'

const connectdata = [
    {
        id: 1,
        icons : apple,
        alt: 'apple',
        view: "4.8k",
        stars : star,
        Text: "on App Store 3.5K Reviews"
    },
    {
        id: 2,
        icons : google,
        alt: 'google',
        view: "4.8k",
        stars : star,
        Text: "on Google Play 6.8K Reviews"
    }
];

const headerlogo = [
    {
        id: 1,
        logo: logo01,
        alt: 'logo01'
    },
    {
        id: 2,
        logo: logo02,
        alt: 'logo02'
    },
    {
        id: 3,
        logo: logo03,
        alt: 'logo03'
    }
]

export default connectdata;
export {headerlogo};
