const name = "Anthony";

const displayMessage = () => {
    return "I need help!";
};

function Hello() {
    return <h1>The message is: {displayMessage()}</h1>
}

export default Hello;