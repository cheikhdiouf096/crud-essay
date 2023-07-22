import React, { useState, useEffect } from 'react';
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore"
import { db } from "../firebase-config.js";

export default function Ajouter() {

    const [newName, setNewName] = useState("");
    const [newTel, setNewTel] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");

    const name = newName;
    const tel = newTel;  
    const email = newEmail;

    const newUser = { name, tel, email};

    const createUser = async () =>{
      await addDoc(usersCollectionRef, newUser);
    }

    console.log(createUser);

    const deleteUser = async (id) => {
      const userDoc = doc(usersCollectionRef, id);
      await deleteDoc(userDoc)
    }
    const updateUser = async (id) => {
      const userDoc = doc(usersCollectionRef, id);
       await updateDoc(userDoc, newUser)
    }


  useEffect(() => {
    const setUseurs = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
    };
    
    setUseurs();
  }, []);



  

  return (
    <div>
          <h1>Bakeli Mbour</h1>

          <Form onSubmit={createUser}>
          <Form.Group className="mb-3" >
            <InputGroup>
              <InputGroup.Text id="">B</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="User Name"
                onChange={(e) => setNewName(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" >
            <InputGroup>
              <InputGroup.Text id="">B</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="User Tel"
                onChange={(e) => setNewTel(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" >
            <InputGroup>
              <InputGroup.Text id="">A</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="User Email"
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add
            </Button>
          </div>
        </Form>
          
         
           {/* <input type='text'
            placeholder='name...' 
            value={name}
            required 
            onChange={(e) =>{
              setNewName(e.target.value)
            }}
            />
          <input type='text'
            placeholder='tel...'
            value={tel}
            required
            onChange={(e) =>{
              setNewTel(e.target.value)
            }}
            />
          <input type='text'
            placeholder='email...'
            value={email}
            required
            onChange={(e) =>{
              setNewEmail(e.target.value)
            }}
            />
            
          <button onClick={createUser}  className='btn btn-success'>create users</button> */}

          
          <div className='container justify-content-center'>
            <div className='row'>
                    <table >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>tel</th>
                        <th>email</th>
                        <th>action</th>
                      </tr>
                    </thead>
                    <tbody>
              {users.map((user, index) => {
                return(
                  
                      <tr key={user.id}>
                        <th>{index + 1}</th>
                        <td >{user.name}</td>
                        <td>{user.tel}</td>
                        <td >{user.email}</td>
                        {/* <td>{user.statut}</td> */}
                        <td>
                          <button onClick={() => {
                          updateUser(user.id);
                        }} className='btn btn-primary text-left-0'>editer</button>

                          <button onClick={() => {
                          deleteUser(user.id);
                        }} className='btn btn-danger text-left-50' >supprimer</button></td>
                      </tr>
                )
                
            })}
            </tbody>
            </table>
            </div>
          </div>
    </div>
  )
}






          

          // getDocs(usersCollectionRef).then((snapshot) => {
//     let usersCollectionRef = [];
//     snapshot.docs.forEach((doc)=>{
//       usersCollectionRef.push({...doc.data(), id:doc.id});
//     })
//     console.log(usersCollectionRef);
// })