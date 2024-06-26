function getcontent(id) {
  const imgTitle = document.getElementById("card-title");
  const img = document.getElementById("card-image");
  
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  fetch(`http://localhost:3000/images/${id}/`, requestOptions)
    .then((response) => response.json())
    .then(function (result) {
      imgTitle.innerText = result.title;
      img.src = result.image;
      img.alt = result.title;
    })
    .catch((error) => console.error(error));
};

const form = document.getElementById("comment-form");
  const commentsList = document.getElementById("comments-list");
  const commentInput = document.getElementById("comment")


function addComment() {
  const requestOptions = {
    method: "POST",
    redirect: "follow"
  };

  
function addComment(content) {
  fetch('http://localhost:3000/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content }),
  })
  .then(response => response.json())
  .then(result => {
    console.log('New comment added:', result);
    updateDOM(result.content);
  })
  .catch(error => {
    console.error('Error adding comment:', error);
  });
}


function updateDOM(content) {
  const newComment = document.createElement('li');
  newComment.innerText = content;
  commentsList.appendChild(newComment);
}


form.addEventListener('submit', function(event) {
  event.preventDefault();
  const commentText = commentInput.value;
  addComment(commentText);
});

}

function addCount(){
  const count =  document.getElementById("like-count");
  const btn = document.getElementById("like-button");

  btn.addEventListener("click", function(){
    count.innerText = `${parseInt(count.innerText) + 1}`;
  });
}

addCount();


getcontent(1);
addComment();
