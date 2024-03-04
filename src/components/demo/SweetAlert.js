import React from 'react'
import Swal from 'sweetalert2'

export default function SweetAlert() {
    const clickHandler = () =>
    // Swal.fire({
    //     title: 'Auto close alert!',
    //     text: 'I will close in 2 seconds',
    //     timer: 2000
    // })
    Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
  return <>
    <h3>PLease click the below button to open alert box</h3>
    <button onClick={clickHandler}>Click me</button>
  </>
}