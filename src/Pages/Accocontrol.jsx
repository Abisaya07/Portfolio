import React from 'react';
import { useState } from 'react';
import styles from "./Accordian.module.css"; // Corrected import statement
import Accordian from './Accordian';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';

function Accocontrol() {
    const [list, setList] = useState([
        {
            question: 'How do I start creating my resume?',
            answer: 'To start creating your resume, simply sign up or log in to your account. Then, choose a template that suits your style and profession to begin editing.',
            active: 0
        },
        {
            question: 'Can I download my resume for free?',
            answer: 'Yes, you can download a basic version of your resume for free. However, to access premium features and download options, you may need to upgrade to a paid plan.',
        },
        {
            question: 'Can I share my resume online?',
            answer: 'Yes, you can share your resume online by generating a shareable link or downloading it as a PDF and sharing it through email or social media.',
        },
        {
            question: 'What file formats can I download my resume in?',
            answer: 'You can download your resume in PDF, DOCX, or TXT formats, depending on your preference and the application requirements.',
        },
        {
            question: 'Do you offer customer support?',
            answer: 'Yes, we offer customer support via email or live chat. Our support team is available to assist you with any questions or issues you may have.',
        }
    ]);

    return (
        <div>
            <NavBar/>
            <h1 className="bg-bg-indigo-900 text-white text-5xl text-center py-16" style={{ color: '#fff' }} contentEditable="true">FAQ</h1>
            <h6 className="bg-bg-indigo-900 text-white text-3xl text-center py-2" style={{ color: '#fff' }} data-text="Feel Free to solve your queries....">
                Feel Free to solve your queries
            </h6>
            <div className="bg-bg-indigo-900 h-screen flex justify-center items-center">
                <div className="list">
                    {/* begin item */}
                    {list.map((item, key) => (
                        <Accordian key={key} datas={item} />
                    ))}
                    {/* end item */}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Accocontrol;
