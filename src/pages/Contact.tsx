import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold">Contact Me</h2>
            <form className="mt-4 space-y-4">
                <div>
                    <label className="block">Name</label>
                    <input type="text" className="border p-2 w-full" />
                </div>
                <div>
                    <label className="block">Email</label>
                    <input type="email" className="border p-2 w-full" />
                </div>
                <div>
                    <label className="block">Message</label>
                    <textarea className="border p-2 w-full" rows={4}></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Send
                </button>
            </form>
        </div>
    );
};

export default Contact;
