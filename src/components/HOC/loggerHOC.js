import React, { useEffect } from 'react'

const loggerHOC = (InputComponent) =>{ 
    const EnhancedComponent = (props) => {
        useEffect(() => {
            console.log(`${InputComponent.name} Mounted`);
            return () =>{
                console.log(`${InputComponent.name} UnMounted`);
            }
        },[]);
        useEffect(()=> {
            console.log(`${InputComponent.name} Updated`);
        });
        return <InputComponent {...props} />
    }
    return EnhancedComponent;
}
export default loggerHOC;