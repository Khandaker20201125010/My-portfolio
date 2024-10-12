import React from 'react';
import { SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='mt-64 '>
            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-52">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold mb-2 mx-16 ">Contact with me</h3>
                        
                        <p className='mx-12 gap-2 flex'> <SiWhatsapp size={20}/> +88 01650257688</p>
                      
                    </div>
                    <div className="text-center md:text-left ">
                        <h3 className="text-xl font-bold mb-2">Follow me</h3>
                        <p className='mt-4'>Contact me on social media</p>
                        <div className="grid grid-flow-col  mt-5 ">
                          
                         
                            <Link to='https://github.com/Khandaker20201125010'>
                            <a className='w-2'>
                            <SiGithub  size={25}/>
                            </a>
                            </Link>
                            <Link to='https://linkedin.com/in/khandaker-istekharul-haque-19815424a'>
                            <a>
                            <FaLinkedin size={25} />
                            </a>
                            </Link>
                           
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </footer>
           
        </div>


    );
};

export default Footer;