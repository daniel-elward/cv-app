import { useState } from "react";

export default function Work(){

    const [nameInput, setNameInput] = useState("");
    const [titleInput, setTitleInput] = useState("");
    const [respInput, setRespInput] = useState("");
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
            <div className="dataSection">
                <label>Company Name</label> <br />
                <input 
                    disabled
                    type="text"
                    value={nameInput}
                    onChange={(e) => {setNameInput(e.target.value)}}/> <br />

                <label>Job Title</label> <br />
                <input 
                    disabled
                    type="text"
                    value={titleInput}
                    onChange={(e) => {setTitleInput(e.target.value)}}/> <br />

                <label>Key Responsibilities</label> <br />
                <textarea
                    disabled
                    rows={10}
                    cols={40}
                    value={respInput}
                    onChange={(e) => {setRespInput(e.target.value)}}/> <br />

                <label>Date From</label> <br />
                <input 
                    disabled
                    type="date"
                    value={dateFromInput}
                    onChange={(e) => {setDateFromInput(e.target.value)}}/> <br />

                <label>Date To</label> <br />
                <input
                    disabled 
                    type="date"
                    value={dateToInput}
                    onChange={(e) => {setDateToInput(e.target.value)}}/> <br />

                <button type="button" onClick={handleEdit}>edit</button>
            </div>

            :
            
            <div className="dataSection">
                <form id="personalDetails">
                <label>Company Name</label> <br />
                <input 
                    type="text"
                    value={nameInput}
                    onChange={(e) => {setNameInput(e.target.value)}}/> <br />

                <label>Job Title</label> <br />
                <input 
                    type="text"
                    value={titleInput}
                    onChange={(e) => {setTitleInput(e.target.value)}}/> <br />

                <label>Key Responsibilities</label> <br />
                <textarea
                    rows={10}
                    cols={40}
                    value={respInput}
                    onChange={(e) => {setRespInput(e.target.value)}}/> <br />

                <label>Date From</label> <br />
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