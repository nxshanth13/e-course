import React from 'react';
import '../App.css'

const Courses = () => {
  const course_list = [
    {
      category: "Testing",
      title: "Software testing",
      info: 'Learn to test and ensure software quality using manual and automated methods. Master test case creation, defect tracking, and industry tools for reliable applications.',
      duration: "6 hr 40 mins",
      rating: 4.8,
      reviews: "5.8K",
      price: 6000.00,
      imgSrc: 'https://www.fitaacademy.in/includes/assets/img/blog/software-testing.jpg',
    },
    {
      category: "Development",
      title: "Full stack development - Java , python and .Net , Mern stack ",
      info: 'Become a full-stack expert by mastering Java, Python, .NET, and MERN stack. Build dynamic front-end interfaces and robust back-end systems for complete application development.',
      duration: "14 hr 20 mins",
      rating: 4.8,
      reviews: "5.8K",
      price: 30.00,
      imgSrc: 'https://codingbytes.com/wp-content/uploads/2022/03/full-stack-web-development.jpg'

    },
    {
      category: "Data",
      title: "Data science",
      info: 'Explore data analysis, machine learning, and visualization to extract insights. Gain hands-on experience with Python, SQL, and tools like Pandas and TensorFlow.',
      rating: 4.8,
      reviews: "5.8K",
      price: 60.00,
      imgSrc: 'https://cdn.prod.website-files.com/63ccf2f0ea97be12ead278ed/644a18b637053fa3709c5ba2_what-is-data-science.jpg'
    },
    {
      category: "Data",
      title: "Data Analyst",
      info: 'Learn to collect, analyze, and interpret data to drive business decisions. Master Excel, SQL, and visualization tools like Tableau and Power BI.',
      rating: 4.8,
      reviews: "5.8K",
      price: 60.00,
      imgSrc: 'https://www.dbschool.co.uk/wp-content/uploads/2024/02/Data-Analyst.png'
    },
    {
      category: "Design",
      title: "UI/UX Designing",
      info: 'Design user-centered interfaces that deliver seamless experiences. Learn wireframing, prototyping, and usability testing with tools like Figma and Adobe XD.',
      rating: 4.8,
      reviews: "5.8K",
      price: 60.00,
      imgSrc: 'https://new.mobitouch.pl/wp-content/uploads/2023/09/UI-Designera_-Blog-Main.jpg'
    },
    {
      category: "Cloud",
      title: "Aws and Devops",
      info: 'Build scalable cloud solutions and streamline workflows with AWS and DevOps practices. Learn CI/CD, containerization, and cloud deployment.',
      rating: 4.8,
      reviews: "5.8K",
      price: 60.00,
      imgSrc: 'https://assets.community.aws/a/2hS0FCtTQavtnIt861qB5q1nfkd/AWS-D.webp'
    },
    {
      category: "Design",
      title: "Production support",
      info: 'Master the skills to troubleshoot and resolve customer issues. Learn ticketing systems, technical documentation, and effective communication for seamless support.',
      rating: 4.8,
      reviews: "5.8K",
      price: 60.00,
      imgSrc: 'https://staticlearn.shine.com/l/m/images/blog/mobile/technical_support_engineer.webp'
    },
  ];
  return (
    <>
      <div className='c-title'>
        <h1>All Courses</h1>
        <p>Here you can explore all the available courses and pick the one that suits you!</p>
      </div>

      <div className="course-cards">
        {course_list.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.imgSrc} alt={course.title} className="course-image" />
            <div className="course-content">
              <div className="course-header">
                <span className="category">{course.category}</span>
                <p className="rating">⭐ {course.rating} ({course.reviews})</p>
              </div>
              <h3 className="course-title">{course.title}</h3>
              <p className="course-info">{course.info} </p>
              <button className='c-button'>Enroll!</button>
            </div>
          </div>
        ))}
      </div>


    </>
  );
};

export default Courses;
