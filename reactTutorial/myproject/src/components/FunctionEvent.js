function FunctionEvent() {

    const handleClick = () => {
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
//When handling button clicks, you use onClick={} and pass a function into ()

export default FunctionEvent