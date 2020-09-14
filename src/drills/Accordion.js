import React from "react";
import { render } from "@testing-library/react";

class Accordion extends React.Component {
  static defaultProps = { sections: [] };

  constructor(props) {
    super(props);
  }

  state = {
    tabIndex: null,
  };

  setTabIndex = (sectionIndex) => {
    this.setState({ tabIndex: sectionIndex });
  };

  renderLi(section, idx, setTabIndex) {
    console.log("RenderLi Ran", this.props.sections);
    return (
      <li key={idx}>
        <button type="button" onClick={() => this.setTabIndex(idx)}>
          {section.title}
        </button>
        {this.state.tabIndex === idx && <p>{section.content}</p>}
      </li>
    );
  }

  render() {
    const { setTabIndex } = this.state;
    const { sections } = this.props;
    return (
      <div>
        <ul>
          {sections.map((section, idx) =>
            this.renderLi(section, idx, setTabIndex)
          )}
        </ul>
      </div>
    );
  }
}

export default Accordion;
