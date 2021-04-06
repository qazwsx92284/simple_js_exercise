const form = document.querySelector('#commentForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = this.elements.username;
    const comment = this.elements.comment;

    // console.log(username.value);
    // console.log(comment.value);

    addComment(username.value, comment.value);

    username.value = '';
    comment.value ='';
})

const addComment = (username, comment) => {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const b = document.createElement('b');
    b.append(username);
    li.append(b);
    li.append(` - ${comment}`);
    ul.append(li);
}

