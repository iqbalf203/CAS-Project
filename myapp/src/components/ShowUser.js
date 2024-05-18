import React, { useState, useEffect } from 'react';
import { MDBBadge, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import UserService from '../services/UserService';
import { useSelector } from 'react-redux';


const ShowUser = () => {
    const userId = useSelector(store => store.user.currentUser._id)
    const [citizens, setCitizens] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [filteredCitizens, setFilteredCitizens] = useState([])

    useEffect(() => {
    fetchCitizens()
    }, [])
    

    const fetchCitizens = ()=>{
        UserService.getCitizens(userId).then((resp)=>{
            setCitizens(resp.data)
            setFilteredCitizens(resp.data)
        })
    }
        
        

    useEffect(() => {
        setFilteredCitizens(citizens.filter(citizen=>citizen.name.toLowerCase().includes(searchValue.toLowerCase())))
    }, [searchValue])
    


    return (
        <div>
            <input
                type='text'
                placeholder='Search by Name'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className='form-control mb-3'
                style={{ borderRadius: '20px', border: 'none', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
            />

            <MDBTable align='middle' responsive>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Username</th>
                        <th scope='col'>Phone</th>
                        <th scope='col'>Is Citizen</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {filteredCitizens.map((user, index) => (
                        <tr key={index}>
                            <td>
                                <div className='d-flex align-items-center'>
                                    <div className='ms-3'>
                                        <p className='fw-bold mb-0'>{user.name}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className='text-muted mb-0'>{user.email}</p>
                            </td>
                            <td>
                                <p className='fw-normal mb-0'>{user.username}</p>
                            </td>
                            <td>
                                <p className='fw-normal mb-0'>{user.phone}</p>
                            </td>
                            <td>
                                <MDBBadge color= 'success' pill>
                                    {user.role==='Citizen' ? 'Yes' : 'No'}
                                </MDBBadge>
                            </td>
                        </tr>
                    ))}
                </MDBTableBody>
            </MDBTable>
        </div>
    );
}
export default ShowUser;
