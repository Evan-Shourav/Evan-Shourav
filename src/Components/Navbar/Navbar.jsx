import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav className="py-[20px] bg-[#697565] px-[50px]">
         <div className="menu_row flex justify-between">
            <div className="logo w-[40px]"><img src="https://i.pinimg.com/originals/3b/2b/68/3b2b688987bfdcb685e3383d99a4212f.png" /></div>
            <div className="menu">
                <ul className="flex gap-5">
                    <li><a className="text-2xl font-semibold text-black" href="/">Home</a></li>
                    <li><a className="text-2xl font-semibold text-black" href="/about">About</a></li>
                    <li><a className="text-2xl font-semibold text-black" href="/blog">Blog</a></li>
                    <li><a className="text-2xl font-semibold text-black" href="/help">Help</a></li>
                </ul>
            </div>
         </div>
      </nav>
    </>
  )
}

export default Navbar