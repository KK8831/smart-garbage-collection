// Smooth fade-in
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {threshold: 0.2};
const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => {appearOnScroll.observe(fader)});

// Animate stats
function animateValue(id, start, end, duration, suffix="") {
  const obj = document.getElementById(id);
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.textContent = Math.floor(progress * (end - start) + start) + suffix;
    if (progress < 1) window.requestAnimationFrame(step);
  };
  window.requestAnimationFrame(step);
}
animateValue("totalReports", 0, 120, 2000, "+");
animateValue("resolved", 0, 85, 2000, "%");
animateValue("volunteers", 0, 50, 2000, "+");

// Modal handling
function openModal(title){
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalBody").innerText = "Detailed info about " + title + " goes here.";
  document.getElementById("modal").style.display="block";
}
function closeModal(){document.getElementById("modal").style.display="none";}

// Report form modal
function openForm(){document.getElementById("reportForm").style.display="block";}
function closeForm(){document.getElementById("reportForm").style.display="none";}
function submitReport(e){
  e.preventDefault();
  alert("Issue reported successfully!");
  closeForm();
}

// Volunteer join
function joinVolunteer(){
  const obj=document.getElementById("volunteers");
  let current=parseInt(obj.textContent)||0;
  obj.textContent=(current+1)+"+";
  alert("Thank you for joining as a volunteer!");
}
