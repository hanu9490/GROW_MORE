import "./About.css"
import explain from "../../../assets/icons/About/explain.png"
import history from "../../../assets/icons/About/history.png"
import vision from "../../../assets/icons/About/vision.png"
import support from "../../../assets/icons/About/support.png"
import historyimg from "../../../assets/icons/About/history-img.png"
import visionimg from "../../../assets/icons/About/vision-img.png"
import supportimg from "../../../assets/icons/About/support-img.png"
import carousel1 from "../../../assets/icons/About/carousel1.png"
import tick from "../../../assets/icons/About/tick.png"
import { useEffect, useState } from "react";
const LandingAbout = () => {
    const carouselData = [
        {
            imageSrc: carousel1,
        },
        {
            imageSrc: carousel1,

        },
        {
            imageSrc: carousel1,
        },
        // Add more images with titles and descriptions here
    ];

    const values = [
        {
            id: 1,
            imageSrc: tick,
            title: 'We Are',
            description: 'Top of cutting-edge technology trends & providing great customer experience for businesses and branding.',
        },
        {
            id: 2,
            imageSrc: tick,
            title: 'We Deep Dive',
            description: 'Our platform is tailor-made for developers, providing a powerful and easy-to-use solution.',
        },
        {
            id: 3,
            imageSrc: tick,
            title: 'We Take',
            description: 'With our tools, you can streamline your development process and achieve better outcomes.',
        },
        {
            id: 4,
            imageSrc: tick,
            title: 'We Value',
            description: 'We offer a range of features that enable you to create robust applications quickly and efficiently.',
        },
        {
            id: 5,
            imageSrc: tick,
            title: 'We Believe',
            description: 'Recognizes exceptional websites with outstanding visual appeal and technical functionality.',
        },
        {
            id: 6,
            imageSrc: tick,
            title: 'We Say “We”',
            description: 'The best in digital creativity and innovation. Internationally accolade, showcasing excellence.',
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Slide every 3 seconds

        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, [carouselData.length]);

    return (
        <div className="About-background">
            <div className="About-lander" >
                <div className="About-lander-overlayer">
                    <h1>GROW MORE</h1>
                    <p>ABOUT US</p>
                </div>
            </div>
            <div className="About-description">
                <div className="About-description-left">
                    <h1>
                        Our technology allows you to offer latest software to your possible customers!
                    </h1>
                    <p>GrowMore has been helping organizations throughout the World to manage their
                        IT with our unique approach to technology management and consultancy solutions.
                        As one of the world's largest ITService Providers and IT support staff are ready to help.</p>
                    <button className="About-description-left-button">Know More</button>
                </div>
                <div className="About-description-right">
                    <img src={explain} alt="Background" className="background-image" />
                    <img src={explain} alt="Foreground" className="foreground-image" />
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", marginTop: "10%" }}>
                <div className="card-mission">
                    <div className="card-image-mission">
                        <img src={historyimg} alt="Card" />
                        <div className="floating-icon-mission">
                            <img src={history} style={{ height: "40px", width: "40px" }} />{/* Replace 'FaIconName' with the icon you want */}
                        </div>
                    </div>
                    <div className="card-content-mission">
                        <h2 className="card-title-mission">Company History</h2>
                        <p className="card-description-mission">
                            On the other hand denounce with righteous indignation and dislike
                            men who are so beguiled and demoralized by the charms pleasure</p>
                    </div>
                </div>
                <div className="card-mission">
                    <div className="card-image-mission">
                        <img src={visionimg} alt="Card" />
                        <div className="floating-icon-mission">
                            <img src={vision} style={{ height: "40px", width: "40px" }} />{/* Replace 'FaIconName' with the icon you want */}
                        </div>
                    </div>
                    <div className="card-content-mission">
                        <h2 className="card-title-mission">Mission & Vision</h2>
                        <p className="card-description-mission">
                            On the other hand denounce with righteous indignation and
                            dislike men who are so beguiled
                            and demoralized by the charms pleasure</p>
                    </div>
                </div>
                <div className="card-mission">
                    <div className="card-image-mission">
                        <img src={supportimg} alt="Card" />
                        <div className="floating-icon-mission">
                            <img src={support} style={{ height: "40px", width: "40px" }} />{/* Replace 'FaIconName' with the icon you want */}
                        </div>
                    </div>
                    <div className="card-content-mission">
                        <h2 className="card-title-mission">Online Support</h2>
                        <p className="card-description-mission">
                            On the other hand denounce with righteous indignation and dislike
                            men who are so beguiled and demoralized by the charms pleasure</p>
                    </div>
                </div>
            </div>
            <div className="plan-container">
                <h1 className="have-plan-title">Have a project in mind? Let's get to work.</h1>
                <button className="plan-button">Contact Us</button>
                <h1 className="benifit-title">Great Benefits for Working With Us</h1>
                <p className="benifit-para">The best in digital creativity and innovation.
                    Internationally accolade, showcasing excellence in design.</p>
            </div>
            <div style={{ marging: "20px" }}>
                <div className="carousel-container">
                    {carouselData.map((slide, index) => (
                        <div
                            key={index}
                            className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
                        >
                            <img src={slide.imageSrc} alt={slide.title} className="carousel-image" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="what-we-provide">
                <h1>We Live by Powerful Values</h1>
                <div className="value-container">

                    {values.map((each) => (
                        <div className="value-container-series" key={each.id}>
                            <div className="img-container">
                                <img src={each.imageSrc} alt="values" className="value-image" />
                            </div>
                            <h1>{each.title}</h1>
                            <p>{each.description}</p>
                        </div>

                    ))}
                </div>

            </div>
        </div>

    );
};

export default LandingAbout;
