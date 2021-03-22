import React from 'react'

export default function AvailableFreeSlots(props) {
    return (
        <div>
            {props.freeSlots.forEach((slot) => {
                console.log(slot);
            })}
        </div>
    )
}
