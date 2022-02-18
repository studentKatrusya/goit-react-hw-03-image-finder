import { Component } from 'react';
import { Wrap, Form, Btn, Label, Input } from './Searchbar.styled';

export default class SearchBar extends Component {
  state = {
    searchQuery: '',
  };

  handleNameChange = event => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      alert('Enter your request.');
      return;
    }

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <Wrap>
        <Form onSubmit={this.handleSubmit}>
          <Btn type="submit">
            <Label>Search</Label>
          </Btn>

          <Input
            type="text"
            // name="searchQuery"
            value={this.state.searchQuery}
            onChange={this.handleNameChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Wrap>
    );
  }
}
