const correctAnswers = ["A", "B", "A", "B", "A", "A"]
const form = document.querySelector("form")
const finalScoreContainer = document.querySelector(".result") 

let counter = 0
let score = 0

const getUserScore = userAnswers => {
  userAnswers.forEach((userAnswers, index) => {
    if(userAnswers === correctAnswers[index]){
      score += 16.67
    }
  })
}

const getUserAnswer = () => {
  let userAnswers = []

  correctAnswers.forEach((_, index) => {
    userAnswers.push(form[`inputQuestion${index + 1}`].value)
  })

  return userAnswers
}

const animateUserScore = () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })

  finalScoreContainer.classList.remove("d-none")

  const timer = setInterval(() => {
    if(counter === Math.trunc(score)){
      clearInterval(timer)
    }
    finalScoreContainer.querySelector("span").textContent = `${counter++}%`
  }, 20)
}


const handleForm = event => {
  event.preventDefault()

  getUserAnswer()
  getUserScore(getUserAnswer())
  animateUserScore()
}

form.addEventListener("submit", handleForm)