import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import QuestionList from '../components/questions/list';
import axios from '../utils/axios';


export default function Quizz() {
    const { id } = useParams();
    const [quizz, setQuizz] = useState(null);

    useEffect(() => {
        axios.get(`/quizzes/${id}`).then(res => {
            setQuizz(res.data);
        })
    }, []);

    if (quizz !== null) {
        return <>
            <h1>{quizz.name}</h1>
            <QuestionList quizId={quizz.id} questions={quizz.questions} />
        </>
    }

    return <div>Loading...</div>;
}

class QuizzTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quizz: null
        }
    }

    componentDidMount() {
        axios.get(`/quizzes/${this.props.match.params.id}`).then(res => {
            this.setState({ quizz: res.data });
        })
    }

    render() {
        if (this.state.quizz !== null) {
            return <div>{this.state.quizz.name}</div>
        }
        return null;
    }
}