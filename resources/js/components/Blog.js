import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route }  from 'react-router-dom';

export default class Blog extends Component {

    constructor(){

        super();
        //super shows initial state of the app
        //console.log(super());

        this.state = {
            blogs: []
        }
       // console.log(super());
    }

    componentWillMount(){
        axios.get('/api/blog')
        .then(response => {
            this.setState({
                blogs: response.data
            })
        }).catch(error =>{
            console.log(errors);
        }) 
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Blog Component</div>
                            {this.state.blogs.map(blog => 
                                <div className="card-body" key={blog.id}>
                                <Link to={"/blog/" + blog.id }> {blog.name} </Link>
                                </div>
                             )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Blog />, document.getElementById('example'));
}
