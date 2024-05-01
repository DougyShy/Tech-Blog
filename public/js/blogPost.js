

const formSubmit = () => {
    event.preventDefault();
    console.log("hello world");
}

document.querySelector('#comment').addEventListener('submit', formSubmit);