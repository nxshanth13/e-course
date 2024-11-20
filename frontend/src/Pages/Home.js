import body from '../images/home.jpg';
import about from '../images/image1.png';
import arrow from '../images/arrow.png';
import { FaChalkboardTeacher, FaBriefcase, FaLightbulb } from 'react-icons/fa';
import '../App.css';
import { FaUserTie, FaClock, FaBook, FaDollarSign } from 'react-icons/fa';



const Home = () => {
  const featuredCourses = [
    {
      category: "Development",
      title: "Full stack development - Java , python and .Net , Mern stack",
      lessons: 12,
      duration: "6 hr 40 mins",
      rating: 4.8,
      reviews: "5.8K",
      price: 6000.00,
      imgSrc: 'https://codingbytes.com/wp-content/uploads/2022/03/full-stack-web-development.jpg',
    },
    {
      category: "Data",
      title: "Data Science",
      lessons: 12,
      duration: "14 hr 20 mins",
      rating: 4.8,
      reviews: "5.8K",
      price: 30.00,
      imgSrc: 'https://cdn.prod.website-files.com/63ccf2f0ea97be12ead278ed/644a18b637053fa3709c5ba2_what-is-data-science.jpg'

    },
    {
      category: "Design",
      title: "UI/UX Designing",
      lessons: 12,
      duration: "5 hr 45 mins",
      rating: 4.8,
      reviews: "5.8K",
      price: 60.00,
      imgSrc: 'https://new.mobitouch.pl/wp-content/uploads/2023/09/UI-Designera_-Blog-Main.jpg'
    },
  ];

  const features = [
    {
      icon: <FaUserTie style={{ color: "#fff", fontSize: "24px" }} />,
      title: "Experienced mentor",
      description: "All the mentors are very experienced in the industry, get interesting experiences by studying here.",
      color: "#0000FF",
      borderColor: "#0000FF",
    },
    {
      icon: <FaClock style={{ color: "#fff", fontSize: "24px" }} />,
      title: "Personalized mentor",
      description: "Experience tailored guidance and mentorship with our one-to-one tutoring and mentoring sessions.",
      color: "#FF007F",
      borderColor: "#FF007F",
    },
    {
      icon: <FaBook style={{ color: "#fff", fontSize: "24px" }} />,
      title: "Free E-Book Everyweek",
      description: "Every week you will get a free e-book that you can read according to your interests.",
      color: "#FFA500",
      borderColor: "#FFA500",
    },
    {
      icon: <FaDollarSign style={{ color: "#fff", fontSize: "24px" }} />,
      title: "Affordable Prices",
      description: "Studying here is very affordable, and you will get features that are very helpful for your learning process.",
      color: "#00FF00",
      borderColor: "#00FF00",
    },
  ];

  return (
    <>
      <section className="hero-section">
        <div className="text-content">
          <h1>
            Up Your <span className="highlight">Skills</span> <br />
            To <span className="highlight">Advance</span> Your <span className="highlight"><br />Career</span> Path
          </h1>

          <p className="description">
            Unlock your potential with our affordable, flexible, and hands-on learning experience designed to boost your skills and career in Information Technology.
          </p>

          <div className="button-group">
            <button className="get-started">Get Started</button>
            <button className="know-more">Know More</button>
          </div>

          <div className="tags">
            <span className="tag">
              <FaChalkboardTeacher style={{ color: "#FFD700" }} />
              Public Speaking
            </span>
            <span className="tag">
              <FaBriefcase style={{ color: "orange" }} />
              Career-Oriented
            </span>
            <span className="tag">
              <FaLightbulb style={{ color: "#B4708D" }} />
              Creative Thinking
            </span>
          </div>
        </div>

        <div className="image-content">
          <img src={body} alt="Student" className="profile-image" />
        </div>
      </section>

      <section className="about-section">
        <div className="abt-left">
          <img src={about} alt="about" />
        </div>
        <div className="abt-right">
          <p className="about-us" style={{ color: '#5a5aff' }}>About us</p>
          <h1>Why we excel at what we do</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />

            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="features-list">
            <div className="feature-item">
              <img src={arrow} alt="arrow icon" className="feature-icon" />
              Ease of Scalability
            </div>
            <div className="feature-item">
              <img src={arrow} alt="arrow icon" className="feature-icon" />
              Instant Impact
            </div>
            <div className="feature-item">
              <img src={arrow} alt="arrow icon" className="feature-icon" />
              Experience
            </div>
            <div className="feature-item">
              <img src={arrow} alt="arrow icon" className="feature-icon" />
              Time Zones
            </div>
            <div className="feature-item">
              <img src={arrow} alt="arrow icon" className="feature-icon" />
              Full Flexibility
            </div>
            <div className="feature-item">
              <img src={arrow} alt="arrow icon" className="feature-icon" />
              Proactive Support
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className='works'>
        <div className="works-container">
          <div className="works-cont">
            <p className="works-title">How it works</p>
            <h1>Your Learning Journey<br />Made Easy</h1>
            <p className="works-description">
              Discover, Enroll, Learn: Unlock your creativity with ease. Dive into engaging lessons led by experts, access materials,
              participate in activities, and receive personalized feedback. Whether beginner or experienced, we provide the tools for your
              writing journey.
            </p>
          </div>
        </div>

        <div className="steps-section">
          <div className="step-item">
            <div className="step-header">
              <div className="step-number">01</div>
              <div className="dotted-line"></div>
            </div>
            <h3>Choose Your Course</h3>
            <p>
              Select Your Course, Dive into expert-led lessons, access materials, and
              receive personalized feedback for your writing journey.
            </p>
          </div>
          <div className="step-item">
            <div className="step-header">
              <div className="step-number">02</div>
              <div className="dotted-line"></div>
            </div>
            <h3>Sign Up and Pay</h3>
            <p>
              Secure Your Spot: Join our community by signing up and easily pay for your
              selected courses, unlocking a world of writing possibilities.
            </p>
          </div>
          <div className="step-item">
            <div className="step-header">
              <div className="step-number">03</div>
              <div className="dotted-line"></div>
            </div>
            <h3>Learn and Engage</h3>
            <p>
              Immerse yourself in interactive lessons and activities, fostering your
              writing skills and engagement with the craft.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="courses">
        <div className="courses-intro">
          <p>Featured Courses</p>
          <h1>Browse our popular courses</h1>
          <p>
            Discover our curated selection of featured courses, meticulously crafted to provide you with the essential skills and
            knowledge to excel. With expert instruction and interactive learning experiences, our featured courses offer unparalleled
            opportunities to expand your creative horizons and transform your passion for writing into tangible success.
          </p>
        </div>
        <div className="course-cards">
          {featuredCourses.map((course, index) => (
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


        <div><button className='all-courses'>Explore all courses</button></div>
      </section>

      <section className="why">
        <div className="why-header">
          <p className="why-subtitle">Why Choose Us</p>
          <h1 className="why-title">
            The Benefits You Get When<br />
            You Study at Shivinntech
          </h1>
        </div>

        <div className="features-container">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}
              style={{
                borderTop: `4px solid ${feature.borderColor}`,
              }}>
              <div
                className="feature-icon"
                style={{ backgroundColor: feature.color }}
              >
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='contact-us'>
        <div className='cont-left'>
          <p>Contact us</p>
          <h1>Get in touch with us today</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. </p>
        </div>

        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="First Name" className="form-input" />
              <input type="text" placeholder="Last Name" className="form-input" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Phone Number" className="form-input" />
              <input type="email" placeholder="Email" className="form-input" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Subject" className="form-input" />
            </div>
            <div className="form-row">
              <textarea placeholder="Message" className="form-textarea"></textarea>
            </div>
            <div className="form-row">
              <button type="submit" className="form-button">
                Send a Message <span className="arrow">↗</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}


export default Home