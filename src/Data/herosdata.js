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

import autoslayter from '../images/LayerAuto1.png'

import Plus from '../images/GroupPlus.png'

import Business01 from '../images/Layering1.png'
import Business02 from '../images/Layering2.png'
import Business03 from '../images/Layering3.png'

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

const getgrowing = [
    {
        id: 1,
        title : "Manage Multiple Currencies:",
        Text: "Easily handle payments in various currencies, whether you're traveling or expanding your business across borders.",
        ImggetData : Business02,
    }, 
    {
        id: 2,
        title : "Track Your Spending and Earnings:",
        Text: "Gain insights into your finances with detailed transaction reports and analytics, giving you full control.",
        ImggetData : Business01,
    },
    {
        id: 3,
        title : "Access Global Markets:",
        Text: "Tap into international opportunities with low-cost cross-border payments and global account access.",
        ImggetData : Business03,
    }
]

const safety = [
    {
        id: 1,
        title : "Encryption",
        Text: "Your transactions are encrypted from start to finish, ensuring your data is always secure.",
        ImggetData : Lasyes01,
    },
    {
        id: 2,
        title : "Two-Factor Authentication",
        Text: "Extra security to ensure only you can access your account.",
        ImggetData : Lasyes02,
    },
    {
        id: 3,
        title : "Fraud Monitoring",
        Text: "Real-time transaction monitoring to prevent unauthorized money transfer.",
        ImggetData : Lasyes03,
    }
]

const safetyTow = [
    {
        id: 1,
        title : "Encryption",
        Text: "Your transactions are encrypted from start to finish, ensuring your data is always secure.",
        ImggetData : Lasyes01,
    },
    {
        id: 2,
        title : "Regulatory Compliance",
        Text: "We adhere to global financial regulations, ensuring your funds are handled securely and responsibly.",
        ImggetData : autoslayter,
    },
    {
        id: 3,
        title : "Fraud Monitoring",
        Text: "Real-time transaction monitoring to prevent unauthorized money transfer.",
        ImggetData : Lasyes03,
    }
]

const happyClient = [
    {
        id: 1,
        name: "Jane Doe Wafula",
        profilePhoto: "https://images.pexels.com/photos/30369254/pexels-photo-30369254/free-photo-of-mother-and-child-in-traditional-african-attire-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Location: "Expat in Germany",
        Text: "FinitePay has made sending money back home so easy and affordable. The low fees and fast transfers mean my family gets the support they need, without any hassle!",
    },
    {
        id: 2,
        name: "Kwame Mensah",
        profilePhoto: "https://images.pexels.com/photos/30369254/pexels-photo-30369254/free-photo-of-mother-and-child-in-traditional-african-attire-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Location: "Student in the USA",
        Text: "With FinitePay, I can support my siblings' education without worrying about expensive transfer fees. It's quick and reliable!",
    },
    {
        id: 3,
        name: "Fatima Yusuf",
        profilePhoto: "https://images.pexels.com/photos/30369254/pexels-photo-30369254/free-photo-of-mother-and-child-in-traditional-african-attire-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Location: "Entrepreneur in Dubai",
        Text: "I love how transparent FinitePay is with their charges. It's made managing my family remittances stress-free.",
    },
    {
        id: 4,
        name: "Ali Khan",
        profilePhoto: "https://images.pexels.com/photos/30369254/pexels-photo-30369254/free-photo-of-mother-and-child-in-traditional-african-attire-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Location: "Software Engineer in Canada",
        Text: "The app's ease of use is unmatched. FinitePay saves me both time and money when sending funds back home.",
    },
    {
        id: 5,
        name: "Njeri Wanjiku",
        profilePhoto: "https://images.pexels.com/photos/30369254/pexels-photo-30369254/free-photo-of-mother-and-child-in-traditional-african-attire-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Location: "Nurse in the UK",
        Text: "FinitePay gives me peace of mind knowing my parents receive their money on time. I can't imagine using another service.",
    },
    {
        id: 6,
        name: "Samuel Osei",
        profilePhoto: "https://images.pexels.com/photos/30369254/pexels-photo-30369254/free-photo-of-mother-and-child-in-traditional-african-attire-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Location: "Freelancer in South Africa",
        Text: "I love how affordable it is to send funds. It's a game-changer for me and my family.",
    },
    {
        id: 7,
        name: "Amina Adan",
        profilePhoto: "https://images.pexels.com/photos/30369254/pexels-photo-30369254/free-photo-of-mother-and-child-in-traditional-african-attire-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Location: "Fashion Designer in France",
        Text: "My experience with FinitePay has been fantastic. The low fees and real-time updates keep me coming back.",
    },
    {
        id: 8,
        name: "John Kamau",
        profilePhoto: "https://images.pexels.com/photos/30369254/pexels-photo-30369254/free-photo-of-mother-and-child-in-traditional-african-attire-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Location: "Expat in Australia",
        Text: "Sending money home has never been easier. FinitePay is my go-to solution for quick and safe transfers.",
    },
    {
        id: 9,
        name: "Mary Achola",
        profilePhoto: "https://images.pexels.com/photos/30369254/pexels-photo-30369254/free-photo-of-mother-and-child-in-traditional-african-attire-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Location: "Accountant in the Netherlands",
        Text: "The customer support is excellent, and the app is easy to use. I feel confident using FinitePay for all my transfers.",
    },
    {
        id: 10,
        name: "Moses Okoth",
        profilePhoto: "https://images.pexels.com/photos/30369254/pexels-photo-30369254/free-photo-of-mother-and-child-in-traditional-african-attire-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Location: "Researcher in Japan",
        Text: "FinitePay provides me with great rates and fast delivery. My family is always happy when the money arrives on time.",
    },
    {
        id: 11,
        name: "Chipo Moyo",
        profilePhoto: "https://images.pexels.com/photos/30369254/pexels-photo-30369254/free-photo-of-mother-and-child-in-traditional-african-attire-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        Location: "Teacher in China",
        Text: "FinitePay is reliable and affordable. It's the best platform for sending money back to my loved ones.",
    }
];

const commonquestion =[
    {
        id: 1,
        title : "Are there fees for transferring money?",
        Text: "Create your account, verify your identity, and add funds through bank transfer, mobile money, or card.",
         Icons :Plus
    },
    {
        id: 2,
        title : "How do I use my FinitePay Digital Card?",
        Text: "Convert your account balance to whichever currency you need. Over 50 different currencies.",
         Icons :Plus
    },
    {
        id: 3,
        title : "Can I use FinitePay for business transactions?",
        Text: "Send money to family, receive payments, pay bills, shop online at no extra charge.",
         Icons :Plus
    },
    {
        id: 4,
        title : "What countries can I send money to?",
        Text: "Send money to family, receive payments, pay bills, shop online at no extra charge.",
        Icons :Plus
    },
    {
        id: 5,
        title : "How do I withdraw my funds?",
        Text: "Send money to family, receive payments, pay bills, shop online at no extra charge.",
        Icons :Plus
    }
]

const africancountry = [
    {
        id: 1,
        name : "Tanzania",
        flag : "https://images.pexels.com/photos/915915/pexels-photo-915915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 2,
        name : "Kenya",
        flag : "https://images.pexels.com/photos/915915/pexels-photo-915915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 3,
        name : "Nigeria",
        flag : "https://images.pexels.com/photos/915915/pexels-photo-915915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 4,
        name : "South Africa",
        flag : "https://images.pexels.com/photos/915915/pexels-photo-915915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 5,
        name : "Ghana",
        flag : "https://images.pexels.com/photos/915915/pexels-photo-915915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 6,
        name : "Uganda",
        flag : "https://images.pexels.com/photos/915915/pexels-photo-915915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 7,
        name : "Tanzania",
        flag : "https://images.pexels.com/photos/915915/pexels-photo-915915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 8,
        name : "Tanzania",
        flag : "https://images.pexels.com/photos/915915/pexels-photo-915915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

]


export default connectdata;
export {headerlogo, global , howitworks, safety, happyClient, commonquestion, africancountry, getgrowing, safetyTow};
