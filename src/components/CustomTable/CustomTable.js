import React from "react";
import CustomButton from "../../CustomButton/CustomButton";
import './CustomTable.css';

const CustomTable = ({
    users, 
    handleEditClick,
    handleRemoveClick
}) =>{
    return (
        <table>
            <thead><tr>
              <th>#</th>
              <th>User Name</th>
              <th>User Sername</th>
              <th>User Salary</th>
              <th>Actions</th>
            </tr></thead>
            <tbody>              
                {users.map((user, index) => (
                    <tr>
                    <td>{index+1}</td>
                    <td>{user.userName}</td>
                    <td>{user.userSurname}</td>
                    <td>{user.userSalary}</td>
                    <td>
                        <div className='buttons-wrapper'>
                            <CustomButton
                                classNames = "edit-action" 
                                handleClick={handleEditClick}
                                label = 'edit' 
                                index = {index}
                                />
                            <CustomButton
                                classNames = "remove-action" 
                                handleClick={handleRemoveClick}
                                label = 'remove'
                                index = {index} 
                                />
                        </div>
                    </td>
                    </tr>
                 ))}
              </tbody>
        </table>
    )
}

export default CustomTable;