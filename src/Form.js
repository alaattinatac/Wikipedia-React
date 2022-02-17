import React, { useState } from 'react';
export default function Form(props) {
    const [search, setSearch] = useState("")
    function handleChange(e) {
        setSearch(e.target.value)
        console.log(search)
    }
    function handleSubmit(e) {
        e.preventDefault()
        props.handleData(search)
        setSearch("")
        console.log("submitted")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> Search:
                    <input type='text' onChange={handleChange}>

                    </input>
                </label>
                <button type='Submit'>Submit</button>
            </form>
        </div>
    )
}