import React, { useEffect } from 'react'

const employeeHOC = (InputComponent) =>{ 
    const EnhancedComponent = (props) => {
        useEffect(() => {
            console.log(`${InputComponent.name} Added`);
            return () =>{
                // onclick={deleteEmployee}
                console.log(`${InputComponent.name} Deleted`);
            }
        },[]);
        useEffect(()=> {
            // onclick={editEmployee}
            console.log(`${InputComponent.name} Edited`);
        });
        return <InputComponent {...props} />
    }
    return EnhancedComponent;
}
export default employeeHOC;