import { useState } from "react";

export default function UserInput(props){
    const [input, setInput] = useState("");
    const [inputComplete, setInputComplete] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);

    const inputHandler = (event) => {
        setInput(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        setInputComplete(input);
        setIsSubmit(true);
    };

    const reset = () => {
        setIsSubmit(false);
        setInput(input);
        setInputComplete("");
    };

    return (
        <>
            {isSubmit ? (
                <div>
                    <h1>{inputComplete}</h1>
                    <button onClick={reset}>Edit</button>
                </div>
            ) : (
                <div>
                    <form onSubmit={submitHandler}>
                        <label>{props.inputName}</label> <br />
                        <input 
                            type="text"
                            value={input}
                            onChange={inputHandler}/> <br />

                        <button type="submit">submit</button>
                    </form>
                </div>
            )}
        </>
    );
};