import React from 'react'
import MeetupList from '../components/meetups/MeetupList';
export const data = [
    {
        id: 1,
        title: "First Location",
        image: "https://thedigestonline.com/wp-content/uploads/2023/02/pexels-h-emre-773471-e1677008527160.jpg",
        address: "123 Main Street, City, Country"
    },
    {
        id: 2,
        title: "Second Location",
        image: "https://corporate.enelx.com/content/dam/global/detail-page/smart-city/sc/desk-service-card-smartcity.jpg",
        address: "456 Elm Street, Town, Country"
    },
    {
        id: 3,
        title: "Third Location",
        image: "https://t4.ftcdn.net/jpg/01/81/07/91/360_F_181079136_irl2A25Clc5Bi2Lwa3Q9kJvF0RlFv8tU.jpg",
        address: "789 Oak Street, Village, Country"
    }
];

const homepage = () => {
   
    return (
        <div>
             <MeetupList meetups={data}/> 
            hello
        </div>
    )
}

export default homepage
