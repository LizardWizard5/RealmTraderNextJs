import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 ">
            <div className="container mx-auto text-center">
                <div className="mb-4">
                    <h2 className="text-lg font-semibold">Links</h2>
                    <ul className="list-none">
                        <li><a href="#" className="text-blue-400 hover:underline">Link 1</a></li>
                        <li><a href="#" className="text-blue-400 hover:underline">Link 2</a></li>
                        <li><a href="#" className="text-blue-400 hover:underline">Link 3</a></li>
                        <li><a href="#" className="text-blue-400 hover:underline">Link 4</a></li>
                    </ul>
                </div>
                <p className="text-sm">
                    Made with <span className="text-red-500">❤</span> for ROTMG and Next.js
                </p>
            </div>
        </footer>
    );
};

export default Footer;