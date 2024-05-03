import Image from "next/image";
import { redirect } from "next/navigation";

export default function HomeHome() {
  // redireccionar
  redirect("/dashboard/counter");

  return (
    <>
      <h1>Hola Mundo</h1>
    </>
  );
}
