import iconDataList from "../Data/iconDataList"

export default function IconsList() {

    return (
        <>
            {iconDataList.map((icon) => {
                return (
                    <>
                        <div className='p-6 inline-grid'>
                            <div>{icon.src}</div>
                            <h1>{icon.name}</h1>
                        </div>
                    </>
                )
            })}
        </>
    )
}