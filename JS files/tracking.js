document.getElementById('search_button').addEventListener('click', function() {
    const searchQuery = document.getElementById('search_input').value;
    console.log(`Search event: ${searchQuery}`);
    trackSearchEvent(searchQuery);
});

document.getElementById('view_restaurant_button').addEventListener('click', function() {
    const restaurantId = '123';
    const restaurantName = 'Pizza Palace';
    console.log(`View restaurant event: ${restaurantName} (${restaurantId})`);
    trackRestaurantView(restaurantId, restaurantName);
});

document.getElementById('place_order_button').addEventListener('click', function() {
    const orderId = '456';
    const totalPrice = 29.99;
    console.log(`Place order event: Order ID: ${orderId}, Total Price: $${totalPrice}`);
    trackOrderEvent(orderId, totalPrice);
});

document.getElementById('submit_review_button').addEventListener('click', function() {
    const restaurantId = '123';
    const rating = 4.5;
    const reviewText = 'Great pizza!';
    console.log(`Submit review event: Rating: ${rating}, Review: ${reviewText}`);
    trackReviewEvent(restaurantId, rating, reviewText);
});

// Simulate tracking functions
function trackSearchEvent(query) {
    console.log(`Tracked search event with query: ${query}`);
}

function trackRestaurantView(restaurantId, restaurantName) {
    console.log(`Tracked restaurant view event: ${restaurantName} (${restaurantId})`);
}

function trackOrderEvent(orderId, totalPrice) {
    console.log(`Tracked order event: Order ID ${orderId}, Total Price: $${totalPrice}`);
}

function trackReviewEvent(restaurantId, rating, reviewText) {
    console.log(`Tracked review event: Rating: ${rating}, Review Text: ${reviewText}`);
}
