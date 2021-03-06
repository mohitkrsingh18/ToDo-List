
import React, { useState } from 'react';
import Data from "./Data";

const App = () => {

    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList("");
    };
     
    const deleteItems=(id)=>{
        console.log("deleted");

        setItems((oldItems)=>{
            return oldItems.filter((arrEl,index)=>{
             return index !== id;
            })
        })
    };

    return <>

        <div className="main-div">
            <div className="center-div">
                <br />
                <h1>ToDo List</h1>
                <br />
                <input type="text" placeholder="Add a Items"
                    value={inputList}
                    onChange={itemEvent} />
                <button onClick={listOfItems}> + </button>

                <ol>

                    {
                        Items.map((itemval,index) => {
                            return <Data 
                            key={index}
                            id={index}
                            onSelect={deleteItems}
                            text={itemval} />;
                        })
                    }
                </ol>
            </div>
        </div>

    </>
}


export default App;