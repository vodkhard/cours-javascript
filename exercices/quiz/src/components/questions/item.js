import React from 'react';
import { Formik, Form, Field } from 'formik'

export default function QuestionItem({ question, onAnswer }) {
    const handleSubmit = (values) => {
        const isValid = question.answers.findIndex(answer => answer === values.answer) === question.goodAnswer
        onAnswer(isValid);
    }

    return <div>
        <h2>{question.title}</h2>
        <Formik initialValues={{ answer: '' }} onSubmit={handleSubmit} >
            <Form>
                {question.answers.map(answer => <label>
                    <Field type="radio" name="answer" value={answer} />
                    {answer}
                </label>)}
                <button type="submit">Répondre</button>
            </Form>
        </Formik>
    </div>
}