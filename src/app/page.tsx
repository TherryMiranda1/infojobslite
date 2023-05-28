import Navbar from "./components/Layout/Navbar";
import { ListOfOffers } from "./views/ListOfOffers";

export default function Home() {

  return (
      <main>
        <Navbar/>
        <ListOfOffers />
      </main>
  );
}
