import landingImage from "../../../assets/icons/Services/ds2.png"
import "./Services.css"
const DataScience = () => {
    return (
        <div className="service-card-Data-science">
            <div className="Data-science-img-container ">
                <img alt="service-img"
                    className="Data-science-img"
                    src={landingImage} />
            </div>
            <div className="service-card-Data-science-detail">
                <h1>Data Analytics</h1>
                <p>A cloud data warehouse is a centralized repository that stores,
                     integrates, and manages large volumes of data from various sources 
                     in a cloud environment. Unlike traditional on-premises data warehouses,
                      cloud data warehouses leverage the resources provided by cloud service
                       providers such as AWS, Google Cloud, or Microsoft Azure. This enables 
                       businesses to store and process data without the need to invest in and manage physical infrastructure.</p>
                <ul className="Data-science-list-container">
                    <div>
                        <li>Data Migration</li>
                        <li>Cost Management</li>
                        <li>Data Governance</li>
                    </div>
                    <div>
                        <li>Scalability</li>
                        <li>Value for Money</li>
                        <li>Scalability</li>
                    </div>
                </ul>
            </div>

        </div>
    )
}
export default DataScience