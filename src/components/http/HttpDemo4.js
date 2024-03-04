import React, { useEffect, useState } from 'react'
import axios from 'axios';
import loggerHOC from '../HOC/loggerHOC';

// Using custom hooks--Making multiple requests with axios)  
// export default function HttpDemo4() {
  function HttpDemo4() {
let [githubData , setGithubData] = useState([]);

   const userNames = ['apple', 'ball', 'cat'];
  
   const fetchGithubData = async() =>{
    let promiseArr = [];
    for(let userName of userNames){
      let promise = axios.get(`https://api.github.com/users/${userName}`)
      promiseArr.push(promise);
    }
    try{
    let responseArr = await axios.all(promiseArr);
    responseArr = responseArr.map(resp => resp.data)
    console.log(responseArr);
    setGithubData(responseArr);
  } catch (err) {
    console.log('Something went wrong')
  }
   }

  useEffect(() => {
    fetchGithubData()
  },[])

   return (
    <>
      <h2 className='text-center'>github data using axios.all</h2>
      <table className='table table-striped table bordered'>
          <tbody>
            {githubData.map(row=>{
              return <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.login}</td>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.followers}</td>
                    <td>{row.location}</td>
                    <td>{row.public_repos}</td>
              </tr>
            })}
          </tbody>
      </table>
    </>
  )
}
// export default HttpDemo4;
export default loggerHOC(HttpDemo4);