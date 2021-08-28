import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'How many breeds of elephants are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '2', isCorrect: false },
				{ answerText: '3', isCorrect: true },
				{ answerText: '4', isCorrect: false },
			],
		},
		{
			questionText: 'Which Disney Princess has the least amount of screentime?',
			answerOptions: [
				{ answerText: 'Princess Snow White', isCorrect: false },
				{ answerText: 'Princess Jasmine', isCorrect: false },
				{ answerText: 'Princess Aurora', isCorrect: true },
				{ answerText: 'Princess Rapunzel', isCorrect: false },
			],
		},
		{
			questionText: 'What is the shortest play written by Shakespeare?',
			answerOptions: [
				{ answerText: 'The Tempest', isCorrect: false },
				{ answerText: 'The Comedy of Errors', isCorrect: true },
				{ answerText: 'Macbeth', isCorrect: false },
				{ answerText: 'King Lear', isCorrect: false },
			],
		},
		{
			questionText: 'In terms of volume, what is the largest fresh lake in the world?',
			answerOptions: [
				{ answerText: 'Lake Huron', isCorrect: false },
				{ answerText: 'Lake Michigan', isCorrect: false },
				{ answerText: 'Lake Superior', isCorrect: false },
				{ answerText: 'Lake Baikal', isCorrect: true },
			],
		},
    {
			questionText: 'In Harry Potter, where does Vernon Dursley work?',
			answerOptions: [
				{ answerText: 'At a drill manufacturer', isCorrect: true },
				{ answerText: 'At a mechanic shop', isCorrect: false },
				{ answerText: 'At a post office', isCorrect: false },
				{ answerText: 'He does not work a job', isCorrect: false },
			],
		},
    {
			questionText: 'Where in the human body would you find the medulla oblongata?',
			answerOptions: [
				{ answerText: 'The spine', isCorrect: false },
				{ answerText: 'The artery', isCorrect: false },
				{ answerText: 'The brain', isCorrect: true },
				{ answerText: 'The large intestine', isCorrect: false },
			],
		},
    {
			questionText: 'What is the spiciest chilli in the world?',
			answerOptions: [
				{ answerText: 'The Carolina Reaper', isCorrect: true },
				{ answerText: 'Moruga Scorpion', isCorrect: false },
				{ answerText: 'Habanero Red Savina Pepper', isCorrect: false },
				{ answerText: 'Naga Morich', isCorrect: false },
			],
		},
    {
			questionText: 'What is the capital of Tanzania?',
			answerOptions: [
				{ answerText: 'Mwanza', isCorrect: false },
				{ answerText: 'Tanga', isCorrect: false },
				{ answerText: 'Mbeya', isCorrect: false },
				{ answerText: 'Dodoma', isCorrect: true },
			],
		},
    {
			questionText: 'What is the middle name of Joe Biden?',
			answerOptions: [
				{ answerText: 'Peter', isCorrect: false },
				{ answerText: 'Robinette', isCorrect: true },
				{ answerText: 'Davidson', isCorrect: false },
				{ answerText: 'Edward', isCorrect: false },
			],
		},
    {
			questionText: 'How old is the oldest pot plant in the world?',
			answerOptions: [
				{ answerText: '238 years', isCorrect: false },
				{ answerText: '147 years', isCorrect: false },
				{ answerText: '246 years', isCorrect: true },
				{ answerText: '489 years', isCorrect: false },
			],
		},
	];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {

    if (isCorrect===true){
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
        setShowScore(true);
    }

  }

	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOptions)=> (<button onClick={()=>handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>))}
					</div>
				</>
			)}
		</div>
	);
}
