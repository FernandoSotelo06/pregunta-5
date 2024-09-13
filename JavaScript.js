const comments = [];


function postComment() {
    const username = document.getElementById('username').value.trim();
    const commentText = document.getElementById('commentText').value.trim();

    if (!username || !commentText) {
        alert('Por favor, completa todos los campos.');
        return;
    }


    const comment = {
        username: username,
        text: commentText,
        timestamp: new Date().toLocaleString()
    };

    comments.push(comment);
    document.getElementById('username').value = '';
    document.getElementById('commentText').value = '';
    displayComments();
}

function displayComments() {
    const commentsDiv = document.getElementById('comments');
    commentsDiv.innerHTML = ''; 

    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.innerHTML = `
            <span>${comment.username}</span> <time>(${comment.timestamp})</time>:<br>
            ${comment.text}
        `;
        commentsDiv.appendChild(commentDiv);
    });
}
