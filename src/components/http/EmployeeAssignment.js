// import React, { useState } from 'react'
// import { useEffect } from 'react';
// import AddEmployee from '../employeeCRUD/AddEmployee'
// import EditEmployee from '../employeeCRUD/EditEmployee';
// import axios from 'axios';
// import EmployeeList from '../employeeCRUD/EmployeeList';

// export default function HttpDemo2() {
//     const initialEmployees = [
//         { eId: 101, name: "sanjay", sal: 5000 },
//         { eId: 104, name: "deepak", sal: 8000 },
//         { eId: 103, name: "ranjan", sal: 7000 },
//         { eId: 102, name: "manoj", sal: 9000 },
//     ];
//     const [employees, setEmployees] = useState(initialEmployees);
//     const [isEdit, setIsEdit] = useState(false);
//     const initialEmp = { eId: '', name: '', sal: 0 }
//     const [selectedEmployee, setSelectedEmployee] = useState(initialEmp);

//     const fetchEmployees = async () => {
//         let response = await axios.get(initialEmployees);
//         console.log(response.data);
//         setEmployees(response.data)
//     }
//      useEffect(() => {
//         fetchEmployees()
//     },[]);

//     const deleteEmployee = (idToDelete) => {
//         let filteredEmployees = employees.filter(emp => emp.eId !== idToDelete);
//         setEmployees([...filteredEmployees])
//     }
//     const addEmployee = (emp) => {
//         let tempArr = [...employees, emp]
//         setEmployees(tempArr);
//     }
//     const editEmployee = (emp) => {
//         setSelectedEmployee(emp);
//         setIsEdit(true);
//     }
//     const saveEditedEmployee = (editedEmp) => {
//         let updatedEmployees = employees.map(emp => {
//             if (emp.eId === editedEmp.eId) {
//                 return editedEmp;
//             } else {
//                 return emp;
//             }
//         })
//         setEmployees([...updatedEmployees]);
//         setIsEdit(false);
//     }
//     const cancelSave = () => {
//         setSelectedEmployee(initialEmp);
//         setIsEdit(false);
//     }

//     return <>
//         <h2 className='text-center'>This is EmployeeCRUD Component</h2>
//         <div className='container'>
//             <div className='row'>
//                 <div className='col-sm-8'>
//                     <h3>Employee List</h3>
//                     <EmployeeList
//                         employees={employees}
//                         deleteEmployee={deleteEmployee}
//                         editEmployee={editEmployee}
//                     />
//                 </div>
//                 <div className='col-sm-4'>
//                     {
//                         isEdit ?
//                             <EditEmployee
//                                 selectedEmployee={selectedEmployee}
//                                 saveEditedEmployee={saveEditedEmployee}
//                                 cancelSave={cancelSave}
//                             />
//                             :
//                             <AddEmployee addEmployee={addEmployee} />
//                     }
//                 </div>
//             </div>
//         </div>
//     </>
// }

import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import EmployeeCrud from '../employeeCRUD/EmployeeCrud';
import EmployeeList from '../employeeCRUD/EmployeeList';

export default function EmployeeAssignment() {
    const [employees, setEmployees] = useState([]);

    const fetchEmployees = async () => {
        let response = await axios.get(EmployeeCrud);
        console.log(response.data);
        setEmployees(response.data)
    }
     useEffect(() => {
        fetchEmployees()
    },[]);

    return <>
        <h2 className='text-center'>Fetch Employees data </h2>
        <div className='container'>
            <div className='row'>
                {employees.map(employee => {
                    return < EmployeeList employee={employee} />
                })}
                    </div>
        </div>
    </>
}