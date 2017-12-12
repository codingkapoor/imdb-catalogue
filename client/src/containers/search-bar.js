import React, { Component } from 'react';
import { Form, FormGroup, Input, Button, Label } from 'reactstrap';

export default class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar col-md-8 offset-md-2">
                <Form>
                    <FormGroup className="search-form">
                        <Input type="search" name="search" id="searchMovie" placeholder="Search by movie name" />
                        <Button color="primary">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}
