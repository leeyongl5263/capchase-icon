import React from "react";
import PropTypes from "prop-types";
import CommentBoxStyles from "./CommentBox.styles";

const propTypes = {
    children:PropTypes.node.isRequired,
    boxColor: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    maxCharacter: PropTypes.string
};


const defaultProps = {
  boxColor: "#bbbbbc",
  height: "79px",
  width: "252px",
  maxCharacter: "90"
};



function CommentBox(props) {

  let maxChar = props.maxCharacter;
  let anyStr = props.children;

  if (anyStr.length >= maxChar) {
    anyStr = anyStr.substring(0,maxChar)+"...";
  }
  return <CommentBoxStyles {...props}>{anyStr}</CommentBoxStyles>;
  }




CommentBox.displayName = "CommentBox";
CommentBox.propTypes = propTypes;
CommentBox.defaultProps = defaultProps;

export default CommentBox;