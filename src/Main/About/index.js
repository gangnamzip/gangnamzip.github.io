import faqData from '../../data/faqData.js';
import Question from './Question';

const About = () => (
    <article id="about">
      <h1>About us</h1>
      {faqData.map((q) => <Question q={q} />)}
    </article>
);

export default About;