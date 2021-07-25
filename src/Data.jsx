import React from "react";

const Data = (props) => {

    const deleteItems =()=>{
        console.log("deleted");
    }
    return (
        <>
            <div className="todo-style">
                <i className="fa fa-times" aria-hidden="true"
                    onClick={()=>{
                        props.onSelect(props.id);
                    }}
                />
                <li>{props.text}</li>
            </div>
        </>
    );
};
export default Data;