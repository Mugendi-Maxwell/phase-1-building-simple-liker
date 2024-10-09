// Defining text characters for the empty and full hearts for you to use later.
// Defining text characters for the empty and full hearts
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

//Your JavaScript code goes here!
// Function to simulate the server request and handle success/error
function serverRequest() {
  mimicServerCall()
    .then((message) => {
      console.log(message);
      const heartIcon = document.getElementById("heart-icon");
      heartIcon.innerText = FULL_HEART;
      heartIcon.classList.add("activated-heart");
      document.getElementById("modal").classList.add("hidden");
    })
    .catch((error) => {
      console.error(error);
      const modal = document.getElementById("modal");
      modal.classList.remove("hidden");


      modal.querySelector(".modal-message").innerText = error;

      
      setTimeout(() => {
        modal.classList.add("hidden");
      }, 3000); 
    });
}


function toggleHeart() {
  const heartIcon = document.getElementById("heart-icon");

  
  if (heartIcon.innerText === FULL_HEART) {
    
    heartIcon.innerText = EMPTY_HEART;
    heartIcon.classList.remove("activated-heart");
  } else {
    
    heartIcon.innerText = FULL_HEART;
    heartIcon.classList.add("activated-heart");
  }
}


document.getElementById("heart-icon").addEventListener("click", toggleHeart);




// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
