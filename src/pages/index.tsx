import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import ContactForm from '../components/HomepageFeatures/ContactForm'; // Contact form component

import styles from './index.module.css';
import SlideShow from '../components/HomepageFeatures/SlideShow';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        
        <div className="container">
          <h1 className="hero__title  "> <strong>
            Mac Super Abacus Academy!
            </strong>
            </h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
         
          <br />


          <img src="/img/hero-photo.png" alt="" width="300px" />


          <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
            <div style={{
              maxWidth: 'fit-content',
              padding: '0.5rem',
              margin: '1rem',
              borderRadius: '0.5rem',
              background: 'linear-gradient(to right, #7c3aed, #a855f7, #ec4899)' // gradient colors
            }}>
              <strong>
                <p className="hero__subtitle" style={{ margin: 0 }}>
                  {siteConfig.tagline} <br />
                  Transforming Math into a Magical Adventure!
                </p>
              </strong>
            </div>
          </div>





     
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="https://forms.gle/g14KHU1fbXkuWDt6A">
              Admissions Open!!! <br /> Contact Now Using Enquiry Form📝📝📝
            </Link>
          </div>
          <br />
          <br />
          <br />
        </div>
      </header>

      <div className="container">
        <div className={clsx('padding-vert--xl', styles.sectionAlt)}>
          <div className="row">
            <div className="col col--8 col--offset-2">
              <div>
                <img
                  height="20px"
                  src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif"
                  alt="Meet's gif"
                />
                <div id="user-content-toc">
                  <ul style={{ textAlign: 'center' }}>
                    <summary>
                      <h1 style={{ display: 'inline-block' }}>Hi 👋, Super Abacus Team Here</h1>
                    </summary>
                  </ul>
                </div>
                <p>
                  - 🔭 What We Do: We’re all about making math fun with the abacus! From beginner to expert, we’ve got classes for everyone.
                </p>
                <p>
                  - 🌱 Courses Offered: Mental math, abacus training for kids, and problem-solving skills.
                </p>
                <p>
                  - 🌟 Join the Fun: We believe that math should be fun and exciting for everyone—so let's get started today!
                </p>
                <p>
                  - 📫 Feel free to reach out us on <a href="mailto:contact.superabacus@gmail.com">contact.superabacus@gmail.com</a>
                </p>
                <hr />
              </div>
              <h2 className="text--center text-margin--lg">
                <span className="badge badge--primary">Who Are We?</span>
              </h2>
              <h3 className="text--center text-margin-lg">
                A passionate team of <strong>educators, and math enthusiasts</strong> committed to turning math struggles into fun challenges. At Mac Super Abacus Academy, learning happens through play, creativity, and collaboration.
              </h3>
              <p>
                At <strong>Super Abacus Academy,</strong> we don’t just teach math, we make numbers fun! Whether you're a math wizard or just starting out, our classes will have you breezing through calculations like a pro.
              </p>
              <div>
                <h2 className="text--left text-margin--lg ">
                  <span className="badge badge--primary">Our Amazing Courses</span>
                </h2>
         
                <ul>
                  <li><strong>Fun with Abacus:</strong> Learn the basics of the abacus and see math in a whole new light! Perfect for kids and beginners.</li>
                  <li><strong>Mental Math Magic:</strong> Our mental math course is designed to make you a human calculator!</li>
                  <li><strong>Super Brain Games:</strong> Brain games that sharpen your mind and improve focus, memory, and problem-solving skills.</li>
                </ul>
              </div>
              <div>
                <h2 className="text text--right text-margin--lg ">
                  <span className="badge badge--primary">Meet Our Director!</span>
                </h2>
                <ol>
                <li>
  <a href="/achievements/iitm-foundation-level">
    <strong>Mrs. Ashwini Jain:</strong>
  </a> 
  Your friendly neighborhood math teacher with a knack for making abacus lessons fun! 
  The queen of mental math—she’ll show you how to conquer math problems and solve questions in seconds.
</li>

<img src="/img/ProfilePicture.png" alt="Mrs. Ashwini Jain Profile Picture" width="200px" style={{ display: 'block', margin: 'auto' }} />


                </ol>
              </div>
              <div>
                <h2 className="text--left text-margin--lg ">
                  <span className="badge badge--primary">Why Choose Us?</span>
                </h2>
                <ul>
                  <li>Because math doesn’t have to be boring! Every class is filled with fun activities.</li>
                  <li>Highly qualified instructors with a strong focus on mental development.</li>
                </ul>
               </div>
               <h2 className="text text--right text-margin--lg ">
               <span className="badge badge--primary"> What Our Students Say</span>
               </h2>
              <p>
                • I thought math was hard until I joined Mac Super Abacus Academy. Now I love numbers!
                <br />
                <em>– Shruti, 10 years old.</em>
              </p>
              <p>
                • The teachers here make everything so fun! I can do my homework faster now.
                <br />
                <em>– Gaurav, 8 years old.</em>
              </p>
              <img height="20px" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" alt="Meet's gif" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <Layout title="Hello 👋 Super Abacus Academy!" description="A fun place to learn math with Mac Super Abacus Academy">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <ContactForm />
        <SlideShow/>
      </main>
    </Layout>
  );
}































































