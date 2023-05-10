import img0 from './R0.png'
import img1 from './R1.png'
import img2 from './R2.png'
import img3 from './R3.png'
import spoon from './cutlery.png'

const data = [
    {
        image: img0,
        restaurants: [
            {name: "-", riders: 0, ridersDetails: [], imgUrl: spoon},
            {name: "-", riders: 0, ridersDetails: [], imgUrl: spoon},
            {name: "-", riders: 0, ridersDetails: [], imgUrl: spoon},
            {name: "-", riders: 0, ridersDetails: [], imgUrl: spoon},
            {name: "-", riders: 0, ridersDetails: [], imgUrl: spoon},
        ], 
        sum: 0
    },
    {
        image: img1,
        restaurants: [
            {
                name: "Asian Food Restaurant",
                riders: 5,
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 1 },
                    { name: "Abdullah Al-Saud", time: '20', earning: "30", type: 0 },
                    { name: "Nasser Al-Fahad", time: "25", earning: "40", type: 1 },
                    { name: "Saad Al-Omari", time: '20', earning: "30", type: 1 },
                ],
                imgUrl: 'https://img.freepik.com/premium-vector/fire-wok-asian-food-restaurant-logo_497517-604.jpg?w=2000'
            },
            {
                name: "Yasmin Mall",
                riders: 3, 
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 1 },
                    { name: "Abdullah Al-Saud", time: '20', earning: "30", type: 0 },
                ],
                imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8Vc0WrM8mO0xfTjYzxUaDEvq1DPaoc1iag&usqp=CAU'
            },
            {
                name: "McDonald' ALSAMER",
                riders: 6, 
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 1 },
                    { name: "Saad Al-Omari", time: '20', earning: "30", type: 1 },
                    { name: "Abdullah Al-Saud", time: "25", earning: "40", type: 0 },
                    { name: "Nasser Al-Fahad", time: '20', earning: "30", type: 1 },
                    { name: "Mansour Al-Mutairi", time: "25", earning: "40", type: 1 }
                ],
                imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbxoprno9xjr_va3qkqnt5xptcAeYSKF16nle4Sr-IvHO_YdC4c5X26wv56YGQm_76mYE&usqp=CAU" 
            },
            {
                name: "Sultan Restaurant", 
                riders: 5, 
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 1 },
                    { name: "Saad Al-Omari", time: '20', earning: "30", type: 1 },
                    { name: "Mansour Al-Mutairi", time: "25", earning: "40", type: 1 },
                    { name: "Abdullah Al-Saud", time: '20', earning: "30", type: 0 },
                ], 
                imgUrl: "https://i.pinimg.com/originals/fa/52/4d/fa524dff3190583560e5730c506ad6a8.jpg"
            },
            {
                name: "Shrimp Shack", 
                riders: 7, 
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                    { name: "Abdullah Al-Saud", time: "25", earning: "40", type: 0 },
                    { name: "Mansour Al-Mutairi", time: '20', earning: "30", type: 1 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 1 },
                    { name: "Saad Al-Omari", time: '20', earning: "30", type: 1 },
                    { name: "Khalid Al-Shehri", time: "25", earning: "40", type: 0 },
                    { name: "Nasser Al-Fahad", time: '20', earning: "30", type: 1 }
                ], 
                imgUrl: "https://static.spotapps.co/website_images/ab_websites/109590_website/logo.png"
            },
            {
                name: "Asmahan Restaurant", 
                riders: 3, 
                ridersDetails:[
                    { name: "Khalid Al-Shehri", time: '20', earning: "30", type: 0 },
                    { name: "Abdullah Al-Saud", time: "25", earning: "40", type: 0 },
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                ],
                imgUrl: "https://www.hyattrestaurants.com/uploaded/restaurant_logos/DMMGH-L006c-stk-TM-color-CMYK-png.png"
            },
            {
                name: "Asian Food Restaurant",
                riders: 4,
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                    { name: "Khalid Al-Shehri", time: "25", earning: "40", type: 0 },
                    { name: "Nasser Al-Fahad", time: '20', earning: "30", type: 1 },
                    { name: "Saad Al-Omari", time: "25", earning: "40", type: 1 },
                    { name: "Mansour Al-Mutairi", time: '20', earning: "30", type: 1 },
                ],
                imgUrl: 'https://img.freepik.com/premium-vector/fire-wok-asian-food-restaurant-logo_497517-604.jpg?w=2000'
            }
        ],
        sum: 33
    },

    {
        image: img2,
        restaurants: [
            {
                name: "Asian Food Restaurant",
                riders: 14,
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 1 },
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 0 },
                ],
                imgUrl: 'https://img.freepik.com/premium-vector/fire-wok-asian-food-restaurant-logo_497517-604.jpg?w=2000'
            },
            {
                name: "Yasmin Mall",
                riders: 12, 
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 0 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 0 },
                ],
                imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8Vc0WrM8mO0xfTjYzxUaDEvq1DPaoc1iag&usqp=CAU'
            },
            {
                name: "McDonald' ALSAMER",
                riders: 5, 
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 0 },
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 0 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 1 },
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 1 }
                ],
                imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbxoprno9xjr_va3qkqnt5xptcAeYSKF16nle4Sr-IvHO_YdC4c5X26wv56YGQm_76mYE&usqp=CAU" 
            },
            {
                name: "Sultan Restaurant", 
                riders: 5, 
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 1 },
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 0 },
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                ], 
                imgUrl: "https://i.pinimg.com/originals/fa/52/4d/fa524dff3190583560e5730c506ad6a8.jpg"
            },
            {
                name: "Shrimp Shack", 
                riders: 8, 
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 1 },
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 1 },
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 0 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 0 },
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 0 }
                ], 
                imgUrl: "https://static.spotapps.co/website_images/ab_websites/109590_website/logo.png"
            },
            {
                name: "Asmahan Restaurant", 
                riders: 12, 
                ridersDetails:[
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 1 },
                ],
                imgUrl: "https://www.hyattrestaurants.com/uploaded/restaurant_logos/DMMGH-L006c-stk-TM-color-CMYK-png.png"
            }
        ],
        sum: 56
    },

    {
        image: img3,
        restaurants: [
            {
                name: "Asian Food Restaurant",
                riders: 14,
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 1 },
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 0 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 1 },
                ],
                imgUrl: 'https://img.freepik.com/premium-vector/fire-wok-asian-food-restaurant-logo_497517-604.jpg?w=2000'
            },
            {
                name: "Yasmin Mall",
                riders: 13, 
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 1 },
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 0 },
                ],
                imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8Vc0WrM8mO0xfTjYzxUaDEvq1DPaoc1iag&usqp=CAU'
            },
            {
                name: "McDonald' ALSAMER",
                riders: 12, 
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 0 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 1 }
                ],
                imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbxoprno9xjr_va3qkqnt5xptcAeYSKF16nle4Sr-IvHO_YdC4c5X26wv56YGQm_76mYE&usqp=CAU" 
            },
            {
                name: "Sultan Restaurant", 
                riders: 15, 
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 1 },
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 0 },
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                ], 
                imgUrl: "https://i.pinimg.com/originals/fa/52/4d/fa524dff3190583560e5730c506ad6a8.jpg"
            },
            {
                name: "Shrimp Shack", 
                riders: 17, 
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 1 },
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 0 },
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 0 },
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 }
                ], 
                imgUrl: "https://static.spotapps.co/website_images/ab_websites/109590_website/logo.png"
            },
            {
                name: "Asmahan Restaurant", 
                riders: 13, 
                ridersDetails:[
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 1 },
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                ],
                imgUrl: "https://www.hyattrestaurants.com/uploaded/restaurant_logos/DMMGH-L006c-stk-TM-color-CMYK-png.png"
            }
        ],
        sum: 84
    },
]

export default data