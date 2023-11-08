import { useState } from "react"
import Counter from "./Counter"
import FunctionalCounter from "./FunctionalCounter"

export default function ConditionalComponent() {
    const [display, setDisplay] = useState(true)

    const handleClick = () => {
        if (display || !display) {
            setDisplay(!display)
        }
    }

    return display ? (
        <div >< Counter ></Counter > <button onClick={handleClick}>Click Me!</button> </div >
    ) : (
        <div>< FunctionalCounter></FunctionalCounter> <button onClick={handleClick}>Click Me!</button> </div>
    )
}
