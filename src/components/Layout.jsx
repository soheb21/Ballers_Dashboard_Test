import React, { useState } from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import SideBar from './SideBar';


const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>

            <div className='h-screen relative text-center gap-2 p-2 w-full bg-primary-bg grid grid-cols-1 md:grid-cols-4 grid-rows-[50px_auto_30px] overflow-auto'>

                <header className="col-span-3">
                    <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
                </header>


                <aside className={`z-10 col-span-1 row-span-full absolute ${isOpen ? 'left-1' : '-left-96'} transition-all md:static h-full w-1/2 md:w-full overflow-hidden `}>
                    <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
                </aside>

                <main className="col-span-3">
                    {children}
                </main>


                <footer className="col-span-3">
                    <Footer />
                </footer>

            </div>
        </div>
    )
}

export default Layout