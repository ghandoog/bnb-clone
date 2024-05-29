import placeData from "../Data/placeDataList"


export default function Places() {
    return (
        <>
            {placeData.map((place) => {
                return (
                    <>
                        <div className='inline-grid m-5'>
                            {/* live && share */}
                            <div className='flex space-x-28 absolute'>
                                <button className='rounded-full bg-slate-300 p-2 w-24'>live</button>
                                <button title="shareButton" className='rounded-full bg-slate-400 p-2 '>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                                    </svg>
                                </button>
                            </div>

                            {/* img & content  */}
                            <img title="imgPlace" className='w-64 h-64 rounded-lg' src='https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE0ODQ2MDI1NTE4MDMzOTQ4MQ%3D%3D/original/c92634d0-4964-439a-905d-b9129af14d34.jpeg?im_w=2560&im_q=highq'></img>
                            <div className='p-1'>
                                <h1 className='text- font-bold'>{place.title}</h1>
                                <p className='font-light text-gray-400 '>{place.description}</p>
                                <p className='font-bold'>{place.guest}</p>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}


