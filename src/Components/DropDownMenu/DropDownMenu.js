import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import DDMWithStyle from "./DropDownMenu.styles";

const propTypes = {
    children: PropTypes.node,
    trigger: PropTypes.node,
};

const defaultProps = {
};

const DropDownMenu = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);
    /** for ddm items */
    const handleCloseMenu = (e) => {
        e.stopPropagation();
        setIsOpen(false);
    };
    /** for the trigger component */
    const handleToggleMenu = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };
    const curRef = useRef(null);
    /** for the click outside the menu */
    const handleMousedown = (e) => {
        if (curRef.current && !curRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleMousedown);
        return () => document.removeEventListener('mousedown', handleMousedown)
    }, []);
    const { children, trigger, ...moreProps } = props;
    return (
        <div ref={curRef} style={{ display: "inline-block" }}>
            {React.cloneElement(trigger, {
                onClick: handleToggleMenu
            })}
            {isOpen && <DDMWithStyle {...{ isOpen }} {...moreProps}>
                {React.Children.map(children, (child, index) => {
                    if (child.type.displayName === "DropDownMenuItem") {
                        return React.cloneElement(child, {
                            onClose: handleCloseMenu
                        });
                    }
                })}
            </DDMWithStyle>}
        </div>);
};

DropDownMenu.displayName = "DropDownMenu";
DropDownMenu.propTypes = propTypes;
DropDownMenu.defaultProps = defaultProps;

export default DropDownMenu;
