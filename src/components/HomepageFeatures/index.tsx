import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '🌟 Abacus Superstars!',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <> 
      <div className="text--center">
      <img src={require('./Aryabhatta.png').default} width="300px" />
      </div>
      Our students don’t just learn the abacus; they master it like pros! With our fun and interactive lessons, <strong>more than 150 students </strong>have become Abacus Superstars, taking their math skills to the next level and beyond.
      </>
    ),
  },
  {
    title: '🏆🚀 Coming Soon – Vedic Math Magic!',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
  <div className="text--center">
  <img src={require('./GreatIndianMathematician.png').default} width="300px" />
      <div className="text--center">Exciting news, math lovers! We’re launching our Vedic Math course soon.<strong> Vedic Math</strong> is an ancient system that makes calculations faster, easier, and a lot more fun. If you think abacus is cool, wait until you see what Vedic Math can do!</div>
</div></>
    ),
  },
  {
    title: '💰 Abacus Math Magic - Just ₹1000!',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      <div className="text--center">
      <img src={require('./BuyCourse.jpeg').default} width="125px" />
      </div>
      Guess what? You can join the fun for just ₹1000! That's all it takes to start your journey to mental math mastery and abacus wizardry. No hidden fees, just pure brain-boosting fun! Get ready to solve math problems faster than your calculator!
        <div>

      <h3><button type="button" className="btn btn-primary display--1"><a href='https://forms.gle/g14KHU1fbXkuWDt6A'>Join Now🌟🌟🌟</a></button></h3>
        </div>

     
      </>
    ),
  },
];

function Feature({ title, description}) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        {/* <p>{description}</p> */}
      {description}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
