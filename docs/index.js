var button = document.getElementById('clickme');
button.addEventListener('click', function() {
  const randomNumber = Math.floor(Math.random()*6);
  let mindset = "";

  if (randomNumber===1) {
  mindset='Learn From Failure';
  } else if (randomNumber===2) {
  mindset='Empathy';
  } else if (randomNumber===3) {
  mindset='Iterate';
  } else if (randomNumber===4) {
  mindset='Make it';
  } else if (randomNumber===5) {
  mindset='Creative Confidence';
} else if (randomNumber===0) {
  mindset='Embrace Ambiguity';
  };
   document.getElementById("mindsetReveal").textContent=`${mindset}!`;
});
