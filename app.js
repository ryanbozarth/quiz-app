"use strict";

$(document).ready(function() {

    var currentQuestion = 0;


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
    /// build out the HTML here



    $('.start-button').click(function() {
        // numbers changing to reflect a new dynamically
        $('.header-background-dark').html("<p>Question <span></span> of 5</p>");
        $('.header-background-dark span').text(currentQuestion + 1);
        $(".card h1").text(questions[currentQuestion].prompt);
        // loop
        for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
          $(".answer-list").append("<li>" + questions[currentQuestion].answers[i] + "</li>");
        }
        $('button').addClass('.next-button');
        $('button').text("next question");
        
        selectionFeedback();

    });

    // function selectionFeedback() {
    //     $('li').on('click', function() {
    //         // show the right icons
    //         if (questions[1].correct) {
    //             $('li').addClass('.correct-li');
    //         } else {
    //             $('li').addClass('.incorrect-li');
    //         }
    //     })
    // }


}); // end doc ready
