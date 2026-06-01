import { defineStore } from 'pinia'
import { quizData } from '@/../src/data/questions'

export const useQuizStore = defineStore('quiz', {
    state: () => ({
        allQuestions: quizData,
        answers: [], // Array to store user's answers
        loading: false,
        currentQuestionIndex: 0, // Track the current position
        selectedAnswer: null, // Store the currently selected answer
        quizCompleted: false
    }),
    getters: {
        score: (state) => {
            return state.answers.filter(a => a.isCorrect).length
        }
    },
    actions: {
        loadLocalQuiz() {
            this.allQuestions = quizData
            this.answers = [] // Reset answers for new game
        },
        addAnswer(answer) {
            this.answers.push(answer)
            this.selectedAnswer = answer // Update the selected answer
        },
        nextQuestion() {
            this.currentQuestionIndex++ // Move to the next question
            this.selectedAnswer = null // Reset selected answer for the next question
        },
        completeQuiz() {
            this.quizCompleted = true
        },
        initQuiz() {
            this.shuffleQuestions() // Shuffle questions for a new game
            this.currentQuestionIndex = 0
            this.selectedAnswer = null
            this.answers = []
            this.quizCompleted = false
        }, 
        shuffleQuestions() {
            let questions = [...quizData]
            for (let i = questions.length -1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [questions[i], questions[j]] = [questions[j], questions[i]];
            }
            this.allQuestions = questions
        }
    }
})