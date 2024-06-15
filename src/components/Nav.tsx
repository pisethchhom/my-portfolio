import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4 text-white">
            <ul className="flex space-x-4">
                <li>
                    <Link to="/my-portfolio/" className="hover:underline">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/my-portfolio/about" className="hover:underline">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/my-portfolio/projects" className="hover:underline">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="/my-portfolio/contact" className="hover:underline">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
