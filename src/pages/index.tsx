import Search from "@/src/components/Search";
import ListContainer from "../components/ListContainer";
import SecKill from "@/src/components/SecKill";
import VHome from "../components/VHome";

export default function Home() {
    return (
        <div>
            <VHome>
                <Search/>
                <ListContainer/>
                <SecKill/>
            </VHome>

        </div>
    )
}
