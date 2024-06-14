const questions = [
           "Do you often feel distracted and unable to focus?",
           "Do you often forget things?",
           "Do you find time management difficult?",
           "Do you often feel restless and irritable?",
           "If you have these symptoms, you may have ADHD!"
       ];

       let currentQuestionIndex = 0;

       function nextQuestion(answer) {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        document.getElementById('question').innerText = questions[currentQuestionIndex];
        if (currentQuestionIndex === questions.length - 1) {
            document.getElementById('btn-group').style.display = 'none';
            document.getElementById('learn-btn').classList.add('active');
        }
    }
}
