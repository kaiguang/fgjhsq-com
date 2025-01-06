import Image from "next/image";
import poems from "../../public/poems.json";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <pre>{poems.length}</pre>
      <Link href={"/2020-10-19"}>hello</Link>
    </main>
  );
}
