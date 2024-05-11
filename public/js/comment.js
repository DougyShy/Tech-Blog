const commentFormHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment-content').trim();

    if (comment) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/comment', {
          method: 'POST',
          body: JSON.stringify({ comment }),
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
    
    document
        .querySelector('.comment-form')
        .addEventListener('submit', commentFormHandler); 

