 // Get modal and button elements
const modal = document.getElementById("formModal");
const closeModal = document.querySelector(".close");

// Open the form when the image is clicked
function openForm() {
    modal.style.display = "block";
}

// Close the modal when the "x" is clicked
function closeForm() {
    modal.style.display = "none";
}

// Close the modal if the user clicks anywhere outside the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Form submit handler (you can update this to your desired functionality)
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form Submitted!');
    closeForm(); // Close the form after submission
});
// Form submit handler (submit data to the backend)
document.getElementById('bookingForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        shootType: document.getElementById('shoot').value,
        startDate: document.getElementById('startDate').value,
        endDate: document.getElementById('endDate').value
    };
});

