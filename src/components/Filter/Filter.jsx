import { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
  handleChange = ({ target }) => {
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
        />
      </label>
    );
  }
}

Filter.propTypes = {
  createFilterData: PropTypes.func.isRequired,
};
