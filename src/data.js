import img1 from './R1.png'
import img2 from './R2.png'
import img3 from './R3.png'
import spoon from './cutlery.png'

const data = [
    {
        image: img1,
        restaurants: [
            {name: "-", riders: 0, ridersDetails: [], imgUrl: spoon},
            {name: "-", riders: 0, ridersDetails: [], imgUrl: spoon},
            {name: "-", riders: 0, ridersDetails: [], imgUrl: spoon},
            {name: "-", riders: 0, ridersDetails: [], imgUrl: spoon},
            {name: "-", riders: 0, ridersDetails: [], imgUrl: spoon},
        ]
    },
    {
        image: img1,
        restaurants: [
            {
                name: "Asian Food Restaurant",
                riders: 5,
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                ],
                imgUrl: 'https://img.freepik.com/premium-vector/fire-wok-asian-food-restaurant-logo_497517-604.jpg?w=2000'
            },
            {
                name: "Yasmin Mall",
                riders: 3, 
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                ],
                imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8Vc0WrM8mO0xfTjYzxUaDEvq1DPaoc1iag&usqp=CAU'
            },
            {
                name: "McDonald' ALSAMER",
                riders: 6, 
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" }
                ],
                imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbxoprno9xjr_va3qkqnt5xptcAeYSKF16nle4Sr-IvHO_YdC4c5X26wv56YGQm_76mYE&usqp=CAU" 
            },
            {
                name: "Sultan Restaurant", 
                riders: 5, 
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                ], 
                imgUrl: "https://i.pinimg.com/originals/fa/52/4d/fa524dff3190583560e5730c506ad6a8.jpg"
            },
            {
                name: "Shrimp Shack", 
                riders: 7, 
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" }
                ], 
                imgUrl: "https://static.spotapps.co/website_images/ab_websites/109590_website/logo.png"
            },
            {
                name: "Asmahan Restaurant", 
                riders: 3, 
                ridersDetails:[
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                ],
                imgUrl: "https://www.hyattrestaurants.com/uploaded/restaurant_logos/DMMGH-L006c-stk-TM-color-CMYK-png.png"
            },
            {
                name: "Asian Food Restaurant",
                riders: 4,
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                ],
                imgUrl: 'https://img.freepik.com/premium-vector/fire-wok-asian-food-restaurant-logo_497517-604.jpg?w=2000'
            }
        ],
    },

    {
        image: img2,
        restaurants: [
            {
                name: "Asian Food Restaurant",
                riders: 4,
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                ],
                imgUrl: 'https://img.freepik.com/premium-vector/fire-wok-asian-food-restaurant-logo_497517-604.jpg?w=2000'
            },
            {
                name: "Yasmin Mall",
                riders: 2, 
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                ],
                imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8Vc0WrM8mO0xfTjYzxUaDEvq1DPaoc1iag&usqp=CAU'
            },
            {
                name: "McDonald' ALSAMER",
                riders: 5, 
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" }
                ],
                imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbxoprno9xjr_va3qkqnt5xptcAeYSKF16nle4Sr-IvHO_YdC4c5X26wv56YGQm_76mYE&usqp=CAU" 
            },
            {
                name: "Sultan Restaurant", 
                riders: 5, 
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                ], 
                imgUrl: "https://i.pinimg.com/originals/fa/52/4d/fa524dff3190583560e5730c506ad6a8.jpg"
            },
            {
                name: "Shrimp Shack", 
                riders: 8, 
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" }
                ], 
                imgUrl: "https://static.spotapps.co/website_images/ab_websites/109590_website/logo.png"
            },
            {
                name: "Asmahan Restaurant", 
                riders: 2, 
                ridersDetails:[
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                ],
                imgUrl: "https://www.hyattrestaurants.com/uploaded/restaurant_logos/DMMGH-L006c-stk-TM-color-CMYK-png.png"}
        ],
    },

    {
        image: img3,
        restaurants: [
            {
                name: "Asian Food Restaurant",
                riders: 4,
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                ],
                imgUrl: 'https://img.freepik.com/premium-vector/fire-wok-asian-food-restaurant-logo_497517-604.jpg?w=2000'
            },
            {
                name: "Yasmin Mall",
                riders: 3, 
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                ],
                imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8Vc0WrM8mO0xfTjYzxUaDEvq1DPaoc1iag&usqp=CAU'
            },
            {
                name: "McDonald' ALSAMER",
                riders: 2, 
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" }
                ],
                imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbxoprno9xjr_va3qkqnt5xptcAeYSKF16nle4Sr-IvHO_YdC4c5X26wv56YGQm_76mYE&usqp=CAU" 
            },
            {
                name: "Sultan Restaurant", 
                riders: 5, 
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                ], 
                imgUrl: "https://i.pinimg.com/originals/fa/52/4d/fa524dff3190583560e5730c506ad6a8.jpg"
            },
            {
                name: "Shrimp Shack", 
                riders: 7, 
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" }
                ], 
                imgUrl: "https://static.spotapps.co/website_images/ab_websites/109590_website/logo.png"
            },
            {
                name: "Asmahan Restaurant", 
                riders: 3, 
                ridersDetails:[
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                    { name: "Hashim Sarwar", time: "25", earning: "40" },
                    { name: "Muhammad Baqar", time: '20', earning: "30" },
                ],
                imgUrl: "https://www.hyattrestaurants.com/uploaded/restaurant_logos/DMMGH-L006c-stk-TM-color-CMYK-png.png"
            }
        ],
    },
]

export default data