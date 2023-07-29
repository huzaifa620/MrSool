import img0 from './mapPictures/R0.png'
import img1 from './mapPictures/J1.jpg'
import img2 from './mapPictures/J2.jpg'
import img3 from './mapPictures/J3.jpg'

import cairo from './mapPictures/cairo.png'
import alexandria from './mapPictures/alexandria.png'
import mecca from './mapPictures/mecca.png'
import jeddah from './mapPictures/jeddah.png'
import riyadh from './mapPictures/riyadh.png'
import medina from './mapPictures/medina.png'
import dammam from './mapPictures/dammam.png'
import taif from './mapPictures/taif.png'
import tabuk from './mapPictures/tabuk.png'
import giza from './mapPictures/giza.png'
import sharmelsheikh from './mapPictures/sharmelsheikh.png'
import luxor from './mapPictures/luxor.png'
import aswan from './mapPictures/aswan.png'
import hurghada from './mapPictures/hurghada.png'

import alBalad from './mapPictures/alBalad.png'
import alHamra from './mapPictures/alHamra.png'
import alNuzhah from './mapPictures/alNuzhah.png'
import alSalamah from './mapPictures/alSalamah.png'
import alSharafeyah from './mapPictures/alSharafeyah.png'
import alOlayah from './mapPictures/alOlayah.png'
import alMalaz from './mapPictures/alMalaz.png'
import alBathaa from './mapPictures/alBathaa.png'
import alNahdah from './mapPictures/alNahdah.png'
import alMurabba from './mapPictures/alMurabba.png'
import alAqiq from './mapPictures/alAqiq.png'
import alQiblatayn from './mapPictures/alQiblatayn.png'
import alSalam from './mapPictures/alSalam.png'
import alAridh from './mapPictures/alAridh.png'
import alHaram from './mapPictures/alHaram.png'
import alZahir from './mapPictures/alZahir.png'
import alHujun from './mapPictures/alHujun.png'
import alShubaikah from './mapPictures/alShubaikah.png'
import alMansour from './mapPictures/alMansour.png'
import alHindawiyyah from './mapPictures/alHindawiyyah.png'

import alAdama from './mapPictures/alAdama.png'
import alAnud from './mapPictures/alAnud.png'
import alShati from './mapPictures/alShati.png'
import alRakah from './mapPictures/alRakah.png'
import alDanah from './mapPictures/alDanah.png'
import alHawiyah from './mapPictures/alHawiyah.png'
import alWard from './mapPictures/alWard.png'
import alHada from './mapPictures/alHada.png'
import alQouraiat from './mapPictures/alQouraiat.png'
import alShafa from './mapPictures/alShafa.png'
import alRawda from './mapPictures/alRawda.png'
import alSharafiyah from './mapPictures/alSharafeyah.png'
import alQadisiyah from './mapPictures/alQadisiyah.png'
import alWajh from './mapPictures/alWajh.png'
import alSamdah from './mapPictures/alSamdah.png'
import zamalek from './mapPictures/zamalek.png'
import maadi from './mapPictures/maadi.png'
import heliopolis from './mapPictures/heliopolis.png'
import doqi from './mapPictures/doqi.png'
import gizaa from './mapPictures/gizaa.png'

import spoon from './icons/cutlery.png'

const data = [
    {
        image: img0,
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
                riders: 19,
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
                riders: 20,
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
                riders: 12,
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
        sum: 135
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
            },
            {
                name: "Deep Fries",
                riders: 5,
                ridersDetails: [
                    { name: "Muhammad Baqar", time: '30', earning: "30", type: 1 },
                    { name: "Khalid Al-Shehri", time: "25", earning: "40", type: 0 },
                    { name: "Nasser Al-Fahad", time: '20', earning: "30", type: 1 },
                    { name: "Saad Al-Omari", time: "25", earning: "40", type: 1 },
                    { name: "Mansour Al-Mutairi", time: '20', earning: "30", type: 1 },
                ],
                imgUrl: 'https://s3.eu-west-1.amazonaws.com/cdn.getsolo.io/1653517806628eadee4def0_DF%20NEW%20LOGO-01.png'
            }
        ],
        sum: 62
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

    {
        image: jeddah,
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
        image: riyadh,
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
        image: mecca,
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
        image: medina,
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
        image: dammam,
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
        image: taif,
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
        image: tabuk,
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
        image: cairo,
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
        image: alexandria,
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
        image: giza,
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
        image: sharmelsheikh,
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
        image: luxor,
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
        image: aswan,
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
        image: hurghada,
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
        image: alBalad,
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
        image: alSharafeyah,
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
        image: alHamra,
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
        image: alNuzhah,
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
        image: alSalamah,
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
        image: alOlayah,
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
        image: alMalaz,
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
        image: alBathaa,
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
        image: alNahdah,
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
        image: alMurabba,
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
        image: alHindawiyyah,
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
        image: alMansour,
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
        image: alShubaikah,
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
        image: alHujun,
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
        image: alZahir,
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
        image: alHaram,
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
        image: alAridh,
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
        image: alSalam,
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
        image: alQiblatayn,
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
        image: alAqiq,
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
        image: alAdama,
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
        image: alAnud,
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
        image: alShati,
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
        image: alRakah,
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
        image: alDanah,
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
        image: alHawiyah,
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
        image: alWard,
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
        image: alHada,
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
        image: alQouraiat,
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
        image: alShafa,
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
        image: alRawda,
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
        image: alSharafiyah,
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
        image: alQadisiyah,
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
        image: alWajh,
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
        image: alSamdah,
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
        image: zamalek,
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
        image: maadi,
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
        image: heliopolis,
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
        image: doqi,
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
        image: gizaa,
        restaurants: [
            {name: "-", riders: 0, ridersDetails: [], imgUrl: spoon},
            {name: "-", riders: 0, ridersDetails: [], imgUrl: spoon},
            {name: "-", riders: 0, ridersDetails: [], imgUrl: spoon},
            {name: "-", riders: 0, ridersDetails: [], imgUrl: spoon},
            {name: "-", riders: 0, ridersDetails: [], imgUrl: spoon},
        ], 
        sum: 0
    },

]

export default data