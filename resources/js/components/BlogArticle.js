import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class BlogArticle extends Component {

    constructor(props) {
        super(props);
        this.state={
            post:{}
        };
    }

    componentDidMount(){

        axios.get("/api/blog/" + this.props.match.params.id)
        .then(response => {
            console.log(response);
            this.setState({post : response.data[0]});
        }).catch(error => console.log(error));
    }
  
    render() {
        if(this.state.post){
            return (
                <div>
                <h1>{this.state.post.name}</h1>
                <p>{this.state.post.body}</p>
                </div>
            );
        } else {
            return null;
        }
    }
}
