import Router from "next/router";
import Link from "next/link";

const Layout = () => {
  return (
    <div>
        <Link href={`/home`}></Link>
        <Link href={`/Register`}></Link>
        <Link href={`/Login`}></Link>
    </div>
  )
}

export default Layout