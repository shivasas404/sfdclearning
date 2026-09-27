import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    currentQuestion = 1;
    quizQuestionsList = [
        {
            id: 1,
            question: 'What is the capital of France?',
            answers: [
                {'id': '1', 'text': 'Berlin','selected': false},
                {'id': '2', 'text': 'Madrid','selected': false},
                {'id': '3', 'text': 'Paris','selected': false},
                {'id': '4', 'text': 'Rome','selected': false}
            ],
            answerType: 'single',
            answer: 'Paris',
            answered: false
        },
        {
            id: 2,
            question: 'Which planet is known as the Red Planet?',
            answers: [
                {'id': '1', 'text': 'Earth','selected': false},
                {'id': '2', 'text': 'Mars','selected': false},
                {'id': '3', 'text': 'Jupiter','selected': false},
                {'id': '4', 'text': 'Venus','selected': false}
            ],
            answerType: 'single',
            answer: 'Mars',
            answered: false

        },
        {
            id: 3,
            question: 'Select the primary colors:',
            answers: [
                {'id': '1', 'text': 'Red','selected': false},
                {'id': '2', 'text': 'Green','selected': false},
                {'id': '3', 'text': 'Blue','selected': false},
                {'id': '4', 'text': 'Yellow','selected': false}
            ],
            answerType: 'multiple',
            answer: ['Red', 'Blue', 'Yellow'],
            answered: false
        },
        {
            id: 4,
            question: 'Indias national flag has how many colors?',
            answers: [
                {'id': '1', 'text': '5','selected': false},
                {'id': '2', 'text': '3','selected': false},
                {'id': '3', 'text': '8','selected': false},
                {'id': '4', 'text': '9','selected': false},
                {'id': '5', 'text': '4','selected': false}
            ],
            answerType: 'single',
            answer: ['3'],
            answered: false
        }
    ];

    get question() {
        return this.quizQuestionsList[this.currentQuestion - 1];
    }

    get isSingleAnswer() {
        return this.question?.answerType === 'single';
    }

    get isMultipleAnswer() {
        return this.question?.answerType === 'multiple';
    }

    get isFirstQuestion() {
        return this.currentQuestion === 1;
    }

    get isLastQuestion() {
        return this.currentQuestion === this.totalQuestions;
    }
    get progressStyle() {
        const percentage =
            (this.currentQuestion / this.totalQuestions) * 100;

        return `width: ${percentage}%`;
    }

     handleAnswerChange(event) {
        const answerId = event.target.value;

        if (this.isSingleAnswer) {

            this.question.answers.forEach(answer => {
                answer.selected = answer.id === answerId;
            });

        } else {

            const answer = this.question.answers.find(
                item => item.id === answerId
            );

            if (answer) {
                answer.selected = event.target.checked;
            }
        }

        // Force UI refresh
        this.questions = [...this.questions];
    }

    handleNext() {
        if (!this.isLastQuestion) {
            this.currentQuestion++;
        } else {
            this.submitQuiz();
        }
    }

    handlePrevious() {
        if (!this.isFirstQuestion) {
            this.currentQuestion--;
        }
    }

    submitQuiz() {
        console.log('Quiz submitted', JSON.stringify(this.quizQuestionsList));
    }

    totalQuestions = this.quizQuestionsList.length;
}