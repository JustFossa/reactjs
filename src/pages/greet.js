import React from 'react';

const names = [
    {id: 1, name: "John" },
    {id: 2, name: "JustFossa"},
    {id: 3, name: "Lukykuk"}
]

function Name(props) {
    return <li>I am {props.name}</li>
}

function Welcome() {
    return (<>
        <ul>
            {names.map((list) => <Name key={list.id} name={list.name}/>)}
        </ul>
    </>)
}


export default Welcome