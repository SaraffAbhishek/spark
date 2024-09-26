import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Primary Sections */}
      <section className="primary-section vision">
        <div className="section-content">
          <div className="section-body">
            <h2>Vision</h2>
            <p>Believe in studying through projects and activities for renewing knowledge.</p>
            <img src="/images/dean.jpg" alt="Vision" className="section-image" />
          </div>
        </div>
      </section>

      <section className="primary-section mission reverse">
        <div className="section-content">
          <div className="section-body">
            <img src="/images/dean.jpg" alt="Mission" className="section-image" />
            <div className="text-content">
              <h2>Mission</h2>
              <p>Aim to enrich and enhance our community through technical and cultural diversity, curiosity, and the overall development of engineering students. 
                Improving the educational experience beyond classroom walls and enhancing our ethical values. 
                Innovations by out-of-the-box thinking.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="primary-section about-chapter">
        <div className="section-content">
          <div className="section-body">
            <h2>About the Chapter</h2>
            <p>RV College aims in holistic development of the individual and shapes the individual's personality with good values and ethics. It aims at providing quality education and through this chapter it promises to give a practical oriented learning platform to enhance their knowledge. The IUCEExRVCE students chapter aims to provide an out of the box experience, compared to a conventional classroom experience. We have specially handpicked about 100-120 students and formed a separate class named SPARK where they not only learn their regular curriculum but also have a few different experiences like mini courses and working towards the SDGs(Sustainable development goals) and working towards making the society a better and sustainable place. We hope to cultivate leadership qualities and social responsibility among engineers to work towards a broader spectrum of the society by helping in enriching the prosperity of the environment and the world. We know that the main way we will be able to cultivate this habit is through a practical approach towards these problems along with our unique ideas and solutions for it, hence we encourage students to take up projects that will be beneficial to the society and work upon them in their self learning topics as well as curriculum. This way we also encourage them to take part in competitions and present their idea by which they will learn about the corrections and developments they can do for their projects.</p>
            <img src="/images/dean.jpg" alt="About the Chapter" className="section-image" />
          </div>
        </div>
      </section>

      <section className="primary-section about-logo reverse">
        <div className="section-content">
          <div className="section-body">
            <img src="/images/dean.jpg" alt="About the Logo" className="section-image" />
            <div className="text-content">
              <h2>About our Logo</h2>
              <p>The logo of the student chapter signifies how we as humans started off with small milestones in technology and to where we have come till now, the transformation of a hand holding a light bulb till using the available technology and tools (the human hand on the top and the bionic arm at the bottom)we like to move a step ahead making our planet a better place to live. Through this logo we like to spread the awareness of connecting globally across the world to contribute ourselves in building a sustainable planet through the initiation of this student chapter. And even after this drastic and huge development in the technology, we still have concern about the nature around us and the living beings within this nature and through measures like SDGs we aspire to create a balance and make a difference. Hence, 'Changing the World'  little by little...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Sections */}
      <section className="secondary-section dignitaries-messages">
        <div className="section-content">
          <div className="section-body">
            <h2>Dignitaries Messages</h2>
          </div>
        </div>
      </section>

      <section className="secondary-section principal-message reverse">
        <div className="section-content">
          <div className="section-body">
            <img src="/images/dean.jpg" alt="Principal's Message" className="section-image" />
            <div className="text-content">
              <h2>Principal's Message</h2>
              <p>Technical education in the country is seeing a sea change post covid and after the implementation of NEP-2020. The curriculum design has been revised very frequently keeping in mind. The fundamental principles of OBE with a focus on Experiential Learning, the interdisciplinary nature of courses, and integrating liberal arts with science and technology. IUCEE is hand holding and mentoring our institution since one decade on academic innovation in technology, courses on the latest technological trends, and understanding the Learning styles of students. Many faculty have trained in various courses and methodology of teaching students.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="secondary-section vice-principal-message">
        <div className="section-content">
          <div className="section-body">
            <h2>Vice Principal's Message</h2>
            <p>STUDY THROUGH PROJECTS and ACTIVITY for RENEWING KNOWLEDGE (SPARK) symbolizes the new dimension towards the learning methodology. This probject based learning hones the critical thinking, innovative ideas, team work, good communication skills along with soft skills which are the need of the hour today. RVCE had a pilot project of SPARK last year which was taken in good spirit and enthusiasm by the students and faculty. I believe that the outcome of these methods of learning would be measurable and more visible.</p>
            <img src="/images/dean.jpg" alt="Vice Principal's Message" className="section-image" />
          </div>
        </div>
      </section>

      <section className="secondary-section dean-academics-message reverse">
        <div className="section-content">
          <div className="section-body">
            <img src="/images/dean.jpg" alt="Dean Academics Message" className="section-image" />
            <div className="text-content">
              <h2>Dean Academics Message</h2>
              <p>RV College of Engineering is always ahead of the curve in implementing new methods of teaching-learning so that our students gets the best. One such initiative is STUDY THROUGH PROJECTS and ACTIVITY for RENEWING KNOWLEDGE (SPARK). This concept of project-based learning was introduced last year as a pilot project for a set of first year students. This kindled the creative and critical thinking amongst students, made them more interactive and exhibited innovative solutions to problems. We hope that this methodology shall ensure sustained growth in the learning curve of the students. </p>
            </div>
          </div>
        </div>
      </section>

      <section className="secondary-section dean-student-affairs-message">
        <div className="section-content">
          <div className="section-body">
            <h2>Dean Student Affairs Message</h2>
            <p>Students must read, write, discuss, solve problems, and engage in higher-order thinking such as analysis, synthesis, and assessment...</p>
            <img src="/images/dean.jpg" alt="Dean Student Affairs Message" className="section-image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;