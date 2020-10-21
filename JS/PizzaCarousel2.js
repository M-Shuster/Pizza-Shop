var currentSlideIndex = 0;

// Pull all our assets from a locally hosted folder for speed.
const pizzaImages = [
  "../ASSETS/pizza1.jpg",
  "../ASSETS/pizza2.jpg",
  "../ASSETS/pizza3.jpg",
];

/* 
   This is a helper function that just fetches the container from the document
   and returns it for us. 
 */
function getPizzaImage() {
  return document.getElementById("pizzaImage");
}

/* 
   This function is responsible for changing the <img> source.
   It takes in the a number which we use to fetch a value from the pizzaImages array
 */
function setPizzaImage(index) {
  // Fetch the container
  const pizzaImage = getPizzaImage();

  // Set the source of the <img> tag
  pizzaImage.src = pizzaImages[index];

  // re-add the fade in class
  pizzaImage.classList.add("fade");

  // Wait 500ms until the animation is complete, then remove the class
  // so that we can trigger it again next time.
  setTimeout(function () {
    pizzaImage.classList.remove("fade");
  }, 500);
}

// Move the slider one to the right
function moveSliderRight() {
  // check that we are not going to request an image from the array that does not exist
  // if the next image does not exist, set it back to the first image, this makes it infinite.
  // (the -1 is because arrays go from 0)
  if (currentSlideIndex < pizzaImages.length - 1) {
    currentSlideIndex++;
  } else {
    currentSlideIndex = 0;
  }
  // Once the index is set, we can call our helper function to update the image
  setPizzaImage(currentSlideIndex);
}

// Same as above but uses the -- (minus 1) as apposed to ++ (plus 1)
function moveSliderLeft() {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
  } else {
    currentSlideIndex = pizzaImages.length - 1;
  }
  setPizzaImage(currentSlideIndex);
}
