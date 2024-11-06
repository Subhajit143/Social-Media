import React, { useEffect, useState } from 'react'
import girl1 from "../pic/1990s beautiful blonde Supergirl.jpg"
import axios from "axios"

const ProfileCard = (prop) => {
    const[sendFriendUser,setSendFriendUser] = useState("")

    useEffect(()=>{
        setSendFriendUser(localStorage.getItem("username"))
    },[sendFriendUser])

    const handleClick = (data) =>{
        console.log("receave friend request to ",data.userdata.username)
        console.log("send friend request",sendFriendUser)
        const receaveFR = data.userdata.username
        const sendFR = sendFriendUser

        axios.post("https://social-media-mern-1usj.onrender.com/api/sendfriendrequest",{receaveFR,sendFR})
        .then((e)=>{
            if(e.data==="success")
            alert("send friend request success")
        })
        .catch((err)=>{
            console.log(err)
        })

    }
  return (
    <div>
      

<div className="  w-[555px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span className="sr-only">Open dropdown</span>
            
        </button>
        {/* <!-- Dropdown menu --> */}
        <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2" aria-labelledby="dropdownButton">
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
            </li>
            </ul>
        </div>
    </div>
    <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={ `../public/images/${prop.userdata.profilePic}`} alt="Bonnie image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{prop.userdata.username}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{prop.userdata.email}</span>
        <div className="flex mt-4 md:mt-6">
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-cyan-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>handleClick(prop)}>Add friend</a>
            <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a>
        </div>
    </div>
</div>

    </div>
  )
}

export default ProfileCard
