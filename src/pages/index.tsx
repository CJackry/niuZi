import Search from "../views/Index/Search";
import ListContainer from "../views/Index/ListContainer";
import SecKill from "../views/Index/SecKill";
import VHome from "../components/VHome";

export default function Index() {
    return (
        <div>
                <Search/>
                <ListContainer/>
                <SecKill/>
        </div>
    )
}
