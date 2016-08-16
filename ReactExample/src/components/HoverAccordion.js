import React, { Component, PropTypes } from 'react';

export default class HoverAccordion extends Component {
  static propTypes = {
    headlines: PropTypes.arrayOf(PropTypes.node).isRequired,
    content: PropTypes.arrayOf(PropTypes.node).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: undefined,
    };
  }

  setActive(index) {
    this.setState({
      activeIndex: index,
    });
  }

  render() {
    const {
      headlines,
      content,
    } = this.props;
    const activeIndex = this.state.activeIndex;

    return (
      <ul>
        {headlines.map((headline, index) => (
          <li key={index} onMouseEnter={this.setActive.bind(this, index)}>
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
