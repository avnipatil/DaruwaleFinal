// other data will be filled here
import client1 from '../images/client/1.jpg'
import client2 from '../images/client/2.jpg'
import client3 from '../images/client/3.jpg'
import client4 from '../images/client/4.jpg'
import client5 from '../images/client/5.jpg'
import client6 from '../images/client/6.jpg'
import client7 from '../images/client/7.jpg'
import client8 from '../images/client/8.jpg'
import client9 from '../images/client/9.jpg'
import client11 from '../images/client/11.jpg'
import client12 from '../images/client/12.jpg'
import client13 from '../images/client/13.jpg'

export const clientCaroucel = [
    {
        img: client1
    },
    {
        img: client2
    },
    {
        img: client3
    },
    {
        img: client4
    },
    {
        img: client5
    },
    {
        img: client6
    },
    {
        img: client7
    },
    {
        img: client8
    },
    {
        img: client9
    },
    {
        img: client11
    },
    {
        img: client12
    },
    {
        img: client13
    }
]

export const Shoplist = [
    {
        clothes: 'View all',
        clothes_total: '1980',
        bags: 'view all',
        bags_total: 801,
        watches: 'View all',
        watches_total: 734,
        accessories: 'View all',
        accessories_total: 1953,
        price: 0,
        brand: 'Adidass',
        size: 'XS',
        color: 'Blue',
        backgroundcolor: '#b3c8db'
    },
    {
        clothes: 'Blazers & Suits',
        clothes_total: '490',
        bags: 'Hand Bags',
        bags_total: 601,
        watches: 'Fashion Watches',
        watches_total: 575,
        accessories: 'Blazers & Suits',
        accessories_total: 235,
        price: 40,
        brand: 'Armani',
        size: 'L',
        color: 'Burgendy',
        backgroundcolor: '#b3c8db'
    },
    {
        clothes: 'Blouses',
        clothes_total: '19',
        bags: 'BackPocket',
        bags_total: 81,
        watches: 'Casual Watches',
        watches_total: 110,
        accessories: 'Blouses',
        accessories_total: 410,
        price: 50,
        brand: 'Ann Tylor',
        size: 'M',
        color: 'Teal',
        backgroundcolor: '#ca7295'
    },
    {
        clothes: 'Cardigans & Jumpers',
        clothes_total: '50',
        bags: 'Wallet',
        bags_total: 701,
        watches: 'Luxury Wathces',
        watches_total: 34,
        accessories: 'Cardigans & Jumpers',
        accessories_total: 107,
        price: 60,
        brand: 'Banana Repblic',
        size: 'XL',
        color: 'Brown',
        backgroundcolor: '#9a8480'
    },
    {
        clothes: 'Dresses & Suits',
        clothes_total: '890',
        bags: 'Luggage',
        bags_total: 121,
        watches: 'Sports Watches',
        watches_total: 18,
        accessories: 'Dresses',
        accessories_total: 93,
        price: 70,
        brand: 'Bilabong',
        size: 39,
        color: 'Corel',
        backgroundcolor: '#ff7072'
    },
    {
        clothes: 'Hoodie & Sweatshirts',
        clothes_total: '320',
        bags: 'Lamber Pack',
        bags_total: 23,
        watches: 'Branch Watches',
        watches_total: 20,
        accessories: 'Hoodie & Sweatshirts',
        accessories_total: 122,
        price: 80,
        brand: 'Alibong',
        size: 40,
        color: 'Navy',
        backgroundcolor: '#b3c8db'
    },
    {
        clothes: 'Jackets & Coats',
        clothes_total: '212',
        bags: 'Duffle Bags',
        bags_total: 8,
        watches: 'Simple watch',
        watches_total: 61,
        accessories: 'Jackets & Coats',
        accessories_total: 133,
        price: 90,
        brand: 'Cello',
        size: 69,
        color: 'Charcoal',
        backgroundcolor: '#696dc8'
    },
    {
        clothes: 'Jeans',
        clothes_total: '760',
        bags: 'School Bags',
        bags_total: 75,
        watches: 'Ladies Watches',
        watches_total: 74,
        accessories: 'Jeans',
        accessories_total: 1953,
        price: 100,
        brand: 'Nicky',
        size: 78,
        color: 'Sky Blue',
        backgroundcolor: '#4e4d4d'
    },

]


export const WineCategory =
    ["white wine", "Red Wine", "Pink Wine", "Sparkeling Wine"];

export const BEERCategory =
    ["IPA", "Non-Alcoholic Beer", "Hard Seltzer", "Light Lager", "Light Beer", "Ale", "Stout", "Sour Beer", "Belgian-Style Ale",
        "Cider", "New England / Hazy IPA", "Shop All Beer"]

export const LiquorCategory =
    ["Whiskey", "Bourbon", "Scotch", "Rye", "Vodka", "Tequila", "Mezcal", "Gin", "Rum", "Brandy"]

export const Brand =
    ["360 Vodka", "Absolut", "Belvedere", "Burnett's", " CIROC", " CopperMuse",
        "Deep Eddy", "EFFEN", " Exclusiv", "Finlandia", "Firefly"]

export const Size =
    ["250ml", "500ml", "750ml", "1L", "1.5L", "2L"]
export const PROMOTIONS = [
    {
        code: "ONE",
        discount: "40%"
    },
    {
        code: "TWO",
        discount: "20%"
    },
    {
        code: "THREE",
        discount: "10%"
    },
    {
        code: "FOUR",
        discount: "5%"
    },
    {
        code: "FIVE",
        discount: "15%"
    },
]
export const methods = [
    {
        value: "Courier",
        type: "Courier",
        Info: "All addresses (default zone), United States & Canada",
        Time: "2 - 4 days",
        Tax: 26.50
    },
    {
        value: "LocalShipping",
        type: "Local Shipping",
        Info: "All addresses (default zone), United States & Canada",
        Time: "2 - 4 days",
        Tax: 10.00
    },
    {
        value: "FlatRate",
        type: "Flat Rate",
        Info: "All addresses (default zone), United States & Canada",
        Time: "2 - 4 days",
        Tax: 33.85
    },
    {
        value: "UPSShipping",
        type: "UPS Ground Shipping",
        Info: "All addresses (default zone), United States & Canada",
        Time: "2 - 4 days",
        Tax: 18.00
    },
    {
        value: "Localpickup",
        type: "Local pickup from Store",
        Info: "All addresses (default zone), United States & Canada",
        Time: "-",
        Tax: 0.00
    },
    {
        value: "CartzillaLocker",
        type: "Pick Up at Cartzilla Locker",
        Info: "All addresses (default zone), United States & Canada",
        Time: "-",
        Tax: 99.90
    },
    {
        value: "CartzillaGlobalExport",
        type: "Cartzilla Global Export",
        Info: "All addresses (default zone), United States & Canada",
        Time: "2 - 4 days",
        Tax: 25.00
    },
    {
        value: "SameDayDelivery",
        type: "Same-Day Delivery",
        Info: "All addresses (default zone), United States & Canada",
        Time: "2 - 4 days",
        Tax: 34.00
    },
    {
        value: "InternationalShipping",
        type: "International Shipping",
        Info: "All addresses (default zone), United States & Canada",
        Time: "2 - 4 days",
        Tax: 27.00
    }
]
export const OrderData = [
    {
        OrderID:"34VB5540K83",
        DatePurchased:"May 21, 2019",
        status:"In Progress",
        value:"In Progress",
        Total:"358.75",
        bgColor: "#0dcaf0"
    },
    {
        OrderID:"78A643CD409",
        DatePurchased:"December 09, 2018",
        status:"Canceled",
        value:"Canceled",
        Total:"760.50",
        bgColor: "#f34770"
    },
    {
        OrderID:"112P45A90V2",
        DatePurchased:"October 15, 2018",
        status:"Delayed",
        value:"Delayed",
        Total:"1,264.00",
        bgColor:"#fea569"
    },
    {
        OrderID:"28BA67U0981",
        DatePurchased:"July 19, 2018",
        status:"Delivered",
        value:"Delivered",
        Total:"198.35",
        bgColor:"#42d697"
    },
    {
        OrderID:"502TR872W2",
        DatePurchased:"April 04, 2018",
        status:"Delivered",
        value:"Delivered",
        Total:"2,133.90",
        bgColor:"#42d697"
    },
    {
        OrderID:"47H76G09F33",
        DatePurchased:"March 30, 2018",
        status:"Delivered",
        value:"Delivered",
        Total:"86.40",
        bgColor:"#42d697"
    }
]
export const TicketData = [
    {
        TicketSubject: "My new ticket",
        DateSubmited:"09/27/2019",
        DateUpdated: "09/30/2019",
        Tickettype: "Website problem",
        Priority: "High",
        Status: "Open",
        bgColor: "#fea569",
        bgStatus: "#42d697",
        ColorStatus: "white",
        value:"Open"
    },
    {
        TicketSubject: "My new Open ticket",
        DateSubmited:"09/27/2019",
        DateUpdated: "09/30/2019",
        Tickettype: "Website problem",
        Priority: "High",
        Status: "Open",
        bgColor: "#fea569",
        bgStatus: "#42d697",
        ColorStatus: "white",
        value:"Open"
    },
    {
        TicketSubject: "Another ticket",
        DateSubmited:"08/21/2019",
        DateUpdated: "08/23/2019",
        Tickettype: "Partner request",
        Priority: "Medium",
        Status: "Closed",
        bgColor:"#0dcaf0",
        bgStatus:"#f3f5f9",
        ColorStatus: "black",
        value:"Closed"
    },
    {
        TicketSubject: "Yet another ticket",
        DateSubmited:"11/19/2018",
        DateUpdated: "11/20/2018",
        Tickettype: "Complaint",
        Priority: "Urgent",
        Status: "Closed",
        bgColor:"#f34770",
        bgStatus:"#f3f5f9",
        ColorStatus: "black",
        value:"Closed"
    },
    {
        TicketSubject: "My old ticket",
        DateSubmited:"06/19/2018",
        DateUpdated: "06/20/2018",
        Tickettype: "Info inquiry",
        Priority: "Low",
        Status: "Closed",
        bgColor:"#42d697",
        bgStatus:"#f3f5f9",
        ColorStatus: "black",
        value:"Closed"
    }
]
export const AddressData = [
    {
        RoomNo:"396",
        Address1:"Lillian Blvd",
        Address2:"Holbrook",
        city:"NY",
        zip:"11741",
        country:"USA",
        AddressType:"Primary",

    },
    {
        RoomNo:"769",
        Address1:"Industrial",
        Address2:" West Chicago",
        city:"IL",
        zip:"60185",
        country:"USA",
        AddressType:"",
        
    },
    {
        RoomNo:"514",
        Address1:"S. Magnolia",
        Address2:"St. Orlando",
        city:"FL",
        zip:"32806",
        country:"USA",
        AddressType:"",
        
    }
]
export const PaymentCardData = [
    {
        card:"ending in 4999",
        name:"Susan Gardner",
        expiry:"08 / 2019",
        AddressType: "Primary"
    },
    {
        card:"ending in 4999",
        name:"Susan Gardner",
        expiry:"08 / 2019"
    },
    {
        card:"ending in 4999",
        name:"Susan Gardner",
        expiry:"08 / 2019"
    },

]