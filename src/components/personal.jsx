import { useState } from "react";

export default function Personal(){

    const [nameInput, setNameInput] = useState("");
    const [ageInput, setAgeInput] = useState("");
    const [emailInput, setEmailInput] = useState("");

    const [isSubmit, setIsSubmit] = useState(false);

    function handleSubmit(){
        setIsSubmit(true);
    };

    function handleEdit(){
        setIsSubmit(false);
    };

    return (
        <>
        {isSubmit ? 
            <div>
                <label>Name</label> <br />
                <input 
                    disabled
                    type="text"
                    value={nameInput}
                    onChange={(e) => {setNameInput(e.target.value)}}/> <br />

                <label>Age</label> <br />
                <input 
                    disabled
                    type="text"
                    value={ageInput}
                    onChange={(e) => {setNameInput(e.target.value)}}/> <br />

                <label>Email</label> <br />
                <input 
                    disabled
                    type="text"
                    value={emailInput}
                    onChange={(e) => {setNameInput(e.target.value)}}/> <br />

                <button type="button" onClick={handleEdit}>edit</button>
            </div>

            :
            
            <div>
                    <form id="personalDetails">
                        <label>Name</label> <br />
                        <input 
                            type="text"
                            value={nameInput}
                            onChange={(e) => {setNameInput(e.target.value)}}/> <br />

                        <label>Age</label> <br />
                        <input 
                            type="text"
                            value={ageInput}
                            onChange={(e) => {setAgeInput(e.target.value)}}/> <br />

                        <label>Email</label> <br />
                        <input 
                            type="text"
                            value={emailInput}
                            onChange={(e) => {setEmailInput(e.target.value)}}/> <br />

                        <button type="button" onClick={handleSubmit}>submit</button>
                    </form>
                </div>
        }
        </>
    );
};