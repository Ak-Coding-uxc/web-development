function changeContent(type) {
    const contentDiv = document.getElementById('content');
    if (type === 'welcome') {
        contentDiv.innerHTML = '<h2>Welcome!</h2><p>This is dynamic content loaded via JavaScript.</p>';
        contentDiv.style.background = '#d4edda';
    } 
    else if (type === 'news') {
        contentDiv.innerHTML = '<h2>News Update</h2><p>Today is a great day for learning web development!</p>';
        contentDiv.style.background = '#cce5ff';
    } 
    else if (type === 'about') {
        contentDiv.innerHTML = `
            <h2>About</h2>
            <p>Learning HTML, CSS, and JavaScript.</p>
            <ul>
                <li>Dynamic content changes</li>
                <li>Using getElementById()</li>
                <li>Practical assignment</li>
            </ul>
        `;
        contentDiv.style.background = '#fff3cd';
    }
}
function clearContent() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = 'Content cleared!';
    contentDiv.style.background = '#f8d7da';
}
