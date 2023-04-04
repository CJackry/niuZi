import { Inter } from 'next/font/google'
import Header from "@/src/components/Header";
import Search from "@/src/components/Search";
import ListContainer from "../components/ListContainer";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Header />
        <Search />
        <ListContainer />
    </div>
  )
}
