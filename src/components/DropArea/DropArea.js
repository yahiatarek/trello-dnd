import React, { useState } from 'react';


const DropArea = ({onDrop}) => {
    const [showDropArea, setShowDropArea] = useState(false);
    const handleDrop = (event) => {
        event.preventDefault();
        onDrop(event);
        setShowDropArea(false);
      };
    

    return (
        <div 
            className={showDropArea ? 'drop-area' : 'hide-drop-area'}
            onDragEnter={() => setShowDropArea(true)} 
            onDragLeave={() => setShowDropArea(false)}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
        >
                Drop here
        </div>
    );
};

export default DropArea;