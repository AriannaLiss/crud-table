import React, { useState } from 'react';
import CustomButton from "../../CustomButton/CustomButton";
import CustomInput from "../CustomInput/CustomInput";
import CustomTable from '../CustomTable/CustomTable';
import './App.css';

const initialValues = {
  userName: '',
  userSurname: '',
  userSalary: '',
  userHobby: ''
}

function App() {
  const [userData, setUserData] = useState(initialValues);
  const [users,setUsers] = useState([]);
  const [editableUserData, setEditableUserData] = useState({
    isEdit: false,
    userIndex: null
  })

  const isFilledFields = userData.userName && userData.userSurname && userData.userSalary;

  const handleRemoveClick = (index) => {
    setUsers(users.filter((user,userIndex)=>userIndex!==index))
  }

  const handleEditClick = (index) => {
    setUserData(users[index])
    setEditableUserData({
      isEdit:true, 
      userIndex: index
    })
  }

  const handleImputChange = (e, fieldName) => setUserData((prevState) => ({
      ...prevState,
      [fieldName]: e.target.value
  }))

  const handleSubmitUser = (e) => {
      e.preventDefault();
      if(isFilledFields){
      if(editableUserData.isEdit){
          const editedData = users;
          editedData.splice(editableUserData.userIndex, 1, userData)
          setUsers(editedData)
          setEditableUserData(false, null)
      } else {
          setUsers((prevState) => [...prevState, userData])
      } 
      setUserData(initialValues)
      }
  }

  const handleCleanClick = () => setUserData(initialValues)

  return (
    <div className="wrapper">
      <div className="wrapper-content">
        <div className="table-data">
          <CustomTable 
            users = {users}
            handleEditClick = {handleEditClick}
            handleRemoveClick = {handleRemoveClick}
          />
        </div>

        <div>
        <form onSubmit={handleSubmitUser} onReset={handleCleanClick}>
            <CustomInput
              placeholder="Write your name *" 
              handleChange={handleImputChange}
              value = {userData.userName}
              fieldName = 'userName'
            />
            
            <CustomInput 
              placeholder="Write your surname *" 
              handleChange={handleImputChange}
              value = {userData.userSurname}
              fieldName = 'userSurname'
            />
            
            <CustomInput 
              placeholder="Write your salary *" 
              handleChange={handleImputChange}
              value = {userData.userSalary}
              fieldName = 'userSalary'
            />    
            
            <CustomInput 
              placeholder="Write your hobbies" 
              handleChange={handleImputChange}
              value = {userData.userHobby}
              fieldName = 'userHobby'
            />    

            <div className="buttons-wrapper">
                <CustomButton type='reset' label='Clean'/>
                
                <CustomButton 
                type="submit" 
                disabled={!isFilledFields}
                label = {editableUserData.isEdit?'Edit':'Add'} 
                /> 
            </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default App;
