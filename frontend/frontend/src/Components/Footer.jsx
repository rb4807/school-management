import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
        <hr id="social" className='border-white mt-6'/>
        <footer className="bg-gray-800">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
                <p className="text-white mr-4">
                    &copy; 2021 School Name. All rights reserved.
                </p>
                <div className="flex flex-row items-end justify-end space-x-4">
                    <a href="" target="_blank" rel="noopener noreferrer" className="text-white">
                        <FontAwesomeIcon className=' hover:stroke-indigo-600' icon={faFacebook} />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer" className="text-white">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-white">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            </div>
        </footer>
    </>
  );
};

export default Footer;
