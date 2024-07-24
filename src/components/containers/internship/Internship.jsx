import React from "react";
import JobCard from "./JobCard";
import FeatureOfInternship from "./FeatureOfInternship";
const Internship = () => {
    const jobData = [
        {
            title: 'Software development',
            overview: ['Overview', 'DevOps', 'CI/CD','Languages',  'Web Scraping'],
            active : true
          
        },
        {
            title: 'Machine Learning',
            overview: ['Overview', 'Data Preprocessing', 'Model Building', 'Model Training', 'Model Testing'],
            active : false
          
        },
        {
            title: 'Data Science',
            overview: ['Overview', 'Data Analysis', 'Data Visualization', 'Data Interpretation', 'Data Presentation'],
            active : true
          
        },
        {
            title: 'Web Development',
            overview: ['Overview', 'Frontend', 'Backend', 'Full Stack', 'Database'],
            active : true
        },
        {
            title: 'App Development',
            overview: ['Overview', 'Android Development', 'iOS Development', 'Cross Platform Development', 'App Hosting'],
            active : true
        },
        {
            title: 'Cyber Security',
            overview: ['Overview', 'Network Security', 'Web Security', 'Malware Analysis', 'Incident Response'],
            active : false
        }
    ]
  return (
    <div className="internship-container">
      <div className="intership-text-fields">
        <div className="heading1">Internships</div>
        <div className="heading2">Our Internships</div>
        <div className="heading3">
          Our internships are available in a range of fields, including Web
          Development, Machine Learning, Data Science, and more. Interns will
          have the chance to work on real-world projects, collaborate with
          teams, and gain valuable insights into their respective industries.
        </div>
      </div>
      <div className="job-card-container">
        {
            jobData.map((item)=>{
                return(
                    <JobCard title={item.title} overview={item.overview}active={item.active}/>
                )
            })
        }
        </div>
        <div>
            <FeatureOfInternship/>
        </div>
    </div>
  );
};

export default Internship;
