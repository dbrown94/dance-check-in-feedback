
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/dbrown94.github.io/dance-check-in-feedback/exec";


document.getElementById('checkinForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const name = document.getElementById('participantName').value;
    const sessionType = document.getElementById('sessionType').value;
    const mood = document.getElementById('mood').value;

    const formData = {
        name: name,
        sessionType: sessionType,
        mood: mood,
        rating: '',
        comments: ''
    };

   
    fetch(https://script.google.com/macros/s/AKfycbyB92ODHUYreBkjQ-zrpsWvAtIJ4iBkH8uDuDOIAN0ZYVtuv-cp95DQJxp0hBvEJhRM/exec, {
        method: 'POST',
        body: JSON.stringify(formData)
    }).then(response => response.text())
      .then(result => {
        alert("Check-in submitted successfully!");
        document.getElementById('checkinForm').reset();
      }).catch(error => console.error('Error!', error.message));
});

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const rating = document.getElementById('sessionRating').value;
    const comments = document.getElementById('comments').value;

    const formData = {
        name: '',  // Keep empty since feedback is anonymous
        sessionType: '',
        mood: '',
        rating: rating,
        comments: comments
    };

    
    fetch("https://script.google.com/macros/s/ttps://dbrown94.github.io/dance-check-in-feedback//exec", {
        method: 'POST',
        body: JSON.stringify(formData)
    }).then(response => response.text())
      .then(result => {
        alert("Feedback submitted successfully!");
        document.getElementById('feedbackForm').reset();
      }).catch(error => console.error('Error!', error.message));
});
