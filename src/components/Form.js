import React from 'react';
import'../assets/form.css'

const Form = ({setModal}) => {

    return (
        <div className='modal'>
            <div className="form-input">
                <h2 id='form-title'>This is  the form name</h2>
                <input type="text" aria-label='test-label' placeholder='your name'/>
                <h2 id='form-title'>This is  the form lastname</h2>
                <input type="text" aria-label='test-label' placeholder='your name'/>
                <h2 id='form-title'>This is  the form age</h2>
                <input type="number" aria-label='test-label' placeholder='your name'/>
                <div className="form-options">                    
                <div class="pretty p-default p-curve">
                    <input type="checkbox" />
                    <div class="state">
                        <label>Default</label>
                    </div>
                </div>
                    <select name="country">
                        <option value="Argentina">Argentina</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Chile">Chile</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Venezuela">Venezuela</option>
                    </select>
                </div>
                <button onClick={()=>setModal(false)}  >close</button>
            </div>
        </div>
    );
};

export default Form;