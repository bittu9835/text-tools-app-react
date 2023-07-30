import React, { useState } from 'react'
import logo from '../Assest/logo.png'

export default function Navbar(props) {
    // display times and date
    let time = new Date().toLocaleTimeString()
    const [ctime, setCtime] = useState(time)
    const curentTime = () => {
        time = new Date().toLocaleTimeString()
        setCtime(time)
    };
    setInterval(curentTime, 1000);


    let today = new Date();
    let hours = today.getHours();
    //let minuts = today.getMinutes();
    //let seconds = today.getSeconds();
    let dayname = today.toLocaleString('default', { weekday: 'short' });
    let datmonth = today.toLocaleString('default', { month: 'short' });
    let daynumber = today.getDate();
    let yearname = today.getFullYear();
    // let ampm = 'AM';

    //good morning
    let greeting;
    if (hours > 6 && hours < 12) {
        greeting = "Good Morning!";
    } else if (hours > 12 && hours < 15) {
        greeting = "Good Afternoon!";
    } else if (hours > 15 && hours < 19) {
        greeting = "Good Evening!";
    } else {
        greeting = "Good Nigth!";
    }

    // if(hours>12){
    //     ampm = 'PM';
    // }

    //12 hourse formate
    // hours = hours>12 ? hours % 12 : hours;

    //0 on 
    // if(hours<10){
    //     hours = "0"+hours;
    // }
    // if(minuts<10){
    //     minuts = "0"+minuts;
    // }
    // if(seconds<10){
    //     seconds = "0"+seconds;
    // }
    if (daynumber < 10) {
        daynumber = "0" + daynumber;
    }
    return (
        <>
            <div className="navbar flex items-center bg-green-400 h-10 px-8 text-white gap-3">
                <div className="icon w-14 bg-white rounded-full">
                    <img src={logo} alt="" />
                </div>
                <h3 className='text-lg font-bold cursor-pointer'>{props.titles}</h3>
                <ul className='flex items-center gap-5 px-8 font-medium'>
                    <li className='hover:text-gray-200 cursor-pointer'>Home</li>
                    <li className='hover:text-gray-200 cursor-pointer'>About</li>
                    <li className='hover:text-gray-200 cursor-pointer'>Contact</li>
                </ul>
                <div className="dateTime w-[98%] h-[100%] bg-green-400 flex justify-end gap-2">
                    <div className="rounded-r-lg bg-gradient-to-r from-green-400 via-purple-500 to-pink-500 w-[28rem] h-[100%] float-right flex items-center text-white"><marquee behavior="scroll" direction="left">{greeting} & Welcome To <span className='text-lg font-bold text-white mr-3'>{props.titles}</span> <span className='text-black'>{dayname} {daynumber} {datmonth} {yearname}.</span></marquee>
                    </div>
                    <div className="flex items-center">
                        <p>{ctime}</p>
                    </div>
                </div>
               
            </div>
        </>
    )
}
