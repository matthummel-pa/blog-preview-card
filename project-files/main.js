// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import custom CSS
import './style.css';

// Import Bootstrap JS (includes Popper.js)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Your custom JavaScript can go here
document.addEventListener('DOMContentLoaded', () => {
  console.log('Bootstrap has been loaded!');
  
  // Initialize any Bootstrap components that require JavaScript
  // For example, tooltips and popovers
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
  
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
});

