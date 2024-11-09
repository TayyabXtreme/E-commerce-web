import Link from "next/link";

export default function Header() {
    const menuList=[
        {
            name:"Home",
            link:"/"
        },
        {
            name:"About Us",
            link:"/about-us"
        },
        {
            name:"Contact Us",
            link:"/contact-us"
        }
    ]
  return (
  <nav className="py-4 px-20 border-b flex items-center justify-between">
    <img src="/logo.avif" alt="logo" 
    className="h-9"
    />
    <div className="flex items-center gap-10 font-semibold">
        {
            menuList.map((item,index)=>(
                <Link href={item.link} key={index}>
                    {item.name}
                </Link>
            ))
        }
    </div>
    <Link href="/login">
    <button className="bg-blue-600 text-white px-4 py-2 rounded-full">Login</button>
    </Link>

    
  </nav>
);
}