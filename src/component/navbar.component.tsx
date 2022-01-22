import React from 'react';
import { Link } from 'react-router-dom';


const MainNavItem: React.FC = () => {
    return (

        <div className='hidden md:flex items-center space-x-3 ml-4'>
            <Link className="py-2 px-3 text-gray-700" to="home">Home</Link>
            <Link className="py-2 px-3 text-gray-700" to="candidate/2">Candidate</Link>
            <Link className="py-2 px-3 text-gray-700" to="candidate">Openings</Link>
        </div>

    );
}



const Navbar: React.FC = () => {

    return (<div>
        <nav className='mx-auto border bg-gray-200'>
            <div className='flex justify-between px-1 py-1'>
                <div className="flex">
                    <div className=' '>
                        <Link to="/home" className='flex item-center py-1 px-4 text-gray-700 hover:text-gray-900'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                            </svg>
                            <span className='mt-1 font-bold'>Asdf</span>
                        </Link>

                    </div>
                    <MainNavItem />
                </div>
                <div className='hidden md:flex items-center space-x-4 px-1 py-1'>
                    <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                        <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" className="object-cover w-full h-full" alt="avatar" />
                        </div>
                        <h3 className="mx-2 text-sm font-medium text-gray-700 dark:text-gray-200 md:hidden">Khatab wedaa</h3>
                    </button>
                </div>


                {/* mobile button */}
                <div className='md:hidden flex items-center'>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className='hidden'>
                mobile menu
            </div>
        </nav>
    </div>)
};

export default Navbar;