import _extends from "@babel/runtime/helpers/builtin/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '../styles/withStyles';
import Typography from '../Typography';
export const styles = theme => ({
  root: {
    flex: '1 1 auto',
    minWidth: 0,
    padding: `0 ${theme.spacing.unit * 2}px`,
    '&:first-child': {
      paddingLeft: 0
    }
  },
  inset: {
    '&:first-child': {
      paddingLeft: theme.spacing.unit * 7
    }
  },
  dense: {
    fontSize: theme.typography.pxToRem(13)
  },
  primary: {
    '&$textDense': {
      fontSize: 'inherit'
    }
  },
  secondary: {
    '&$textDense': {
      fontSize: 'inherit'
    }
  },
  textDense: {}
});

function ListItemText(props, context) {
  const {
    children,
    classes,
    className: classNameProp,
    disableTypography,
    inset,
    primary: primaryProp,
    secondary: secondaryProp
  } = props,
        other = _objectWithoutProperties(props, ["children", "classes", "className", "disableTypography", "inset", "primary", "secondary"]);

  const {
    dense
  } = context;
  let primary = primaryProp || children;

  if (primary && !disableTypography) {
    primary = React.createElement(Typography, {
      variant: "subheading",
      className: classNames(classes.primary, {
        [classes.textDense]: dense
      }),
      component: "span"
    }, primary);
  }

  let secondary = secondaryProp;

  if (secondary && !disableTypography) {
    secondary = React.createElement(Typography, {
      variant: "body1",
      className: classNames(classes.secondary, {
        [classes.textDense]: dense
      }),
      color: "textSecondary"
    }, secondary);
  }

  return React.createElement("div", _extends({
    className: classNames(classes.root, {
      [classes.dense]: dense,
      [classes.inset]: inset
    }, classNameProp)
  }, other), primary, secondary);
}

ListItemText.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Alias for the `primary` property.
   */
  children: PropTypes.node,

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
   * If `true`, the children won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `children` (or `primary`) text, and optional `secondary` text
   * with the Typography component.
   */
  disableTypography: PropTypes.bool,

  /**
   * If `true`, the children will be indented.
   * This should be used if there is no left avatar or left icon.
   */
  inset: PropTypes.bool,

  /**
   * The main content element.
   */
  primary: PropTypes.node,

  /**
   * The secondary content element.
   */
  secondary: PropTypes.node
} : {};
ListItemText.defaultProps = {
  disableTypography: false,
  inset: false
};
ListItemText.contextTypes = {
  dense: PropTypes.bool
};
export default withStyles(styles, {
  name: 'MuiListItemText'
})(ListItemText);