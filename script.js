let stimuli = ["Happy", "Sad", "Exciting", "Boring", "Joyful", "Angry"];
let currentStimulusIndex = 0;

function displayStimulus() {
    document.getElementById("stimulus").innerHTML = stimuli[currentStimulusIndex];
}

function recordResponse(response) {
    alert(`You responded with ${response} for "${stimuli[currentStimulusIndex]}"`);

    // Move to the next stimulus
    currentStimulusIndex++;

    // Check if all stimuli have been presented
    if (currentStimulusIndex < stimuli.length) {
        displayStimulus();
    } else {
        alert("Experiment completed. Thank you!");
    }
}

displayStimulus();