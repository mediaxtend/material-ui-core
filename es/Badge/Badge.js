import _extends from "@babel/runtime/helpers/builtin/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import { capitalize } from '../utils/helpers';
const RADIUS = 12;
export const styles = theme => ({
  root: {
    position: 'relative',
    display: 'inline-flex',
    // For correct alignment with the text.
    verticalAlign: 'middle'
  },
  badge: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -RADIUS,
    right: -RADIUS,
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeight,
    fontSize: theme.typography.pxToRem(RADIUS),
    width: RADIUS * 2,
    height: RADIUS * 2,
    borderRadius: '50%',
    backgroundColor: theme.palette.color,
    color: theme.palette.textColor,
    zIndex: 1 // Render the badge on top of potential ripples.

  },
  colorPrimary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  colorSecondary: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  },
  colorError: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText
  }
});

function Badge(props) {
  const {
    badgeContent,
    children,
    classes,
    className: classNameProp,
    color,
    component: ComponentProp
  } = props,
        other = _objectWithoutProperties(props, ["badgeContent", "children", "classes", "className", "color", "component"]);

  const badgeClassName = classNames(classes.badge, {
    [classes[`color${capitalize(color)}`]]: color !== 'default'
  });
  return React.createElement(ComponentProp, _extends({
    className: classNames(classes.root, classNameProp)
  }, other), children, React.createElement("span", {
    className: badgeClassName
  }, badgeContent));
}

Badge.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content rendered within the badge.
   */
  badgeContent: PropTypes.node.isRequired,

  /**
   * The badge will be added relative to this node.
   */
  children: PropTypes.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'error']),

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
} : {};
Badge.defaultProps = {
  color: 'default',
  component: 'span'
};
export default withStyles(styles, {
  name: 'MuiBadge'
})(Badge);