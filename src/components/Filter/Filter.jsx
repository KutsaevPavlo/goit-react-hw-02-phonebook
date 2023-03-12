import { Component } from 'react';
export class Filter extends Component {
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
    this.props.createFilterData({ filter: target.value });
  };

  render() {
    return (
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={this.handleChange}
          //   value={this.props}
        />
      </label>
    );
  }
}
