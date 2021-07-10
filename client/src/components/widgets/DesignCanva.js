import React from 'react'

export default function DesignQuote({ title }) {
    return (
        <div className="flex items-center p-10 bg-white group hover:bg-green-300 shadow rounded-lg cursor-pointer">
            <div className="inline-flex flex-shrink-0 items-center justify-centerounded-full mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 512 512.001" className="h-20 w-20">
                    <path d="M409.016 203.508c-10.047 4.906-20.996 9.008-32.649 12.09-.863.23-1.73.445-2.597.664-24.93 6.23-49.278 6.808-70.25 2.68-31.696-6.258-55.66-23.282-62.172-47.883-8.594-32.465 15.726-68.477 57.25-90.66a34.928 34.928 0 0012.828-11.715 35.122 35.122 0 005.637-16.422c1.605-19.684-12.477-37.207-32.067-39.805-26.851-3.578-65.82-5.387-104.297 4.8C51.441 51.478-25.008 187.454 7.453 317.16c33.813 135.098 171.512 216.004 305.695 180.297 110.207-29.32 183.961-129.531 184.985-238.828a45.815 45.815 0 00-.07-2.914c-2.41-43.985-49.454-71.54-89.047-52.207zm-10.582 151.879c-19.282 5.105-39.032-6.375-44.13-25.645-5.105-19.281 6.376-39.031 25.657-44.133 19.27-5.101 39.02 6.38 44.121 25.66 5.102 19.266-6.379 39.016-25.648 44.118zm0 0" fill="#e5e9ea" />
                    <path d="M333.832 410.309c0 24.351-19.738 44.09-44.09 44.09-24.351 0-44.09-19.739-44.09-44.09 0-24.352 19.739-44.094 44.09-44.094 24.352 0 44.09 19.742 44.09 44.094zm0 0" fill="#42c0e2" />
                    <path d="M209.953 379.625c0 24.352-19.742 44.09-44.09 44.09-24.351 0-44.093-19.738-44.093-44.09 0-24.352 19.742-44.094 44.093-44.094 24.348 0 44.09 19.742 44.09 44.094zm0 0" fill="#49bd90" />
                    <path d="M136.668 272.066c0 24.352-19.738 44.09-44.09 44.09-24.351 0-44.094-19.738-44.094-44.09 0-24.351 19.743-44.093 44.094-44.093 24.352 0 44.09 19.742 44.09 44.093zm0 0" fill="#fa70b2" />
                    <path d="M173.477 147.809c0 24.351-19.743 44.093-44.094 44.093-24.352 0-44.09-19.742-44.09-44.093 0-24.352 19.738-44.09 44.09-44.09 24.351 0 44.094 19.738 44.094 44.09zm0 0M471.676 200.68l-7.414 95.093-15.742 201.782c-.313 4.074-3.043 7.695-7.23 10.297-4.18 2.601-9.849 4.175-16.044 4.148-12.387-.05-22.574-6.496-23.137-14.64l-14.043-201.907-6.617-95.152zm0 0" fill="#ffd061" />
                    <path d="M436.434 510.156c-8.16-2.199-14.028-7.37-14.457-13.5L406.895 200.41l-25.446-.11 6.621 95.15 14.04 201.905c.562 8.145 10.753 14.59 23.136 14.641 4.043.02 7.871-.644 11.188-1.84zm0 0" fill="#ef8930" />
                    <path d="M464.262 295.773l7.414-95.093-64.781-.27-25.45-.11 6.625 95.153 23.668.098zm0 0" fill="#3e4b5c" />
                    <path d="M381.445 200.305c-41.289-18.559-45.625-80.63-8.699-117.246C409.672 46.44 425.852 24.734 425.953 0c0 0 133.082 136.293 45.723 200.684zm0 0" fill="#fa70b2" />
                    <path d="M418.805 200.457l-37.36-.156c-41.285-18.563-45.625-80.633-8.699-117.235C409.676 46.446 425.852 24.73 425.953 0c13.363 73.64-60.75 117.254-7.148 200.457zm0 0" fill="#dd215b" />
                    <path d="M411.738 295.55l-4.843-95.14-25.45-.11 6.625 95.153zm0 0" fill="#243142" />
                </svg>
            </div>
            <div>
                <span className="block text-2xl font-bold group-hover:text-black">{title}</span>
            </div>
        </div>

    )
}