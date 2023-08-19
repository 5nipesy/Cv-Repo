// Array of image file paths
var images = ["Assets/images/image1.jpg", "Assets/images/image2.jpg", "Assets/images/image3.jpg"];
      
// Index of current image
var currentIndex = 0;

function showNextImage() {
  // Fade out the current image
  document.getElementById("slideshow").style.opacity = 0;
  
  // Wait for the fade out transition to complete
  setTimeout(function() {
    // Update the current index
    currentIndex = (currentIndex + 1) % images.length;
    
    // Update the src attribute of the image element
    document.getElementById("slideshow").src = images[currentIndex];
    
    // Fade in the new image
    document.getElementById("slideshow").style.opacity = 1;
  }, 1000);
}


// Show the first image when the page loads
document.getElementById("slideshow").src = images[currentIndex];

// Set an interval to show the next image every 10 seconds
setInterval(showNextImage, 10000);