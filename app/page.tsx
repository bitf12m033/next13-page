import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <Link href={"/about"}>About</Link>
      <br />
      <Link href={"/sku-123"}>Product 1</Link>
      <br />
      <Link href={"/sku-124"}>Product 2</Link>
      <br />
    </>
  );
}
