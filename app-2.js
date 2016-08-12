"use strict";

$(document).ready(function() {

    var currentQuestion = 0;
    var numberCorrect = 0;
    console.log(numberCorrect);

    var questions = [{
        prompt: "When was the motorcycle's layout established?",
        answers: ["1904", "1914", "1922", "1936"],
        correct: 1
    }, {
        prompt: "The frame, suspension, and wheels comprise the motorcycle's:",
        answers: ["body", "channel", "chassis", "engine"],
        correct: 2
    }, {
        prompt: "What allows motorcycles to use tubeless tires now?",
        answers: ["cast wheels", "pneumatic tires", "steel rims", "compressed air"],
        correct: 0
    }, {
        prompt: "What do riders use to activate a motorcycle's brakes?",
        answers: ["hand lever", "foot pedals", "both band and foot pedals", "drag their feet"],
        correct: 2
    }, {
        prompt: "The rotational force of the crankshaft is transmitted to:",
        answers: ["the engine", "the front wheel", "the rear wheel", "the rider"],
        correct: 2
    }];

    startQuiz();
    nextQuestion();

    function startQuiz() {
        $('.start-button').on('click', function() {
            $('.header-background-dark').html("<p>Question <span></span> of 5</p>");
            addQuestion();
            $('.next-button').show();
            $('.start-button').hide();
            userFeedback();
        });
    };

    function userFeedback() {
        $('li').on('click', function() {
            if (questions[currentQuestion].correct == this.id) {
                $(this).toggleClass('correct-li');
                numberCorrect += 1;
                console.log(numberCorrect);
            } else {
                $(this).toggleClass('incorrect-li');
            }
        });
    };

    function nextQuestion() {
        $('.next-button').on('click', function() {
                currentQuestion++;
                if (currentQuestion < questions.length){
                    addQuestion();
                userFeedback();
                }
                else{
                    $('.question').hide();
                    $('.end-game').show();
                    $('#score').text(numberCorrect);
                }
        });
    };

    $('.start-game').on('click', function() {
        currentQuestion = 0;
        numberCorrect = 0;
        $('.question').show();
        $('.end-game').hide();
        addQuestion();
        userFeedback();
    });

    // user presented with next question
    function addQuestion() {
        $('.header-background-dark span').text(currentQuestion + 1);
        $('.prompt').text(questions[currentQuestion].prompt);
        $('.answer-list').empty();
        for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
            $('.answer-list').append("<li id=" + i + ">" + questions[currentQuestion].answers[i] + "</li>");
        }
    }
}); // end doc ready
