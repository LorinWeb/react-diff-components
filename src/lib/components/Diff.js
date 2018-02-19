import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Diff.scss";

class Diff extends Component {
  diff = [];

  printPart = function(part, classModifier, condition = true, key = 0) {
    return (
      !!condition && (
        <span
          key={part.key}
          className={"Diff__text Diff__text--" + classModifier}
        >
          {part.value}
        </span>
      )
    );
  };

  switchPartProps = function(part, index = 0) {
    part = { ...part };
    part.key = index;
    part.added = part[0] === 1 || part.added;
    part.removed = part[0] === -1 || part.removed;
    part.value = part[1] || part.value;
    return part;
  };

  printDiff = function() {
    return (
      <span className="Diff">
        {this.diff.map(this.switchPartProps).map(part => {
          if (part.added) {
            return this.printPart(part, "added", !this.props.hideAdded);
          } else if (part.removed) {
            return this.printPart(part, "removed", !this.props.hideRemoved);
          } else {
            return this.printPart(part, "equal", !this.props.hideEqual);
          }
        })}
      </span>
    );
  };

  render() {
    return null;
  }
}

Diff.defaultProps = {
  hideAdded: false,
  hideRemoved: false,
  hideEqual: false
};

Diff.propTypes = {
  hideAdded: PropTypes.bool,
  hideRemoved: PropTypes.bool,
  hideEqual: PropTypes.bool
};

export { Diff };
