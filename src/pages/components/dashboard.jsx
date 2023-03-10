import React from "react";

function Dashboard() {
    return (
        <div className="bg-agencyOutline text-white fixed h-full w-full items-start justify-between px-8">
           
            <h2 className="font-bold text-4xl mt-8"> Hi 👋 this is the Dashboard and your Personal Space </h2>

                <div className="flex flex-row">

                    <div className="rounded-lg bg-agencyGrey block text-white mt-10 p-8 w-56 h-44 mb-14 outline outline-1 outline-slate-500">
                        <h2 className="mb-4 font-bold text-2xl">Revenue</h2>
                        <svg width="145" height="2" viewBox="0 0 145 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1L145 1" stroke="#353B43" stroke-width="2"/>
                        </svg>
                        <h4 className='text-agencyBlue font-bold mt-4'>USD 60</h4>
                        <h3 className='text-slate-400 font-light text-sm'>Updated 5 mins ago</h3>
                    </div>
                    
                    <div className="rounded-lg ml-14 bg-agencyGrey block text-white p-8 mt-10 h-44 outline outline-1 outline-slate-500">
                        <h2 className="mb-4 font-bold text-2xl">Pending Invoices</h2>
                        <svg width="493" height="2" viewBox="0 0 493 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1L493 0.999978" stroke="#353B43" stroke-width="2"/>
                        </svg>
                        <div className="flex flex-row">
                        <h1 className='text-white font-bold mt-4 text-xl'>INVOICE #1001</h1>
                        <h1 className='text-white ml-36 mt-4 text-lg'>Akshit</h1>
                        <h1 className='text-white ml-36 font-bold mt-4 text-xl'>USD 60</h1>
                        </div>
                        <div className="flex flex-row">
                        <h1 className='text-white'>22nd Feburary, 2023</h1>
                        <h1 className='text-white ml-16 '>akshit@mattyoungmedia.com</h1>
                        <h1 className='text-white ml-16 '>Seen 9h</h1>
                        </div>
                    </div>

                    <div className="rounded-lg right-16 top-12 bg-agencyGrey fixed text-white mb-2 w-56 p-6 mt-10 outline outline-1 outline-slate-500">
                        <h2 className="mb-4 font-bold text-2xl">Clients</h2>
                        <svg width="266" height="2" viewBox="0 0 266 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1L266 1" stroke="#353B43" stroke-width="2"/>
                        </svg>
                        <h2 className="mt-3 font-bold"> Profile </h2>
                        <div className="overflow-auto h-36">
                        <ul>
                            <li>Akshit</li>
                            <li>Tushar</li>
                            <li>Joey</li>
                            <li>Om</li>
                            <li>Ethan</li>
                            <li>Akshit</li>
                            <li>Tushar</li>
                            <li>Joey</li>
                            <li>Om</li>
                            <li>Ethan</li>
                        </ul>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-row">
                <div className="rounded-lg bg-agencyGrey block text-white p-8 outline outline-1 outline-slate-500">
                    <h2 className="mb-4 font-bold text-2xl">Upcoming Tickets</h2>
                    <svg width="493" height="2" viewBox="0 0 493 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1L493 0.999978" stroke="#353B43" stroke-width="2"/>
                    </svg>
                    <h2 className="mt-3 font-bold"> Today (1) </h2>
                    <div className="overflow-auto h-40">
                    <ul>
                        <li className="rounded-lg bg-agencyLightGrey text-white p-2 min-h-10 mt-2 outline outline-2 outline-agencyOutline">Ticket one</li>
                        <li className="rounded-lg bg-agencyLightGrey text-white p-2 min-h-10 mt-2 outline outline-2 outline-agencyOutline">Ticket two</li>
                        <li className="rounded-lg bg-agencyLightGrey text-white p-2 min-h-10 mt-2 outline outline-2 outline-agencyOutline">Ticket three</li>
                        <li className="rounded-lg bg-agencyLightGrey text-white p-2 min-h-10 mt-2 outline outline-2 outline-agencyOutline">Ticket four</li>
                        <li className="rounded-lg bg-agencyLightGrey text-white p-2 min-h-10 mt-2 outline outline-2 outline-agencyOutline">Ticket five</li>
                        <li className="rounded-lg bg-agencyLightGrey text-white p-2 min-h-10 mt-2 outline outline-2 outline-agencyOutline">Ticket one</li>
                        <li className="rounded-lg bg-agencyLightGrey text-white p-2 min-h-10 mt-2 outline outline-2 outline-agencyOutline">Ticket two</li>
                        <li className="rounded-lg bg-agencyLightGrey text-white p-2 min-h-10 mt-2 outline outline-2 outline-agencyOutline">Ticket three</li>
                        <li className="rounded-lg bg-agencyLightGrey text-white p-2 min-h-10 mt-2 outline outline-2 outline-agencyOutline">Ticket four</li>
                        <li className="rounded-lg bg-agencyLightGrey text-white p-2 min-h-10 mt-2 outline outline-2 outline-agencyOutline">Ticket five</li>
                        <li className="rounded-lg bg-agencyLightGrey text-white p-2 min-h-10 mt-2 outline outline-2 outline-agencyOutline">Ticket one</li>
                        <li className="rounded-lg bg-agencyLightGrey text-white p-2 min-h-10 mt-2 outline outline-2 outline-agencyOutline">Ticket two</li>
                        <li className="rounded-lg bg-agencyLightGrey text-white p-2 min-h-10 mt-2 outline outline-2 outline-agencyOutline">Ticket three</li>
                        <li className="rounded-lg bg-agencyLightGrey text-white p-2 min-h-10 mt-2 outline outline-2 outline-agencyOutline">Ticket four</li>
                        <li className="rounded-lg bg-agencyLightGrey text-white p-2 min-h-10 mt-2 outline outline-2 outline-agencyOutline">Ticket five</li>
                    </ul>
                    </div>
                </div>

                <div className="rounded-lg ml-10 bg-agencyGrey block text-white p-6 mb-0 outline outline-1 outline-slate-500">
                    <h2 className="mb-4 font-bold text-2xl">Notes</h2>
                    <svg width="351" height="2" viewBox="0 0 351 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1L351 0.999985" stroke="#353B43" stroke-width="2"/>
                    </svg>
                    <div className="mt-8 overflow-auto h-40">
                    <ul>
                        <li className="rounded-lg bg-agencyLightGrey text-white p-2 min-h-10 mt-2 outline outline-2 outline-agencyOutline">Note 1</li>
                        <li className="rounded-lg bg-agencyLightGrey text-white p-2 min-h-10 mt-2 outline outline-2 outline-agencyOutline">Note 2</li>
                        <li className="rounded-lg bg-agencyLightGrey text-white p-2 min-h-10 mt-2 outline outline-2 outline-agencyOutline">Note 3</li>
                        <li className="rounded-lg bg-agencyLightGrey text-white p-2 min-h-10 mt-2 outline outline-2 outline-agencyOutline">Note 4</li>
                        <li className="rounded-lg bg-agencyLightGrey text-white p-2 min-h-10 mt-2 outline outline-2 outline-agencyOutline">Note 5</li>
                        <li className="rounded-lg bg-agencyLightGrey text-white p-2 min-h-10 mt-2 outline outline-2 outline-agencyOutline">Note 1</li>
                        <li className="rounded-lg bg-agencyLightGrey text-white p-2 min-h-10 mt-2 outline outline-2 outline-agencyOutline">Note 2</li>
                        <li className="rounded-lg bg-agencyLightGrey text-white p-2 min-h-10 mt-2 outline outline-2 outline-agencyOutline">Note 3</li>
                        <li className="rounded-lg bg-agencyLightGrey text-white p-2 min-h-10 mt-2 outline outline-2 outline-agencyOutline">Note 4</li>
                        <li className="rounded-lg bg-agencyLightGrey text-white p-2 min-h-10 mt-2 outline outline-2 outline-agencyOutline">Note 5</li>
                        <li className="rounded-lg bg-agencyLightGrey text-white p-2 min-h-10 mt-2 outline outline-2 outline-agencyOutline">Note 1</li>
                        <li className="rounded-lg bg-agencyLightGrey text-white p-2 min-h-10 mt-2 outline outline-2 outline-agencyOutline">Note 2</li>
                        <li className="rounded-lg bg-agencyLightGrey text-white p-2 min-h-10 mt-2 outline outline-2 outline-agencyOutline">Note 3</li>
                        <li className="rounded-lg bg-agencyLightGrey text-white p-2 min-h-10 mt-2 outline outline-2 outline-agencyOutline">Note 4</li>
                        <li className="rounded-lg bg-agencyLightGrey text-white p-2 min-h-10 mt-2 outline outline-2 outline-agencyOutline">Note 5</li>
                    </ul>
                    </div>
                </div>
                <div className="rounded-lg w-56 ml-12 float-right bg-agencyGrey block text-white p-6 mt-8 outline outline-1 outline-slate-500">
                    <h2 className="mb-4 font-bold text-2xl">Teams</h2>
                    <svg width="266" height="2" viewBox="0 0 266 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1L266 1" stroke="#353B43" stroke-width="2"/>
                    </svg>
                    <h2 className="mt-3 font-bold"> Profile </h2>
                    <div className="overflow-auto h-36">
                    <ul>
                        <li>Akshit</li>
                        <li>Tushar</li>
                        <li>Joey</li>
                        <li>Om</li>
                        <li>Ethan</li>
                        <li>Akshit</li>
                        <li>Tushar</li>
                        <li>Joey</li>
                        <li>Om</li>
                        <li>Ethan</li>
                    </ul>
                    </div>
                </div>    
            </div> 
        </div>
    )
}

export default Dashboard


  