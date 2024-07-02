document.addEventListener('DOMContentLoaded', () => {
  const img = document.querySelector('img[data-testid="slackProfilePicture"]');
  img.onload = function () {
    console.log('Natural Width: ', img.naturalWidth);  // Outputs 300
    console.log('Natural Height: ', img.naturalHeight); // Outputs 300
    console.log('Displayed Width: ', img.width);       // Should output 300
    console.log('Displayed Height: ', img.height);     // Should output 300

    // Ensure the image is displayed at its natural size
    if (img.width !== img.naturalWidth || img.height !== img.naturalHeight) {
      console.error('Image is not displayed at its natural dimensions.');
    }

  };
});

function updateTimeAndDay() {
  const currentTimeElement = document.getElementById('currentUTCTime');
  const currentDayElement = document.getElementById('currentDay');
  const dateElement = document.getElementById('date');

  dateElement.textContent = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  // Get current time in UTC

  const now = new Date();

  // Format current time in UTC
  const utcHours = now.getUTCHours().toString().padStart(2, '0');
  const utcMinutes = now.getUTCMinutes().toString().padStart(2, '0');
  const utcSeconds = now.getUTCSeconds().toString().padStart(2, '0');
  const currentTime = `${utcHours}:${utcMinutes}:${utcSeconds}`;
  currentTimeElement.textContent = currentTime;

  // Get current day of the week
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = daysOfWeek[now.getUTCDay()];
  currentDayElement.textContent = currentDay;
}

// Update time and day every second
setInterval(updateTimeAndDay, 1000);
updateTimeAndDay(); // Initial call to set the values right away
