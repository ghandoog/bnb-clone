import { useState } from "react"
import { Link } from "react-router-dom"


export default function TopPage() {
    const [visible, setVisible] = useState(false)

    function showDropMenu() {
        setVisible((visible) => !visible)
    }
    return (
        <>

            {/* top page */}
            <div className='flex space-x-5 justify-between'>


                {/* icon & Airbnb logo */}
                <div className='flex gap-2 font-black text-xl px-4 py-4 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <h1>Airbnb</h1>
                </div>



                {/* search bar (anyWhere  anyweek add guests) */}
                <div className='flex max-w-fit gap-2 p-5 rounded-full fit-content border border-sky-500 shadow-xl'>
                    <button >AnyWhere</button>
                    <div className='border-r-2'></div>
                    <button >Any week</button>
                    <div className='border-r-2'></div>
                    <button>Add guests</button>
                    <div className='text-white bg-pink-500 rounded-full p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                </div>



                {/* airbnb you home (userZone) */}
                <div className='flex gap-2 py-4 items-center '>

                    <div className='flex gap-4'>
                        <h1>Airbnb your home</h1>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                        </button>
                    </div>


                    <div>
                        <div>
                            <button onClick={showDropMenu} className='flex border border-gray-400 rounded-full p-2 gap-1 shadow-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>

                            </button>
                        </div>

                        <div hidden={visible} className='absolute flex flex-col p-4 m-2 rounded-xl h-fit w-64  bg-white-400 shadow-lg'>
                            <Link to="/signUp">Sign Up</Link>
                            <Link to="/signIn">Sign in</Link>
                            <hr></hr>
                            <Link>Gift cards</Link>
                            <Link to="/">Airbnb your home</Link>
                            <Link>Help Center</Link>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

