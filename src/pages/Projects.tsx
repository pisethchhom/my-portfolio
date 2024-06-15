import React from 'react';

const Projects: React.FC = () => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold">My Projects</h2>
            <ul className="mt-4 space-y-4">
                <li className="p-4 border rounded">
                    <h3 className="text-xl font-semibold">Project 1</h3>
                    <p>Description of project 1.</p>
                </li>
                <li className="p-4 border rounded">
                    <h3 className="text-xl font-semibold">Project 2</h3>
                    <p>Description of project 2.</p>
                </li>
            </ul>
        </div>
    );
};

export default Projects;
