import { useState } from "react";

export default function UserInput(){

    const [nameInput, setNameInput] = useState("");
    const [studyInput, setStudyInput] = useState("");
    const [dateFromInput, setDateFromInput] = useState("");
    const [dateToInput, setDateToInput] = useState("");
    
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
                <label>School Name</label> <br />
                <input 
                    disabled
                    type="text"
                    value={nameInput}
                    onChange={(e) => {setNameInput(e.target.value)}}/> <br />

                <label>Field of Study</label> <br />
                <input 
                    disabled
                    type="text"
                    value={studyInput}
                    onChange={(e) => {setStudyInput(e.target.value)}}/> <br />

                <label>Date From</label> <br />
                <input 
                    disabled
                    type="date"
                    value={dateFromInput}
                    onChange={(e) => {setEmailInput(e.target.value)}}/> <br />

                <label>Date To</label> <br />
                <input
                    disabled 
                    type="date"
                    value={dateToInput}
                    onChange={(e) => {setEmailInput(e.target.value)}}/> <br />

                <button type="button" onClick={handleEdit}>edit</button>
            </div>

            :
            
            <div>
                <form id="personalDetails">
                    <label>School Name</label> <br />
                    <input 
                        type="text"
                        value={nameInput}
                        onChange={(e) => {setNameInput(e.target.value)}}/> <br />

                    <label>Field of Study</label> <br />
                    <input 
                        type="text"
                        value={studyInput}
                        onChange={(e) => {setStudyInput(e.target.value)}}/> <br />

                    <input 
                        type="date"
                        value={dateFromInput}
                        onChange={(e) => {setDateFromInput(e.target.value)}}/> <br />

                    <label>Date To</label> <br />
                    <input 
                        type="date"
                        value={dateToInput}
                        onChange={(e) => {setDateToInput(e.target.value)}}/> <br />

                    <button type="button" onClick={handleSubmit}>submit</button>
                </form>
            </div>
        }
        </>
    );
};