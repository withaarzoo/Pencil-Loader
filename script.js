// Get elements from the DOM
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const counters = document.querySelectorAll(".counter");

// Toggle open/close menu
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("menu-open");
});

// Select all counters
counters.forEach(counter => {
    // Set counter values to zero
    counter.innerText = 0;
    // Set count variable to track the count
    let count = 0;

    // Update count function
    function updateCount() {
        // Get counter target number to count to
        const target = parseInt(counter.dataset.count);
        // As long as the count is below the target number
        if(count < target) {
            // Increment the count by 10
            count += 10;
            // Set the counter text to the count
            counter.innerText = count + "+";
            // Repeat this every 10 miliseconds
            setTimeout(updateCount, 10); /* Count Speed */
            // And when the target is reached
        } else {
            // Set the counter text to the target number
            counter.innerText = target + "+";
        }
    }
    // Run the function initialy
    updateCount();
});