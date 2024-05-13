const contentFormHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#comment-content').value.trim();
    const id = event.target.getAttribute('data-id');

    if (content) {
        // Send a POST request to the API endpoint
        const response = await fetch(`/api/comments/${id}`, {
          method: 'POST',
          body: JSON.stringify({ content }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          // If successful, redirect the browser to the dashboard page
          //document.location.replace('/blog/2');
          document.location.reload();
        } else {
          alert(response.statusText);
        }
      }
    };

    const delButtonHandler = async (event) => {
      if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
    
        const response = await fetch(`/api/comments/${id}`, {
          method: 'DELETE',
        });
    
        if (response.ok) {
          document.location.reload();
        } else {
          alert('Failed to delete comment');
        }
      }
    };
    
    document
      .querySelector('.comment-form')
      .addEventListener('submit', contentFormHandler); 

    document
      .querySelector('.comment-list')
      .addEventListener('click', delButtonHandler);
