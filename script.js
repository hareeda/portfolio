function addRecommendation() {
    var recommendationList = document.getElementById('recommendationList');

    // Create a new list item
    var listItem = document.createElement('li');
    listItem.textContent = text;

    // Append the list item to the recommendation list
    recommendationList.appendChild(listItem);

    // Clear the input field
    document.getElementById('recommendationInput').value = '';
    
    // Reset the value of the textarea
    recommendation.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    showPopup(true);
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
