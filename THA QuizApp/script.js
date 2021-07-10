const quizDB = [{
        question: 'Q1: With reference to Covid, what is ‘SwabSeq’, that was making news recently',
        a: 'Vaccine Candidate',
        b: 'Testing Platform',
        c: 'Oral Medicine',
        d: 'Global Alliance',
        ans: 'ans2'
    },
    {
        question: 'Q2: Which Indian state/UT launched ‘Mukhyamantri COVID-19 Pariwar Aarthik Sahayata Yojana',
        a: 'West Bengal',
        b: 'Delhi',
        c: 'Bihar',
        d: 'Odisha',
        ans: 'ans4'
    },
    {

        question: 'Q3: Which is the top state of India in production of Coal',
        a: 'Jharkhand',
        b: 'Odisha',
        c: 'Chattisgarh',
        d: 'Delhi',
        ans: 'ans3'
    },
    {
        question: 'Q4: Which country announced the ‘Intermediary Guidelines and Digital Media Ethics Code',
        a: 'India',
        b: 'China',
        c: 'France',
        d: 'Austrailia',
        ans: 'ans1'
    }
]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showscore = document.querySelector('#showscore');


let questionCount = 0;
let score = 0;
const onLoadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

onLoadQuestion();

const getAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
}

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false)
}

submit.addEventListener('click', () => {
    const checkedAns = getAnswer();
    // console.log(checkedAns);

    if (checkedAns === quizDB[questionCount].ans) {
        score++;
        console.log(score);
    }
    questionCount++;
    deselectAll();
    if (questionCount < quizDB.length) {
        // console.log(quizDB.length);
        onLoadQuestion();
    } else {
        showscore.innerHTML = `
     <h3> Your score is ${score}/${quizDB.length} Congratulations </h3>
     <button class='btn' onclick='location.reload()'> Play Again </button>
    `
        showscore.classList.remove('scorearea');
    }


});