import React from 'react';
import './Wings.css';
import { useSpring, animated } from '@react-spring/web';

const Wings = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={props} className="wings">
      {/* <img src="/images/wings.png" alt="Wings" className="wings-image" /> */}
      <section className="wing-section">
        <div className="wing-header">Activities and Events</div>
        <div className="wing-details">
          <ul>
            <li>Arranging some fun-filled workshops, Activities, Seminars, Quizzes, site visits, etc.</li>
            <li>Talks from Industry Experts which give us a platform to learn new concepts from people who are well-versed in their respective fields. This gives us an idea of how the industry works.</li>
            <li>Planning the activities with the respective mini-courses so there is a strong grip on their respective courses.</li>
            <li>To organize the talk to bring awareness to the essentials of learning on a new platforms.</li>
          </ul>
          <b>HEAD: Abhishek Saraff</b>
        </div>
      </section>
      <section className="wing-section">
        <div className="wing-header">Industrial Connect and People Operations</div>
        <div className="wing-details">
          <ul>
            <li>To establish collaborations with industries for technical learning and experience.</li>
            <li>To have innovation in learning and gain practical knowledge.</li>
            <li>To enhance healthy relationships amongst the wings as well as between members and the core committee.</li>
            <li>Strive to enhance experience and values among all the members of the chapter.</li>
            <li>To maintain a proper documentation and record of all the activities performed in the Chapter.</li>
          </ul>
          <b>HEAD: Adarsh Srivastava</b><br></br><br></br>
          <b>HEAD: Poorna Chandra K S</b>
        </div>
      </section>
      <section className="wing-section">
        <div className="wing-header">Research and Development</div>
        <div className="wing-details">
          <ul>
            <li>Understanding the methods of Research Study mainly through Literature Reviews and Survey.</li>
            <li>Motivating them to write a short description based on their interpretation, understanding and conclusions by referring to various journals.</li>
            <li>Discussions and Brainstorming sessions on topics chosen</li>
            <li>Later on Guiding them on how to write a Research Paper by considering various aspects like choosing a specific topic, making an outline and In-Depth study through available materials.</li>
          </ul>
          <b>HEAD: Yashwanth R</b>
        </div>
      </section>
      <section className="wing-section">
        <div className="wing-header">Projects</div>
        <div className="wing-details">
          <ul>
            <li>Mainly focuses on Project-based learning which is a student-centered approach to education . PBL shifts away from a teacher-centered model and encourages students to learn by doing.</li>
            <li>Allowing them to do the models and prototypes on their projects and engaging them in workshops, seminars, and conducting research initiatives on their selected topics. Conducting competitions</li>
          </ul>
          <b>HEAD: Abhishek S</b><br></br><br></br>
          <b>HEAD: Chinmaya Nadig</b>
        </div>
      </section>
      <section className="wing-section">
        <div className="wing-header">Social Media</div>
        <div className="wing-details">
          <ul>
            <li>The social media wing performs by disseminating information via all available platforms.</li>
            <li>Prepare fashionable posters, artwork, graphics, and other media content, we attempt to keep your eyes glued to the screens.</li>
            <li>Building a network through social media accounts like Instagram, LinkedIn, Facebook and Twitter.</li>
            <li>Regular updates and posting of all the events and activities in these social media handles, exchange information, and ideate in virtual communities and networks. </li>
          </ul>
          <b>HEAD: Gayathri V</b>
        </div>
      </section>
      <section className="wing-section">
        <div className="wing-header">Women Empowerment</div>
        <div className="wing-details">
          <ul>
            <li>Promoting a sense of self-worth and ability of Women to determine their own choices.</li>
            <li>To educate about their right to influence social change for themselves and others.</li>
            <li>Awareness about proper sanitation and Psychological balance of Women.</li>
            <li>Providing Technical Education and conducting various activities to improvise their skills.</li>
          </ul>
          <b>HEAD: Nikhitha Sunil</b>
        </div>
      </section>
    </animated.div>
  );
};

export default Wings;
