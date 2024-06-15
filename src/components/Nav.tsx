import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4 text-white">
            <ul className="flex space-x-4">
                <li>
                    <Link to="/" className="hover:underline">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="hover:underline">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/projects" className="hover:underline">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="hover:underline">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
