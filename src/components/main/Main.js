import React, { startTransition } from 'react';
// import Header from '../header/Header';
// import Conditionaldemo1 from '../conditional/Conditionaldemo1';
// import Databindingdemo from '../demo/Databindingdemo';
// import ListDemo2 from '../ListItem/ListDemo2';
// import CounterDemo from '../state/CounterDemo';
// import CounterDemo1 from '../state/CounterDemo1';
// import CounterDemo2 from '../state/CounterDemo2';
// import GreetDemo from '../props/GreetDemo';
// import Addition from '../demo/Addition';
// import MyModal from '../demo/MyModal';
// import StateDemo1 from '../state/StateDemo1';
// import ToggleDemo from '../state/ToggleDemo';;
// import PasswordDemo from '../state/PasswordDemo';
// import RemainingCharacter from '../state/RemainingCharacter';
// import StateDropDown from '../state/StateDropDown';
// import Addition from '../state/Addition';
// import Folder from '../folderexplorer/Folder';
// import SweetAlert from '../demo/SweetAlert';
// import ReactModal from '../demo/ReactModal';
import ProductList from '../ListItem/ProductList';
import ToDoCRUD from '../ToDoCRUD/ToDoCRUD';
import EventDemo from '../event/EventDemo';
import EventDemo1 from '../event/EventDemo1';
import EventDemo2 from '../event/EventDemo2';
import EventDemo3 from '../event/EventDemo3';
import EmployeeCrud from '../employeeCRUD/EmployeeCrud';
import PureDemo from '../state/PureDemo';
import PureDemo1 from '../state/PureDemo1';
import MemoParent from '../memo/MemoParent';
import MemoParent1 from '../memo1/MemoParent1';
import LifeCycledemo1 from '../lifecycle/LifeCycledemo1';
import LifeCycleDemo2 from '../lifecycle/LifeCycleDemo2';
import LifeCycleDEmo3 from '../lifecycle/LifeCycleDEmo3';
import LifeCycleDemo4 from '../lifecycle/LifeCycleDemo4';
import RefDemo from '../form/RefDemo';
import RefDemo1 from '../form/RefDemo1';
import FormDemo from '../form/FormDemo';
import HttpDemo from '../http/HttpDemo';
import HttpDemo1 from '../http/HttpDemo1';
import UserList from '../ListItem/UserList';
import HttpDemo2 from '../http/HttpDemo2';
import HttpDemo3 from '../http/HttpDemo3';
import ClickCounter from '../HOC/ClickCounter';
import HttpDemo4 from '../http/HttpDemo4';
import ProductCard from '../ListItem/ProductCard';
import ProductAssignment from '../http/ProductAssignment';
import Hovercounter from '../HOC/Hovercounter';
import CounterHoc from '../HOC/CounterHoc';
import EmployeeAssignment from '../http/EmployeeAssignment';
import { Route, Routes } from 'react-router-dom';
import Home from '../Routing/Home';
import AboutUs from '../Routing/AboutUs';
import Career from '../Routing/Career';
import ContactUs from '../Routing/ContactUs';
import NotFound from '../Routing/NotFound';
import ProductDetails from '../Routing/ProductDetails';
import ProductHttp from '../http/ProductHttp';
import Products from '../Routing/Products';
import Users from '../Routing/Users';
import UserDetails from '../Routing/UserDetails';

export default function Main(props) {
  return <div style= {{ 'minHeight' : '400px' }}>
    {/* <Conditionaldemo1/> */}
  {/* <Header /> */}
  {/* <Databindingdemo /> */}
  {/* <ListDemo />
  <ListDemo1 /> */}
  {/* <ListDemo2 /> */}
  {/* <CounterDemo /> */}
  {/* <CounterDemo1 /> */}
  {/* <CounterDemo2 /> */}
  {/* <GreetDemo name = 'rohit' msg='good morning'>
        <div>This content goes to child Component</div>
    </GreetDemo> */}

  {/* <Addition num1={10}/> */}

  {/* <MyModal modalTitle={'modal heading'} name={props.name}> 
    <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div> 
 </MyModal> */}

{/* <MyModal modalTitle={'This is modal heading'}>
  <>
<table class='table table-bordered table-striped'>
  <tbody>
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
  </tbody>
</table>
<p>this is a paragraph</p>
<h4>hii mahi</h4>
</>
   </MyModal>  */}
  {/* <StateDemo1 /> */}
  {/* <ToggleDemo /> */}
   {/* <PasswordDemo /> */}
   {/* <RemainingCharacter /> */}
  {/* <StateDropDown /> */}
  {/* <Addition /> */}
  {/* <Folder /> */}
  {/* <SweetAlert /> */}
  {/* <ReactModal /> */}
  {/* <ProductList /> */}
  {/* <ToDoCRUD /> */}
  {/* <EventDemo /> */}
  {/* <EventDemo1 /> */}
  {/* <EventDemo2 /> */}
  {/* <EventDemo3 /> */}
  {/* <EmployeeCrud /> */}
   {/* <PureDemo /> */}
   {/* <PureDemo1 /> */}
   {/* <MemoParent /> */}
   {/* <MemoParent1 /> */}
   {/* <LifeCycledemo1 /> */}
{/* <LifeCycleDemo2 /> */}
   {/* <LifeCycleDEmo3 /> */}
   {/* <LifeCycleDemo4 /> */}
   {/* <UserList /> */}
   {/* <RefDemo /> */}
   {/* <RefDemo1 /> */}
   {/* <FormDemo /> */}
   {/* <HttpDemo /> */}
    {/* <HttpDemo1 /> */}
    {/* <HttpDemo2 />
    <HttpDemo3 />
    <HttpDemo4 /> */}
    {/* <ProductCard /> */}
    {/* <ProductAssignment /> */}
    {/* <ClickCounter />
    <Hovercounter /> */}
    {/* <EmployeeAssignment /> */}     
    <Routes>
       <Route exact path="/" element={<Home name = {props.name} />} />
       <Route exact path="/home" element={<Home name={props.name} />} />
       <Route exact path="/AboutUs" element={<AboutUs />} />
       <Route exact path="/career" element={<Career />} />
       <Route exact path="/ContactUs" element={<ContactUs />} />
       <Route exact path="/Products" element={<Products />} />
       <Route path="/ProductDetails/:id" element={<ProductDetails />} />
       <Route exact path="/Users" element={<Users />} />
       <Route path="/UserDetails/:id" element={<UserDetails />} />
       <Route path="*" element={<NotFound />} />
  </Routes>
      {/* <ProductHttp /> */}
  </div> 
}