"use strict";

$(document).ready(function() {

    var currentQuestion = 0;
    var numberCorrect = 0;

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


    // click handler on next question button
    // increment current question value
    // update the question
    // call function for 40 - 47



    function cycleQuestions() {
        $('.header-background-dark').html("<p>Question <span></span> of 5</p>");
        $('.header-background-dark span').text(currentQuestion + 1);
        $(".prompt").text(questions[currentQuestion].prompt);
        for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
            $(".answer-list").append("<li id=" + i + ">" + questions[currentQuestion].answers[i] + "</li>");
        }
    }

    function startQuiz() {
        $('.start-button').click(function() {
            // numbers changing to reflect a new dynamically
            cycleQuestions();
            selectionFeedback();
            $('button').addClass('next-button');
            $('button').removeClass('start-button');
            $('button').text("next question");
        });
    };

    // give user feedback if response is correct + add numberCorrect if chosen
    function selectionFeedback() {
        $('li').on('click', function() {
            if (questions[currentQuestion].correct == this.id) {
                $(this).toggleClass('correct-li');
                numberCorrect += 1;
            } else {
                $(this).toggleClass('incorrect-li');
            }
        });
    };

    $('.next-button').click(function() {
        // numbers changing to reflect a new dynamically
        for (var i = 1; i < questions[currentQuestion]; i++) {
            cycleQuestions();
            selectionFeedback();
        }
       // $(startQuiz).remove();

    });




}); // end doc ready
