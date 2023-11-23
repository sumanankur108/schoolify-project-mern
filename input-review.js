function displayReview() {
    var name = document.getElementById("name").value;
    var designation = document.getElementById("designation").value;
    var reviewText = document.getElementById("review-input").value;

    // Create a new paragraph element for the review
    var reviewParagraph = document.createElement("p");
    reviewParagraph.className = "review";
    reviewParagraph.innerHTML = `<span class="review-info">${name}, ${designation} - ${getCurrentTime()}</span><br>${reviewText}`;

    // Append the review to the reviews container
    document.getElementById("reviews-container").appendChild(reviewParagraph);

    // Clear the input after submitting the review
    document.getElementById("name").value = "";
    document.getElementById("designation").value = "";
    document.getElementById("review-input").value = "";
}

function getCurrentTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var currentTime = hours + ':' + minutes + ' ' + ampm;
    return currentTime;
}