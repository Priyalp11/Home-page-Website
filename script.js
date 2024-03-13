
let testimonialIndex = 0;
showTestimonial(testimonialIndex);

function showTestimonial(n) {
  const testimonials = document.getElementsByClassName("testimonial");
  if (n < 0) {
    testimonialIndex = testimonials.length - 1;
  }
  if (n >= testimonials.length) {
    testimonialIndex = 0;
  }
  for (let i = 0; i < testimonials.length; i++) {
    testimonials[i].style.display = "none";
  }
  testimonials[testimonialIndex].style.display = "block";
}

function nextTestimonial() {
  showTestimonial(++testimonialIndex);
}

function prevTestimonial() {
  showTestimonial(--testimonialIndex);
}
