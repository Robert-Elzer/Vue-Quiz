<script setup>
import {ref } from 'vue'
import { useQuizStore } from '@/stores/quiz'
import { onMounted, computed } from 'vue'
//import { useRouter } from 'vue-router'

const store = useQuizStore()
//const router = useRouter()
const currentIndex = ref(0)
const quizCompleted = ref(false)

const currentQuestion = computed(() => store.allQuestions[store.currentQuestionIndex])
const score = computed(() => { return store.answers.filter( answer => answer === true).length })
const restartQuiz = () => {
    store.initQuiz()
}

const handleAnswer = (option) => {
  if (store.selectedAnswer !== null) return
  store.selectedAnswer = option 
  store.answers.push(option.isCorrect)
//Delay so the user can see the feedback before moving to the next question
  setTimeout(() => {
    if (store.currentQuestionIndex < store.allQuestions.length - 1) {
      store.nextQuestion()
    } else {
      store.completeQuiz()
    }
  }, 3000)
}

onMounted(() => {
    store.initQuiz()
})
</script>

<template>
    <div v-if="currentQuestion" class="quiz-container">
        <div v-if="!store.quizCompleted">
        <h2>Question {{  store.currentQuestionIndex + 1 }}</h2>

        <div v-if="currentQuestion.image">
            <img
            :src="currentQuestion.image"
            alt="Question visualization"
            class="question-image"
            />
        </div>

        <p class="question-text">{{ currentQuestion.text }}</p>

        <div class="answer-buttons-wrapper">
            <button
            v-for="(option, index) in currentQuestion.options"
            @click="handleAnswer(option)"
            :key="option.text"
            class="answer-buttons"
            :class="{
                'correct': store.selectedAnswer && option.isCorrect,
                'incorrect': store.selectedAnswer === option && !option.isCorrect,
                'disabled': store.selectedAnswer !== null
            }"
            :disabled="store.selectedAnswer !== null"
            >
        {{  option.text }}
        </button>
        </div>
        </div>
        <div v-else class="results-screen">
        <h1>Quiz Completed!</h1>
        <p>You got {{ score }} out of {{ store.allQuestions.length }} correct.</p>
        <button 
        @click="restartQuiz"
        class="option-button">
            Play Again
        </button>
    </div>
    </div>    
</template>

<style scoped>

.quiz-container {
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    background-color: navy;
    color: white;
    min-height: 100vh;
    height: auto;
    display: flex;
    flex-direction: column;
}

h2 {
    text-align: center;
}

.question-image-wrapper {
    margin: 1.5rem 0;
    display: flex;
    justify-content: center;
}

.question-image {
    max-height: 300px;
    width: auto;
    max-width: 100%;
    border-radius: 12px;
    object-fit: contain;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.question-text {
    text-align: center;
}

.answer-buttons-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 1rem;
    margin-top: 2rem;
}

.answer-buttons {
    background-color: rgba(255, 174, 0, 0.849);
    color: black;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
}

.answer-buttons.correct {
    background-color: #42b883 !important;
    color: white;
    border-color: #2c8a5f;
}
.answer-buttons.incorrect {
    background-color: #e63946 !important;
    color: white;
    border-color: #b91c1c;
}

.answer-buttons.disabled {
    cursor: not-allowed;
    opacity: 0.8;
}

.results-screen {
    text-align: center;
    min-height: 100vh;
    height: 100%;
    color: white;
}

.results-screen h1 {
    margin-bottom: 1rem;
}
</style>