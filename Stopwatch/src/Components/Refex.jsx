import React, { useRef } from 'react';
import {}
const Refex = () => {

    const myRef = useRef(0);
    const handleRef = () => {
        myRef.current += 1; // Increment the ref value
        console.log('Updated ref value:', myRef.current);
    };

    return (
        <div>
            <p>Ref Value: {myRef.current}</p>
            <button onClick={handleRef}>Increment Ref</button>
        </div>
    );
};

export default Refex;
MQ61I90EX0BKXWL9