import React from "react";
import PropTypes from "prop-types";
import InputBoxWithStyle, { InputAreaWithStyle, SearchButtonDiv } from "./InputBox.styles";
import { Icon } from "../Icon";
import tokens from '../Util/Token';

const propTypes = {
    /** The type of textbox. */
    kind: PropTypes.string,

    /** This prop is not for search textbox */
    hasError: PropTypes.bool
};

const defaultProps = {
    kind: "default",
    hasError: false
};

const InputBox = React.forwardRef((props, ref) => {
    if (props.kind == "inputarea") {
        return (<InputAreaWithStyle ref={ref} {...props} />);
    } else if (props.kind == "search") {
        return (
            <SearchButtonDiv>
                <Icon kind="search" style={{
                    marginLeft: "5%"
                }} color={tokens.inputbox.placeholderColor.search}
                />
                <InputBoxWithStyle ref={ref} {...props} />
            </SearchButtonDiv>
        );
    }
    else return (<InputBoxWithStyle ref={ref} {...props} />);
});

InputBox.displayName = "InputBox";
InputBox.propTypes = propTypes;
InputBox.defaultProps = defaultProps;

export default InputBox;
