import { useState } from 'react'
import './modal.css'
import { useDispatch } from 'react-redux'
import { changeUserName } from '../../redux/authSlice'

export default function Modal({setIsOpen}) {
      let username = localStorage.getItem('userName')
      const dispatch = useDispatch()

      const [newUsername, setUsername] = useState({"userName": ''});
      function handleInput(e) {
            setUsername({...newUsername, [e.target.name]: e.target.value})
      }

      function handleSubmit(e) {
            e.preventDefault()
            dispatch((changeUserName(newUsername)))
            .then((action) => {
                  if(action.payload) {
                        setIsOpen(false)
                  }
            })
      }

      return (
            <>
                  <div className="darkBG">
                        <div className="centered">
                              <div className="modal">
                                    <div className="modalHeader">
                                          <h5 className="heading">Edit Username</h5>
                                          <div className='flex'>
                                                <div className='modalContent'>
                                                      Current Username 
                                                </div>
                                                <div className='modalContentDesc'>{username}</div>
                                                <div className='modalContent input-wrapper'>
                                                      New Username 
                                                </div>
                                                <input className='modalContent' name='userName' type='text' onChange={handleInput}></input>
                                          </div>
                                          <div className='modalContent input-wrapper'>
                                                      Are you sure you want to change your username ?
                                                </div>
                                          <div className="modalActions">
                                                <div className="actionsContainer">
                                                      <button className="deleteBtn" onClick={handleSubmit}>
                                                            Accept
                                                      </button>
                                                      <button className="cancelBtn" onClick={() => setIsOpen(false)}>
                                                            Cancel
                                                      </button>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>

      )
}