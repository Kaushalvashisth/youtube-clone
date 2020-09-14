import React, { Component } from 'react';
import { Paper, TextField } from '@material-ui/core';

class SearchBar extends Component {
    state = {
        searchTerm: '',
    }
    handleChange = (event) => this.setState({ searchTerm: event.target.value });
    handleSubmit = (event) => {
        const { searchTerm } = this.state;
        // console.log(searchTerm);
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTerm);
        event.preventDefault();
    }
    render() {
        return (
            <Paper elevation={10} style={{ padding: '25px' }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange}></TextField>
                </form>
            </Paper>
        );
    }
}

export default SearchBar;