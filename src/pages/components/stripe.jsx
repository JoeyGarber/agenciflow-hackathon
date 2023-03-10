import React from "react";
import SideBar from "./SideBar"

function StripePage() {
    return( 
        <div className="bg-agencyGrey text-white h-full fixed w-full justify-start">
            <div className="bg-agencyGrey text-white h-20 flex w-full flex-wrap items-center justify-between px-4 mb-10 border-b border-agencyOutline ">
                <h1 className="font-bold text-4xl ml-8 top-5"> Stripe </h1>
            </div>
            <div className="rounded-2xl flex flex-col items-center justify-center bg-agencyDark text-white mt-10 ml-44 p-8 h-3/5 w-4/5 outline outline-1 outline-slate-500">
                <svg width="37" height="15" viewBox="0 0 37 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.77937 6.74737C3.00003 6.45911 2.57293 6.23491 2.57293 5.8826C2.57293 5.58361 2.81851 5.41282 3.25626 5.41282C4.05697 5.41282 4.87899 5.72246 5.44485 5.99998L5.76514 4.02494C5.31674 3.81139 4.39856 3.45908 3.12815 3.45908C2.23135 3.45908 1.48396 3.69393 0.950206 4.13168C0.394992 4.59073 0.106735 5.25268 0.106735 6.05339C0.106735 7.50532 0.992884 8.1246 2.43417 8.6477C3.363 8.97864 3.67263 9.21357 3.67263 9.57653C3.67263 9.92884 3.37364 10.1317 2.82916 10.1317C2.15656 10.1317 1.04629 9.80073 0.320285 9.37371L0 11.3701C0.619191 11.7224 1.77222 12.0854 2.968 12.0854C3.91813 12.0854 4.70819 11.8612 5.24203 11.4342C5.83984 10.9644 6.14948 10.2705 6.14948 9.37371C6.14948 7.88967 5.24203 7.27048 3.77937 6.74737ZM11.3635 5.58361L11.6838 3.61922H9.9929V1.23454L7.71951 1.60863L7.39122 3.61922L6.59163 3.74894L6.29232 5.58361H7.38794V9.43777C7.38794 10.4413 7.64417 11.1353 8.16727 11.5623C8.60502 11.9146 9.23487 12.0854 10.121 12.0854C10.8043 12.0854 11.2206 11.968 11.5089 11.8932V9.81138C11.3487 9.85414 10.9858 9.92884 10.7402 9.92884C10.2171 9.92884 9.9929 9.66197 9.9929 9.05342V5.58361H11.3635ZM16.4413 3.50448C15.694 3.50448 15.0961 3.89683 14.8612 4.60146L14.7011 3.61922H12.3844V11.9253H15.032V6.53382C15.363 6.1281 15.8327 5.98141 16.4733 5.98141C16.6122 5.98141 16.7616 5.98141 16.9431 6.01344V3.56854C16.7616 3.52586 16.6014 3.50448 16.4413 3.50448ZM18.9182 2.79713C19.6869 2.79713 20.3061 2.16729 20.3061 1.39861C20.3061 0.619192 19.6869 0 18.9182 0C18.1388 0 17.5196 0.619192 17.5196 1.39861C17.5196 2.16729 18.1388 2.79713 18.9182 2.79713ZM17.5837 3.61922H20.242V11.9253H17.5837V3.61922ZM27.7754 4.36653C27.3056 3.75799 26.6544 3.45908 25.8216 3.45908C25.053 3.45908 24.3804 3.77937 23.7504 4.45197L23.6117 3.61922H21.2842V15L23.932 14.5623V11.8932C24.3376 12.0213 24.754 12.0854 25.1277 12.0854C25.7896 12.0854 26.7505 11.9146 27.4978 11.1032C28.213 10.3238 28.5761 9.11748 28.5761 7.5267C28.5761 6.11745 28.3091 5.04986 27.7754 4.36653ZM25.5761 9.49109C25.3625 9.89682 25.0316 10.1104 24.6472 10.1104C24.3804 10.1104 24.1454 10.057 23.932 9.95022V5.99998C24.3804 5.53029 24.786 5.47688 24.9355 5.47688C25.6081 5.47688 25.939 6.20288 25.939 7.62279C25.939 8.43415 25.8216 9.06407 25.5761 9.49109ZM36.1669 7.6975C36.1669 6.37368 35.8786 5.32739 35.3127 4.59073C34.7362 3.84342 33.8714 3.45908 32.7718 3.45908C30.5191 3.45908 29.1206 5.12457 29.1206 7.79358C29.1206 9.28827 29.4942 10.4093 30.2308 11.1245C30.8928 11.7651 31.843 12.0854 33.0707 12.0854C34.2024 12.0854 35.2487 11.8185 35.9106 11.3808L35.6224 9.56588C34.9711 9.91819 34.2131 10.1104 33.359 10.1104C32.8465 10.1104 32.4942 10.0036 32.238 9.77935C31.9604 9.5445 31.8002 9.16016 31.7469 8.61567H36.1348C36.1455 8.48756 36.1669 7.88967 36.1669 7.6975ZM31.7255 6.99287C31.8002 5.80781 32.1205 5.25268 32.7291 5.25268C33.327 5.25268 33.6366 5.81854 33.6793 6.99287H31.7255Z" fill="#4D96DA"/>
                </svg>
                <h1 className="mt-4 font-bold text-2xl text-center mb-6"> Connect With Stripe </h1>
                <p className="mb-6 text-center"> Start by connecting your Stripe Account. We've partnered with Stripe to provide you with the easiest way to accept payments including credit cards online.</p>
                <button className="bg-transparent content-center hover:bg-blue-400 text-blue-400 font-semibold hover:text-white py-2 px-4 border border-blue-300 hover:border-transparent rounded"> Get Paid With Stripe </button>
            </div>
            <SideBar/>
        </div>
    )

}

export default StripePage