import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then(setQuestions);
  }, []);

  function handleDelete(deletedId) {
    const updatedQuestions = questions.filter((q) => q.id !== deletedId);
    setQuestions(updatedQuestions);
  }

  function handleUpdate(updatedQuestion) {
    const updatedQuestions = questions.map((q) =>
      q.id === updatedQuestion.id ? updatedQuestion : q
    );
    setQuestions(updatedQuestions);
  }

  const questionItems = questions.map((q) => (
    <QuestionItem
      key={q.id}
      question={q}
      onDelete={handleDelete}
      onUpdate={handleUpdate}
    />
  ));
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {
          /* display QuestionItem components here after fetching */ questionItems
        }
      </ul>
    </section>
  );
}

export default QuestionList;
