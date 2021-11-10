import React from 'react';
import {connect} from 'react-redux';
import { uppdateReqText } from '../../reducers/userReducer';
// import axios from 'axios';

const Registration = (props) => {
    // constructor(props) {
    //     super(props);
    //     this.state= {
    //         name: '',
    //         lastName: '',
    //         fitstName: '', 
    //     };
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }
    // handleChange(event){
    //     console.log('handleNameChange', this);
    //     this.setState({name: event.target.value});
    // }

    const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log('form submitted and email value is', this.state.name);
    //     fetch('http://localhost:5000/users/add',{
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             name: this.state.name,
    //         })
    //     }).then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err)); 

    //     const name = this.state.name;

    //     axios.post(`http://localhost:5000/users/add`, {name})
    //     .then(res =>{
    //         debugger;
    //         console.log(res);
    //         console.log(res.data);
        // });


    };

    const onReqChange = (e) => {
        const newText = e.target.value;
        console.log('newText: ', newText);
        props.uppdateReqText(newText);
    };

        return (
        <div className="container">
            <div>form</div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Enter your name"
                    // value={this.state.name}
                    // onChange={this.handleChange}
                    onChange={onReqChange}
                    value={props.ReqText}
                />
                <button>Save</button>
            </form>
            {/* <p>{this.state.name}</p> */}
        </div>
        
        );
};

const mapStateToProps = (state) => {
    return {
        ReqText: state.ReqText
    }
};

export default connect(mapStateToProps, {uppdateReqText})(Registration);