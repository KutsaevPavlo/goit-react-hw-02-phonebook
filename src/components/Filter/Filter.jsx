import { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledFilter } from './Filter.styled';

export class Filter extends Component {
  handleChange = ({ target }) => {
    this.props.createFilterData({ filter: target.value });
  };

  render() {
    return (
      <StyledFilter>
        Find contacts by name
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={this.handleChange}
        />
      </StyledFilter>
    );
  }
}

Filter.propTypes = {
  createFilterData: PropTypes.func.isRequired,
};
