import IconsList from "../components/iconsList";
import Places from "../components/places";
import TopPage from "../components/topPage";


function UserHomePage() {
    return (
        <>
        {/* the full home user page */}
            <TopPage />
            <IconsList />
            <Places />
        </>
    )
}

export default UserHomePage;