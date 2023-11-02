function FunctionEvent() {

    function handleClick() {
        console.log("Button is clicked")
    }

    return (
        <div>
            Functional components
            <button onClick={handleClick}>Click Here</button>
        </div>
    )
}
//Regular JS would have you use onclick without camel case
export default FunctionEvent