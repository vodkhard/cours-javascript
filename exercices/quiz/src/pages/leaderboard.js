import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from '../utils/axios';

export default function Leaderboard() {
    const { id } = useParams();
    const [scores, setScores] = useState([])

    useEffect(() => {
        axios.get(`/scores?quizId=${id}`).then(res => {
            setScores(res.data);
        })
    }, [])

    if (scores.length > 0) {
        return scores.map(score => <div>
            {score.score}
        </div>)
    }
    return null
}