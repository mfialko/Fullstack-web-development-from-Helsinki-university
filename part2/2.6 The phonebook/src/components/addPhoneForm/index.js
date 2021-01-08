import React from 'react';


const AddPhoneForm = ({ onSubmit, formState, onChangeName, onChangeNumber }) => {

    return (
        <form onSubmit={onSubmit}>
            <div>
                name: <input value={formState.name} onChange={onChangeName} />
            </div>
            <div>
                number: <input value={formState.number} onChange={onChangeNumber} />
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
      </form>
    )
}

export default AddPhoneForm;