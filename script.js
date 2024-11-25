document.getElementById('bookmark-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const url = document.getElementById('url').value;

    if (!title || !url) {
        return;
    }

    const bookmarkList = document.getElementById('bookmark-list');
    const listItem = document.createElement('li');
    
    // Create a link for the bookmark
    listItem.innerHTML = `
        <a href="${url}" target="_blank">${title}</a>
        <button class="delete-button">Delete</button>
    `;

    // Append the list item to the bookmark list
    bookmarkList.appendChild(listItem);

    // Clear the input fields
    document.getElementById('title').value = '';
    document.getElementById('url').value = '';

    // Add event listener to the delete button
    listItem.querySelector('.delete-button').addEventListener('click', function() {
        bookmarkList.removeChild(listItem);
    });
});