import "./Services.css";
import { useState } from 'react';
import { FaArrowTurnDown } from "react-icons/fa6";
import { FaArrowTurnUp } from "react-icons/fa6";
import landingImage from "../../../assets/icons/Services/uiux.png"
const MoreSerices = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const servicesData = [
        {
            mainTitle: "UI / UX",
            // imageUrl: "https://img.freepik.com/free-vector/isometric-tecnology-abstract-background_52683-844.jpg?t=st=1723354111~exp=1723357711~hmac=403cc05e3e19350fa1449fb02badcdc80631ea1514d0cf6420920f1ce7a23da1&w=740",
            imageUrl: landingImage,
            title: "Focus On Easy To Use UI Design",
            description: "Integrate yourself into a harmonious environment and embrace greatness. Easily manage challenges without difficulty. Embrace a life full of meaningful experiences. Find comfort in the simple moments, and enjoy the beauty of life’s small pleasures."
        }, {
            mainTitle: "Web Apps",
            imageUrl: "https://img.freepik.com/free-vector/isometric-tecnology-abstract-background_52683-844.jpg?t=st=1723354111~exp=1723357711~hmac=403cc05e3e19350fa1449fb02badcdc80631ea1514d0cf6420920f1ce7a23da1&w=740",
            title: "Web Development",
            description: "We build high-performance websites and applications that meet your specific needs.",
        },
        {
            mainTitle: "SEO Optimization",
            imageUrl: "https://img.freepik.com/free-vector/isometric-tecnology-abstract-background_52683-844.jpg?t=st=1723354111~exp=1723357711~hmac=403cc05e3e19350fa1449fb02badcdc80631ea1514d0cf6420920f1ce7a23da1&w=740",
            title: "Boost Online Visibility with SEO",
            description: "Enhance your online presence with strategic precision. Navigate the digital landscape effortlessly, driving traffic and capturing attention. Elevate your website’s visibility and reach, connecting with your audience in meaningful ways. Experience the power of optimized content, and watch your business grow organically.",
        },
    ];

    const handleClick = (index) => {

        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            {servicesData.map((card, index) => (
                <div key={index} className="BG-total">
                    <div onClick={() => handleClick(index)} className="Header">
                        <h1>{card.mainTitle}</h1>
                        {activeIndex === index ? (
                            <FaArrowTurnUp style={{ height: "20px", width: "20px", color: "#878580" }} />
                        ) : (
                            <FaArrowTurnDown style={{ height: "20px", width: "20px", color: "#878580" }} />
                        )}
                    </div>
                    {activeIndex === index && (
                        <div className="accordion-first-active">
                            <img
                                src={card.imageUrl}
                                className="accordion-img-first"
                                alt={card.title}
                            />
                            <div className="description-container">
                                <h1>{card.title}</h1>
                                <p>{card.description}</p>
                            </div>
                        </div>
                    )}
                    <hr className="divider" />
                </div>
            ))}
        </div>
    );
};

export default MoreSerices;