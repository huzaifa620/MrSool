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
                name: "Mamma's Biryani",
                riders: 4,
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                    { name: "Khalid Al-Shehri", time: "25", earning: "40", type: 0 },
                    { name: "Nasser Al-Fahad", time: '20', earning: "30", type: 1 },
                    { name: "Saad Al-Omari", time: "25", earning: "40", type: 1 },
                    { name: "Mansour Al-Mutairi", time: '20', earning: "30", type: 1 },
                ],
                imgUrl: 'https://hsaa.hsobjects.com/h/restaurants/logos/000/016/881/86921d5301c0edbfd6e66ff11b5c4b81-original.jpg'
            },
            {
                name: "Hardee's",
                riders: 5,
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '30', earning: "30", type: 1 },
                    { name: "Khalid Al-Shehri", time: "25", earning: "40", type: 0 },
                    { name: "Nasser Al-Fahad", time: '20', earning: "30", type: 1 },
                    { name: "Saad Al-Omari", time: "25", earning: "40", type: 1 },
                    { name: "Mansour Al-Mutairi", time: '20', earning: "30", type: 1 },
                ],
                imgUrl: 'https://seeklogo.com/images/H/Hardee_s-logo-A40E6409AB-seeklogo.com.png'
            },
            {
                name: "Shehata Cold",
                riders: 5,
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '30', earning: "30", type: 1 },
                    { name: "Khalid Al-Shehri", time: "25", earning: "40", type: 0 },
                    { name: "Nasser Al-Fahad", time: '20', earning: "30", type: 1 },
                    { name: "Saad Al-Omari", time: "25", earning: "40", type: 1 },
                    { name: "Mansour Al-Mutairi", time: '20', earning: "30", type: 1 },
                ],
                imgUrl: 'https://media.licdn.com/dms/image/C4E0BAQFHu-WhOMUAIw/company-logo_200_200/0/1612626844750?e=2147483647&v=beta&t=k1IpLleErdiRM43OaQw460kp-j_T9dZdNLQfqNaaM3A'
            },
            {
                name: "Outback Steakhouse",
                riders: 5,
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '30', earning: "30", type: 1 },
                    { name: "Khalid Al-Shehri", time: "25", earning: "40", type: 0 },
                    { name: "Nasser Al-Fahad", time: '20', earning: "30", type: 1 },
                    { name: "Saad Al-Omari", time: "25", earning: "40", type: 1 },
                    { name: "Mansour Al-Mutairi", time: '20', earning: "30", type: 1 },
                ],
                imgUrl: 'https://i.pinimg.com/736x/e7/21/a2/e721a26ffeabf428b217739b6a9e1563.jpg'
            },
            {
                name: "Starbucks",
                riders: 5,
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '30', earning: "30", type: 1 },
                    { name: "Khalid Al-Shehri", time: "25", earning: "40", type: 0 },
                    { name: "Nasser Al-Fahad", time: '20', earning: "30", type: 1 },
                    { name: "Saad Al-Omari", time: "25", earning: "40", type: 1 },
                    { name: "Mansour Al-Mutairi", time: '20', earning: "30", type: 1 },
                ],
                imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/800px-Starbucks_Corporation_Logo_2011.svg.png'
            },
            {
                name: "Gloria Jean's Coffees",
                riders: 5,
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '30', earning: "30", type: 1 },
                    { name: "Khalid Al-Shehri", time: "25", earning: "40", type: 0 },
                    { name: "Nasser Al-Fahad", time: '20', earning: "30", type: 1 },
                    { name: "Saad Al-Omari", time: "25", earning: "40", type: 1 },
                    { name: "Mansour Al-Mutairi", time: '20', earning: "30", type: 1 },
                ],
                imgUrl: 'https://www.casuarinasquare.com.au/wp-content/uploads/2022/03/logo-gloria-jeans-1.jpg'
            },
            {
                name: "Barn's Coffee",
                riders: 4,
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '30', earning: "30", type: 1 },
                    { name: "Khalid Al-Shehri", time: "25", earning: "40", type: 0 },
                    { name: "Nasser Al-Fahad", time: '20', earning: "30", type: 1 },
                    { name: "Saad Al-Omari", time: "25", earning: "40", type: 1 },
                    { name: "Mansour Al-Mutairi", time: '20', earning: "30", type: 1 },
                ],
                imgUrl: 'https://barns.com.sa/public/assets/store/themes/ecomm/images/Logo_green.png'
            }
        ],
        sum: 57
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
                    { name: "Abdullah Al-Saud", time: '20', earning: "30", type: 0 },
                    { name: "Nasser Al-Fahad", time: "25", earning: "40", type: 1 },
                    { name: "Saad Al-Omari", time: '20', earning: "30", type: 1 },
                ],
                imgUrl: 'https://img.freepik.com/premium-vector/fire-wok-asian-food-restaurant-logo_497517-604.jpg?w=2000'
            },
            {
                name: "Yasmin Mall",
                riders: 12, 
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 0 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 0 },
                    { name: "Abdullah Al-Saud", time: '20', earning: "30", type: 0 },
                    { name: "Nasser Al-Fahad", time: "25", earning: "40", type: 1 },
                    { name: "Saad Al-Omari", time: '20', earning: "30", type: 1 },
                ],
                imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8Vc0WrM8mO0xfTjYzxUaDEvq1DPaoc1iag&usqp=CAU'
            },
            {
                name: "McDonald' ALSAMER",
                riders: 5, 
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 0 },
                    { name: "Abdullah Al-Saud", time: '20', earning: "30", type: 0 },
                    { name: "Nasser Al-Fahad", time: "25", earning: "40", type: 1 },
                    { name: "Saad Al-Omari", time: '20', earning: "30", type: 1 },
                ],
                imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbxoprno9xjr_va3qkqnt5xptcAeYSKF16nle4Sr-IvHO_YdC4c5X26wv56YGQm_76mYE&usqp=CAU" 
            },
            {
                name: "Starbucks",
                riders: 5,
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '30', earning: "30", type: 1 },
                    { name: "Khalid Al-Shehri", time: "25", earning: "40", type: 0 },
                    { name: "Nasser Al-Fahad", time: '20', earning: "30", type: 1 },
                    { name: "Saad Al-Omari", time: "25", earning: "40", type: 1 },
                    { name: "Mansour Al-Mutairi", time: '20', earning: "30", type: 1 },
                ],
                imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/800px-Starbucks_Corporation_Logo_2011.svg.png'
            },
            {
                name: "Gloria Jean's Coffees",
                riders: 5,
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '30', earning: "30", type: 1 },
                    { name: "Khalid Al-Shehri", time: "25", earning: "40", type: 0 },
                    { name: "Nasser Al-Fahad", time: '20', earning: "30", type: 1 },
                    { name: "Saad Al-Omari", time: "25", earning: "40", type: 1 },
                    { name: "Mansour Al-Mutairi", time: '20', earning: "30", type: 1 },
                ],
                imgUrl: 'https://www.casuarinasquare.com.au/wp-content/uploads/2022/03/logo-gloria-jeans-1.jpg'
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
                    { name: "Abdullah Al-Saud", time: '20', earning: "30", type: 0 },
                    { name: "Nasser Al-Fahad", time: "25", earning: "40", type: 1 },
                    { name: "Saad Al-Omari", time: '20', earning: "30", type: 1 },
                    { name: "Khalid Al-Shehri", time: "25", earning: "40", type: 0 },
                    { name: "Mansour Al-Mutairi", time: '20', earning: "30", type: 1 }
                ], 
                imgUrl: "https://static.spotapps.co/website_images/ab_websites/109590_website/logo.png"
            },
            {
                name: "Asmahan Restaurant", 
                riders: 12, 
                ridersDetails:[
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 1 },
                    { name: "Abdullah Al-Saud", time: '20', earning: "30", type: 0 },
                    { name: "Nasser Al-Fahad", time: "25", earning: "40", type: 1 },
                    { name: "Saad Al-Omari", time: '20', earning: "30", type: 1 },
                    { name: "Khalid Al-Shehri", time: "25", earning: "40", type: 0 },
                    { name: "Mansour Al-Mutairi", time: '20', earning: "30", type: 1 }
                ],
                imgUrl: "https://www.hyattrestaurants.com/uploaded/restaurant_logos/DMMGH-L006c-stk-TM-color-CMYK-png.png"
            }
        ],
        sum: 66
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
                    { name: "Abdullah Al-Saud", time: '20', earning: "30", type: 0 },
                    { name: "Nasser Al-Fahad", time: "25", earning: "40", type: 1 },
                    { name: "Saad Al-Omari", time: '20', earning: "30", type: 1 },
                    { name: "Mansour Al-Mutairi", time: '20', earning: "30", type: 1 },
                    { name: "Khalid Al-Shehri", time: "25", earning: "40", type: 0 },
                ],
                imgUrl: 'https://img.freepik.com/premium-vector/fire-wok-asian-food-restaurant-logo_497517-604.jpg?w=2000'
            },
            {
                name: "Yasmin Mall",
                riders: 13, 
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 1 },
                    { name: "Khalid Al-Shehri", time: "25", earning: "40", type: 0 },
                    { name: "Mansour Al-Mutairi", time: '20', earning: "30", type: 1 },
                    { name: "Abdullah Al-Saud", time: '20', earning: "30", type: 0 },
                    { name: "Nasser Al-Fahad", time: "25", earning: "40", type: 1 },
                    { name: "Saad Al-Omari", time: '20', earning: "30", type: 1 },
                ],
                imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8Vc0WrM8mO0xfTjYzxUaDEvq1DPaoc1iag&usqp=CAU'
            },
            {
                name: "McDonald' ALSAMER",
                riders: 12, 
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 0 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 1 },
                    { name: "Abdullah Al-Saud", time: '20', earning: "30", type: 0 },
                    { name: "Nasser Al-Fahad", time: "25", earning: "40", type: 1 },
                    { name: "Saad Al-Omari", time: '20', earning: "30", type: 1 },
                    { name: "Khalid Al-Shehri", time: "25", earning: "40", type: 0 },
                ],
                imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbxoprno9xjr_va3qkqnt5xptcAeYSKF16nle4Sr-IvHO_YdC4c5X26wv56YGQm_76mYE&usqp=CAU" 
            },
            {
                name: "Sultan Restaurant", 
                riders: 15, 
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 1 },
                    { name: "Abdullah Al-Saud", time: '20', earning: "30", type: 0 },
                    { name: "Nasser Al-Fahad", time: "25", earning: "40", type: 1 },
                    { name: "Saad Al-Omari", time: '20', earning: "30", type: 1 },
                    { name: "Mansour Al-Mutairi", time: '20', earning: "30", type: 1 }
                ], 
                imgUrl: "https://i.pinimg.com/originals/fa/52/4d/fa524dff3190583560e5730c506ad6a8.jpg"
            },
            {
                name: "Shrimp Shack", 
                riders: 17, 
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 1 },
                    { name: "Abdullah Al-Saud", time: '20', earning: "30", type: 0 },
                    { name: "Nasser Al-Fahad", time: "25", earning: "40", type: 1 },
                    { name: "Saad Al-Omari", time: '20', earning: "30", type: 1 },
                    { name: "Mansour Al-Mutairi", time: '20', earning: "30", type: 1 },
                    { name: "Khalid Al-Shehri", time: "25", earning: "40", type: 0 },
                ], 
                imgUrl: "https://static.spotapps.co/website_images/ab_websites/109590_website/logo.png"
            },
            {
                name: "Asmahan Restaurant", 
                riders: 13, 
                ridersDetails:[
                    { name: "Muhammad Baqar", time: '20', earning: "30", type: 1 },
                    { name: "Hashim Sarwar", time: "25", earning: "40", type: 1 },
                    { name: "Mansour Al-Mutairi", time: '20', earning: "30", type: 1 },
                    { name: "Khalid Al-Shehri", time: "25", earning: "40", type: 0 },
                    { name: "Abdullah Al-Saud", time: '20', earning: "30", type: 0 },
                    { name: "Nasser Al-Fahad", time: "25", earning: "40", type: 1 },
                    { name: "Saad Al-Omari", time: '20', earning: "30", type: 1 },
                ],
                imgUrl: "https://www.hyattrestaurants.com/uploaded/restaurant_logos/DMMGH-L006c-stk-TM-color-CMYK-png.png"
            },
            {
                name: "Barn's Coffee",
                riders: 9,
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '30', earning: "30", type: 1 },
                    { name: "Khalid Al-Shehri", time: "25", earning: "40", type: 0 },
                    { name: "Nasser Al-Fahad", time: '20', earning: "30", type: 1 },
                    { name: "Saad Al-Omari", time: "25", earning: "40", type: 1 },
                    { name: "Mansour Al-Mutairi", time: '20', earning: "30", type: 1 },
                ],
                imgUrl: 'https://barns.com.sa/public/assets/store/themes/ecomm/images/Logo_green.png'
            },
            {
                name: "Starbucks",
                riders: 25,
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '30', earning: "30", type: 1 },
                    { name: "Khalid Al-Shehri", time: "25", earning: "40", type: 0 },
                    { name: "Nasser Al-Fahad", time: '20', earning: "30", type: 1 },
                    { name: "Saad Al-Omari", time: "25", earning: "40", type: 1 },
                    { name: "Mansour Al-Mutairi", time: '20', earning: "30", type: 1 },
                ],
                imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/800px-Starbucks_Corporation_Logo_2011.svg.png'
            },
            {
                name: "Gloria Jean's Coffees",
                riders: 11,
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '30', earning: "30", type: 1 },
                    { name: "Khalid Al-Shehri", time: "25", earning: "40", type: 0 },
                    { name: "Nasser Al-Fahad", time: '20', earning: "30", type: 1 },
                    { name: "Saad Al-Omari", time: "25", earning: "40", type: 1 },
                    { name: "Mansour Al-Mutairi", time: '20', earning: "30", type: 1 },
                ],
                imgUrl: 'https://www.casuarinasquare.com.au/wp-content/uploads/2022/03/logo-gloria-jeans-1.jpg'
            },
        ],
        sum: 129
    },
]

export default data