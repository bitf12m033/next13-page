import Link from "next/link";

export default function Home({ params }: { params: { products: string } }) {
  return (
    <>
      <h1>{params?.products}</h1>
      <Link href={"/"}>Home</Link>
    </>
  );
}
