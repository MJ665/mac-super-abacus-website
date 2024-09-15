import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import ContactForm from '../components/HomepageFeatures/ContactForm'; // Contact form component

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Welcome to Mac Super Abacus Academy!</h1>
          <p className="hero__subtitle">
            {siteConfig.tagline} <br />
            Transforming Math into a Magical Adventure!
          </p>
          <img src="/img/meets-photo.png" alt="" srcset="" width="300px" />
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs/intro">
              💾 🖥️ Start Reading 📂 💻
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
                      <h1 style={{ display: 'inline-block' }}>Hi 👋, I'm Meet</h1>
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
                  <span className="badge badge--primary">Meet the Masterminds!</span>
                </h2>
                <ol>
                  <li><a href="/achievements/iitm-foundation-level"><strong>Mr. Mac:</strong></a> Your friendly neighborhood math genius with a knack for making abacus lessons fun!</li>
                  <li><a href="/achievements/tcet-open-source"><strong>Miss Addie:</strong></a> The queen of mental math—she’ll show you how to conquer math problems.</li>
                  <li><a href="/achievements/completed-certificates"><strong>Professor Calc:</strong></a> The math wizard who can solve any equation in seconds!</li>
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
                <img src="https://holopin.me/mj123" alt="An image of Holopin badges" />
              </div>
              <h3>What Our Students Say</h3>
              <p>
                • I thought math was hard until I joined Mac Super Abacus Academy. Now I love numbers!
                <br />
                <em>– Aiden, 10 years old.</em>
              </p>
              <p>
                • The teachers here make everything so fun! I can do my homework faster now.
                <br />
                <em>– Mia, 8 years old.</em>
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
      </main>
    </Layout>
  );
}








































































// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
// import Heading from '@theme/Heading';

// import styles from './index.module.css';











// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
// <>
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
//         <h1 className="hero__title">Welcome to Mac Super Abacus Academy!</h1>
//         <p className="hero__subtitle">{siteConfig.tagline} <br/>Transforming Math into a Magical Adventure!</p>
//         <img src="/img/meets-photo.png" alt="" srcset="" width="300px"/>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             💾 🖥️ Start Reading 📂  💻
//           </Link>
//         </div>
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       </div>
//     </header>





// <div className="container">
//   <div className={clsx("padding-vert--xl",styles.sectionAlt)}>
//     <div className="container">
//       <div className="row">
//     <div className="col col--8 col--offset-2">

//     <div>
//       <img height={"20px"} src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" alt="Meet's gif" />

//       <div id="user-content-toc">
//         <ul style={{textAlign: "center"}}>
//           <summary><h1 style={{display: "inline-block"}}>Hi 👋, I'm Meet</h1></summary>
//         </ul>
//       </div>


//       <p>
//         - 🔭 What We Do: We’re all about making math fun with the abacus! From beginner to expert, we’ve got classes for everyone.
//       </p>

//       <p>
//         - 🌱 Courses Offered: Mental math, abacus training for kids, and problem-solving skills.
//       </p>

//       <p>
//         - 🌟 Join the Fun: We believe that math should be fun and exciting for everyone—so let's get started today!
//       </p>


//       <p>
//         - 📫 Feel free to reach out us on <a href="mailto:contact.superabacus@gmail.com">contact.superabacus@gmail.com</a> 
//       </p>

    
//       <hr />
      
// </div>


// <br />
//       <h2 className="text--center text-margin--lg">
//         <span className="badge badge--primary">Who Are We?</span>
//       </h2>
//       <h3 className="text--center text-margin-lg">
//       A passionate team of <strong>educators, and math enthusiasts</strong> committed to turning math struggles into fun challenges. At Mac Super Abacus Academy, learning happens through play, creativity, and collaboration.
//       </h3>
//       <p>
//       At <strong>Super Abacus Academy,</strong> we don’t just teach math, we make numbers fun! Whether you're a math wizard or just starting out, our classes will have you breezing through calculations like a pro. From adding with ease to mastering mental math, join us in making numbers dance!
//       </p>


//     <div>
      
//       <h2 className="text--left text-margin--lg ">
//         <span className="badge badge--primary">Our Amazing Courses</span>
//       </h2>

//     </div>
      

// <ul>
// <li><strong>Fun with Abacus:</strong>
// Learn the basics of the abacus and see math in a whole new light! Perfect for kids and beginners.</li>
// <li>
// <strong>Mental Math Magic:</strong>
// Want to impress your friends with your math skills? Our mental math course is designed to make you a human calculator!</li>
// <li><strong>Super Brain Games:</strong>
// Why stop at math? Our brain games help you sharpen your mind and improve focus, memory, and problem-solving skills.</li>

// </ul>

      



  

//       <h2 className="text text--right text-margin--lg  ">
//         <span className="badge badge--primary ">Meet the Masterminds!</span>
//       </h2>


      


// <ol>
// <li><a href="/achievements/iitm-foundation-level">
//        <strong>

//        Mr. Mac:
//        </strong>
//      </a> Your friendly neighborhood math genius with a knack for making abacus lessons fun!


// <li><a href="/achievements/tcet-open-source">
// <strong>Miss Addie:</strong>
// </a>
// The queen of mental math—she’ll show you how to conquer math problems with a flick of the fingers.</li>
// <li><a href="/achievements/completed-certificates">
// <strong>
  
// Professor Calc:
//   </strong></a>The math wizard who can solve any equation in seconds. He’ll help you unlock the secrets of the abacus!

// </li>


// </ol>

//     <div>
      
//       <h2 className="text--left text-margin--lg ">
//         <span className="badge badge--primary">Why Choose Us?</span>
//       </h2>

//     </div>
      

// <ul>
// <li>Because math doesn’t have to be boring! We make sure every class is filled with fun activities, competitions, and challenges that keep learning exciting.</li>
// <li>IIT, Madras: Diploma Level- Bachelor of Science (BS) Degree in Data Science and Applications Sem  CGPA - 7</li>
// <li>Class 12 -Mar 2022 86.50%</li>
// <li>Class 10 -Mar 2020 86.40%</li>
// </ul>



// <a href="https://holopin.io/@mj123">
//         <img src="https://holopin.me/mj123" alt="An image of @mj123's Holopin badges, which is a link to view their full Holopin profile" />
//       </a>

   

//       <h3>What Our Students Say</h3>

//       <p>
//         • I thought math was hard until I joined Mac Super Abacus Academy. Now I love numbers!
//         <p className="text text--right text-margin--lg  ">
//         – Aiden, 10 years old.
//       </p>
        
//       </p>
//       <p>
//         • The teachers here make everything so fun! I can do my homework faster now.
//         <p className="text text--right text-margin--lg  ">
//         – Mia, 8 years old.
//       </p>
        
//       </p>

      

     
//       <img height={"20px"} src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" alt="Meet's gif" />
    


//     </div>

//       </div>

//     </div>
//   </div>

// </div>






//     </>
//   );
// }







// export default function Home() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       // title={`Hello from ${siteConfig.title}`}
//       title={`Hello 👋 form Meet`}
//       description="Description will go into a meta tag in <head />">
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//         <ContactForm />
//       </main>
//     </Layout>
//   );
// }


// import ContactForm from '../components/HomepageFeatures/ContactForm';







// // function HomepageHeader() {
// //   const {siteConfig} = useDocusaurusContext();
// //   return (
// //     <header className={clsx('hero hero--primary', styles.heroBanner)}>
// //       <div className="container">
// //         <Heading as="h1" className="hero__title">
// //           {siteConfig.title}
// //         </Heading>
// //         <p className="hero__subtitle">{siteConfig.tagline}</p>
// //         <div className={styles.buttons}>
// //           <Link
// //             className="button button--secondary button--lg"
// //             to="/docs/intro">
// //             Docusaurus Tutorial - 5min ⏱️
// //           </Link>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // }

// // export default function Home(): JSX.Element {
// //   const {siteConfig} = useDocusaurusContext();
// //   return (
// //     <Layout
// //       title={`Hello from ${siteConfig.title}`}
// //       description="Description will go into a meta tag in <head />">
// //       <HomepageHeader />
// //       <main>
// //         <HomepageFeatures />
// //       </main>
// //     </Layout>
// //   );
// // }




