// Function to toggle the visibility of the dropdown content
function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none"; // Hide the dropdown if it's already visible
    } else {
        dropdown.style.display = "block"; // Show the dropdown
    }
}