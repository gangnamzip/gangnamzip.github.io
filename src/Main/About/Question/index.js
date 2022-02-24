const Question = (prop) => (
    <details>
      <summary>{prop.q.question}</summary>
      <p dangerouslySetInnerHTML={{ __html: prop.q.answer}} />
    </details>
);

export default Question;