import React from 'react';

class PeopleForm extends React.Component {
    render() {
        const { firstName, lastName, age, onFirstNameChange, onLastNameChange, onAgeChange, onAddClick, onClearClick } = this.props;
        return (
            <div className='row'>
                <div className='col-md-6 md-offset-2'>
                    <input value={firstName} onChange={onFirstNameChange} className='form-control' placeholder='First Name' />
                </div>
                <div className='col-md-6 md-offset-2'>
                    <input value={lastName} onChange={onLastNameChange} className='form-control' placeholder='Last Name' />
                </div>
                <div className='col-md-6 md-offset-2'>
                    <input value={age} onChange={onAgeChange} className='form-control' placeholder='Age' />
                </div>
                <div className='col-md-4'>
                    <button onClick={onAddClick} className='btn btn-primary btn-block'>Add</button>
                </div>
                <div className='col-md-4'>
                    <button onClick={onClearClick} className='btn btn-warning btn-block'>Clear</button>
                </div>
            </div>
        )
    }

}
export default PeopleForm;