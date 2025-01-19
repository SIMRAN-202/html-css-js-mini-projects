$(document).ready(function(){


        let workoutTime; // Total workout time in seconds
        let intervalTime; // Interval time in seconds
        let timer; // Timer variable
        let isPaused = false; // Flag to check if the timer is paused
        let timeLeft; // Time left in the current interval
    
        $('#start-timer').click(function() {
            workoutTime = parseInt($('#workout-time').val()) * 60; // Convert minutes to seconds
            intervalTime = parseInt($('#workout-interval').val()); // Get interval time in seconds
            timeLeft = workoutTime;
    
            if (isPaused) {
                isPaused = false;
                countdown();
            } else {
                countdown();
            }
        });
    
        $('#pause-timer').click(function() {
            isPaused = true;
            clearInterval(timer);
        });
    
        $('#reset-timer').click(function() {
            resetTimer();
        });
    
        function countdown() {
            if (timeLeft <= 0) {
                alert("Workout complete!");
                resetTimer();
                return;
            }
    
            timer = setInterval(function() {
                if (!isPaused) {
                    timeLeft--;
                    updateTimerDisplay();
                    updateProgressBar();
    
                    if (timeLeft <= 0) {
                        clearInterval(timer);
                        alert("Workout complete!");
                        resetTimer();
                    }
                }
            }, 1000);
        }
    
        function updateTimerDisplay() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            $('#timer-display').text(`${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
        }
    
        function updateProgressBar() {
            const progressPercentage = ((workoutTime - timeLeft) / workoutTime) * 100;
            $('#progress').css('width', progressPercentage + '%');
            $('#progress-text').text(Math.floor(progressPercentage) + '% completed');
        }
    
        function resetTimer() {
            clearInterval(timer);
            isPaused = false;
            timeLeft = 0;
            $('#workout-time').val(30); // Reset to default value
            $('#workout-interval').val(15); // Reset to default value
            $('#progress').css('width', '0%'); // Reset progress bar
            $('#progress-text').text('0% completed'); // Reset progress text
            $('#timer-display').text('00:00'); // Reset timer display
            console.log("Timer reset.");
        }

    
    
    //generate random challanges
    $('#generate-challenge').click(function() {
        const challenges = [
            'Do 20 push-ups!',
            'Hold a plank for 1 minute!',
            'Jog in place for 30 seconds!',
            'Do 15 jumping jacks!',
            'Stretch your legs for 2 minutes!'
        ];
        let randomIndex = Math.floor(Math.random() * challenges.length);
        $('#challenge-display').html('<span>' + challenges[randomIndex] + '</span>');
    });

    //add custom challange
    $('#add-challenge').click(function(){
        var customChallenge = $('#custom-challenge').val();
        if (customChallenge) {
            $('#challenge-list').append('<li>' + customChallenge + '</li>')
        }
    })

    //clear custom challange list
    $('#clear-challenges').click(function() {
        $('#challenge-list').empty();
    });
})