import React, { Component } from 'react'
import { Link } from '@reach/router'
import AuthorCard from './AuthorCard'

class Authors extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authorData: [],
        }
    }
    renderAuthors() {
        return this.state.authorData.map(author =>{
            let authorURL = `${author.first} ${author.last}`
            return <Link to={authorURL} ><AuthorCard showEdit={this.props.showEdit} hide={true} author={author} /></Link>
            })
    }
    componentDidMount() {
        this.props.getAuthors()
            .then(res => res.json())
            .then(authors => this.setState({authorData: authors}))
    }

    render() {
        return (
            <div>
                <div className="bg-secondary py-3">
                    <h1 className="bold"> Authors </h1>
                    <div className="container d-flex flex-wrap justify-content-center">
                        {this.renderAuthors()}
                    </div>
                </div>
            </div>
            )
    }
}

export default Authors;
