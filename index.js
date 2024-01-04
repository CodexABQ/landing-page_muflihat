// Function to be triggered when the div enters the viewport
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Execute your function here
      console.log('Div is fully in view!')
        OnlineWebFonts_Com({
            'Id':'.svg',
            'Data':__Animations['25127'],
        }).Play();
      // You can call your specific function here
      // functionName();
    }
  });
}

// Target div you want to observe
const targetDiv = document.querySelector('#svg');

// Options for the observer (e.g., root, threshold)
const options = {
  root: null, // Use the viewport as the root
  threshold: 1.0 // Trigger when the entire div is visible
};

// Create the observer
const observer = new IntersectionObserver(handleIntersection, options);

// Start observing the target div
observer.observe(targetDiv);