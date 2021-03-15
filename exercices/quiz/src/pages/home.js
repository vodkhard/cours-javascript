import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../utils/axios';

function Home() {
    const [quizzes, setQuizzes] = useState([])

    useEffect(() => {
        const fetchQuizzes = async () => {
            const res = await axios.get('/quizzes')
            setQuizzes(res.data);
        }
        fetchQuizzes();
    }, [])

    return (
        <div>
            {quizzes.length === 0 && 'Loading...'}
            {quizzes.map(quizz => 
                <Link key={quizz.id} to={`/quizzes/${quizz.id}`}>{quizz.id}: {quizz.name}</Link>
            )}
        </div>
    );
}

export default Home;