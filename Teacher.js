function showContent(type) {
    const mainDisplay = document.getElementById('main-display');

    if (type === 'learning-material') {
        mainDisplay.innerHTML = '<h2>Learning Material</h2><p>List of learning materials will be displayed here.</p>';
    } else if (type === 'student-data') {
        mainDisplay.innerHTML = '<h2>Student Data Management</h2><p>Manage student data here.</p>';
    }
}
