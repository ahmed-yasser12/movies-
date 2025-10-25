import Image from "next/image";
import Movies from "./_components/Movies";
import Tvs from "./_components/Tvs";
import People from "./_components/People";

export default function Home() {
  return <>
  <div>
  <Movies/>
  <Tvs/>
  <People/>
  </div>
  </>;
}
