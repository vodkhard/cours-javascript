import React, { useState } from 'react';
import QuestionItem from './item';
import axios from '../../utils/axios';
import { useHistory } from 'react-router';

export default function QuestionList({ quizId, questions }) {
    const history = useHistory();
    const [answers, setAnswers] = useState({});
    const [current, setCurrent] = useState(0);

    const handleAnswer = (questionIndex, isValid) => {
        const tmpAnswers = answers;
        tmpAnswers[questionIndex] = isValid;
        setAnswers(tmpAnswers);
        if (current+1 < questions.length) {
            setCurrent(current + 1);
        } else {
            axios.post('/scores', {
                quizId,
                score: Object.values(answers).filter(answer => answer).length
            }).then(res => {
                history.push(`/quizzes/${quizId}/leaderboard`)
            })
        }
    }

    return questions.map((question, index) => {
        if (index === current) {
            return <QuestionItem question={question} onAnswer={(isValid) => handleAnswer(index, isValid)} />;
        }
        return null;
    });
}