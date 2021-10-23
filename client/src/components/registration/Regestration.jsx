import React from 'react';

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            name: '',
            lastName: '',
            fitstName: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        // console.log('handleNameChange', this);
        this.setState({name: event.target.value});
        
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('form submitted and email value is', this.state.name);
        fetch('http://localhost:5000/api/listen',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
            })
        }).then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err)); 
    }

    render() {
        return (
        <div className="container">
            <div>form</div>
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    placeholder="Enter your name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <button>Save</button>
            </form>
            <p>{this.state.name}</p>
        </div>
        
        );
    };
};

export default Registration;