import apple from '../images/icons8-app-store-48.png'
import google from '../images/icons8-play-store-48.png'
import star from '../images/icons8-star-48.png'

import logo01 from '../images/kenyannews.png'
import logo02 from '../images/Mastercardlogo.png'
import logo03 from '../images/Airtermoney.png'

import global01 from '../images/Layer1.png'
import global02 from '../images/Layer2.png'
import global03 from '../images/Layer3.png'

import SlayerA from '../images/Layer01.png'
import SlayerB from '../images/Layer02.png'
import SlayerC from '../images/Layer03.png'

import Lasyes01 from '../images/Layers1.png'
import Lasyes02 from '../images/Layers02.png'
import Lasyes03 from '../images/Layers03.png'

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

const global = [
    {
        id: 1,
        title : "Global Accounts",
        Text: "Open accounts in USD, EUR, or GBP to shop online, save, or send money internationally without high conversion fees.",
        logo: global01,
        alt: 'global01'
    },
    {
        id: 2,
        title : "Payouts",
        Text: "Send money instantly to friends and family across Africa and beyond with low fees and no delays.",
        logo: global02,
        alt: 'global02'
    },
    {
        id: 3,
        title : "Local Payments",
        Text: "Pay bills, buy airtime, or settle expenses in your local currency across supported African countries.",
        logo: global03,
        alt: 'global03'
    }
]

const howitworks = [
    {
        id: 1,
        title : "Sign up",
        Text: "Create your account, verify your identity, and add funds through bank transfer, mobile money, or card.",
        ImggetData : SlayerA,
    }, 
    {
        id: 2,
        title : "Manage your Wallets",
        Text: "Convert your account balance to whichever currency you need Over 50 different currencies",
        ImggetData : SlayerB,
    },
    {
        id: 3,
        title : "Transact Free",
        Text: "Send money to family, receive payments, pay bills, shop online at no extra charge",
        ImggetData : SlayerC,
    }
]

export default connectdata;
export {headerlogo, global , howitworks};
