var questions = [
    "Looks like you need a food recommendation.<br>What is your name?",
    "Are you looking for breakfast, lunch, or dinner?",
    "Refresh and try again?",
];

var answers = [];

var responses = [
    "Hi",
    "You should get a breakfast burrito from Cofax!",
    "I highly recommend Republique.",
    "Petit Trois is delicious, non-fussy French food.",
    "Can't really help you with that one.",
    "Awesome!"
]

var intCurrentQuestion = 0;

$(function(){

    askQuestion(intCurrentQuestion);

    $('#conversationForm').submit(function(submitEvent){
        submitEvent.preventDefault();
        var answer = $('#answer').val();
        sendAnswer(answer);
    });

});

function askQuestion(questionNumber)
{
    $('#conversation').append('<li class="list-group-item ai">' + questions[questionNumber] + '</li>');
    intCurrentQuestion = questionNumber;
}

function sendAnswer(answer)
{
    if(answer)
    {
        $('#answer').val('');
        $('#conversation').append('<li class="list-group-item human">' + answer + '</li>');
        answers.push(answer);
        lookUpResponse();
        askQuestion(intCurrentQuestion + 1);
    }
}

function sendResponse(response)
{
    $('#conversation').append('<li class="list-group-item ai">' + response + '</li>');
}

function lookUpResponse()
{
    var response = undefined;
    if(intCurrentQuestion == 0)
    {
        response = responses[0] + " " + answers[0];
    } else if(intCurrentQuestion == 1) {
        answer = answers[1].toLowerCase();
        if (answer == "breakfast") {
            response = responses[1]; 
        } else if(answer == "lunch") {
            response = responses[2]; 
        } else if(answer == "dinner") {
            response = responses[3]; 
        } else {
            response = responses[4];
        }
    }

    if(response)
    {
        sendResponse(response);
    }
}

