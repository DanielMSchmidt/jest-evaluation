import React, { Component, PropTypes } from 'react';

class Accordion extends Component {
  render() {
    const {
      activeIndex,
      content,
      headlines,
    } = this.props;

    return (
      <ul>
        {headlines.map((headline, index) => (
          <li key={index}>
            <h3>{headline}</h3>
            {index === activeIndex && (
              <p>{content[index]}</p>
            )}
          </li>
        ))}
      </ul>
    );
  }
}

Accordion.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  content: PropTypes.arrayOf(PropTypes.node).isRequired,
  headlines: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Accordion;
