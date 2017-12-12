import React, { Component } from 'react';
import { Form, FormGroup, Input, Button, Label } from 'reactstrap';
import { connect } from 'react-redux';

import { getMovies } from '../actions';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = { term: '' };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.getMovies(1, this.state.term);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    render() {
        return (
            <div className='search-bar col-md-8 offset-md-2'>
                <Form onSubmit={ this.onFormSubmit }>
                    <FormGroup className='search-form'>
                        <Input type='search' name='search' value={ this.state.term } onChange={ this.onInputChange } placeholder='Search by movie name' />
                        <Button color='primary'>
                            <i className='fa fa-search' aria-hidden='true'></i>
                        </Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default connect(null, { getMovies })(SearchBar);
