import landingImage from "../../../assets/icons/Services/mobile.png"
import "./Services.css"
const MobileApplication = () => {
    return (
        <div className="service-card-Mobile-Application">
            <div className="service-card-Mobile-Application-detail">
                <h1>Mobile Application</h1>
                <p>In today's fast-paced digital world, having a mobile
                    application is essential for businesses looking to
                    connect with their customers on a deeper level. Our
                    mobile application services are designed to create powerful,
                    user-friendly apps that cater to the unique needs
                    of your customers, driving engagement, loyalty, and satisfaction.</p>
                <ul className="Mobile-Application-list-container">
                    <div>
                        <li>Cross-Platform Compatibility</li>
                        <li>Customizable Features</li>
                        <li>High Performance</li>
                    </div>
                    <div>
                        <li>Robust Security</li>
                        <li>Scalability</li>
                        <li>Push Notifications</li>
                    </div>
                </ul>
            </div>
            <div className="Mobile-Application-img-container">
                <img alt="service-img"
                    className="Mobile-Application-img"
                    src={landingImage} />
            </div>
        </div>
    )
}
export default MobileApplication