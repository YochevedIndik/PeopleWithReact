import React from 'react';
import PersonRow from './PersonRow';
import PeopleForm from './PeopleForm';


class PeopleTable extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        age: '',
        people: []
    }


    onFirstNameChange = e => {
        this.setState({ firstName: e.target.value });
    }
    onLastNameChange = e => {
        this.setState({ lastName: e.target.value });
    }
    onAgeChange = e => {
        this.setState({ age: e.target.value });
    }
    onAddClick = () => {
        const { firstName, lastName, age, people } = this.state;
        const person = { firstName, lastName, age };
        const copy = [person, ...people];

        this.setState({ people: copy, firstName: '', lastName: '', age: '' });
    }
    onClearClick = () => {
        this.setState({ people: [] });
    }
  
    generateTable = () => {
        if (this.state.people.length === 0) {
            return <h1 className='justify-content-center'>No person added. Be the first!</h1>
        }
        else {
            return <div className='row'>
                <table className="table table-bordered table-striped" >
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.people.map((p, k) => <PersonRow person={p} key={k} />)}
                    </tbody>
                </table>

            </div>
        }
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <PeopleForm
                        onAddClick={this.onAddClick} onClearClick={this.onClearClick} onFirstNameChange={this.onFirstNameChange}
                        onLastNameChange={this.onLastNameChange} onAgeChange={this.onAgeChange} firstName={this.state.firstName}
                        lastName={this.state.lastName} age={this.state.age} />
                </div>
                {this.generateTable()};
                
               
           
                
            </div>

        )
    }
}




export default PeopleTable;
