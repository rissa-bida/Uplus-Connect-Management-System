function showContent(type) {
    const mainDisplay = document.getElementById('main-display');

    if (type === 'home') {
        mainDisplay.innerHTML = '<h2>Welcome to Your Dashboard</h2><p>Here you can manage your subscriptions, payments, and learning materials.</p>';
    } else if (type === 'subscribed-tuition') {
        mainDisplay.innerHTML = '<h2>Subscribed Tuition</h2><p>List of your subscribed tuition packages will appear here.</p>';
    } else if (type === 'payment') {
        mainDisplay.innerHTML = '<h2>Payment</h2><p>Manage your payment information here.</p>';
    } else if (type === 'learning-materials') {
        mainDisplay.innerHTML = '<h2>Learning Materials</h2><p>Your learning materials will be available here.</p>';
    }
}
