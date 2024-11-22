//form validation
function validateForm() {
  const name = document.getElementById('Name').value.trim();
  const email = document.getElementById('Email').value.trim();
  const subject = document.getElementById('Subject').value.trim();
  const message = document.getElementById('Message').value.trim();
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (name === "") {
    alert("Please enter your name.");
    return false;
  }

  if (email === "") {
    alert("Please enter your email.");
    return false;
  }

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (subject === "") {
    alert("Please enter a subject.");
    return false;
  }

  if (message === "") {
    alert("Please enter your message.");
    return false;
  }

  return true;
}

  


let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Increment slide index and reset if it exceeds total slides
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  // Show the current slide
  slides[slideIndex - 1].style.display = "block";
  
  // Change slide every 3 seconds
  setTimeout(showSlides, 3000);
}

// Initialize the slideshow
showSlides();

//open modal
Open Moda
function openModal(plan) {
  document.getElementById('orderModal').style.display = "block";
  const planNames = {
    bronze: "Bronze Plan - KSH 12000 per month",
    silver: "Silver Plan - KSH 20000 per month",
    gold: "Gold Plan - KSH 25000 per month"
  };
  document.getElementById("modal-plan-name").innerHTML = planNames[plan];
}

// Close the modal
function closeModal() {
  document.getElementById('orderModal').style.display = "none";
}

//Count Visitors
document.addEventListener("DOMContentLoaded", () => {
    // Simulating visitor count with local storage
    const visitorCounter = document.getElementById("visitor-counter");
    let count = localStorage.getItem("visitorCount") || 0;
    count++;
    localStorage.setItem("visitorCount", count);
    visitorCounter.textContent = `You are visitor number ${count}`;
});
