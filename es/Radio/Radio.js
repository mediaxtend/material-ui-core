import _extends from "@babel/runtime/helpers/builtin/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SwitchBase from '../internal/SwitchBase';
import RadioButtonUncheckedIcon from '../internal/svg-icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '../internal/svg-icons/RadioButtonChecked';
import { capitalize } from '../utils/helpers';
import withStyles from '../styles/withStyles';
export const styles = theme => ({
  root: {
    color: theme.palette.text.secondary
  },
  checked: {},
  disabled: {},
  colorPrimary: {
    '&$checked': {
      color: theme.palette.primary.main
    },
    '&$disabled': {
      color: theme.palette.action.disabled
    }
  },
  colorSecondary: {
    '&$checked': {
      color: theme.palette.secondary.main
    },
    '&$disabled': {
      color: theme.palette.action.disabled
    }
  }
});

var _ref = React.createElement(RadioButtonUncheckedIcon, null);

var _ref2 = React.createElement(RadioButtonCheckedIcon, null);

function Radio(props) {
  const {
    classes,
    color
  } = props,
        other = _objectWithoutProperties(props, ["classes", "color"]);

  return React.createElement(SwitchBase, _extends({
    type: "radio",
    icon: _ref,
    checkedIcon: _ref2,
    classes: {
      root: classNames(classes.root, classes[`color${capitalize(color)}`]),
      checked: classes.checked,
      disabled: classes.disabled
    }
  }, other));
}

Radio.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If `true`, the component is checked.
   */
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'default']),

  /**
   * If `true`, the switch will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: PropTypes.bool,

  /**
   * The icon to display when the component is unchecked.
   */
  icon: PropTypes.node,

  /**
   * The id of the `input` element.
   */
  id: PropTypes.string,

  /**
   * Properties applied to the `input` element.
   */
  inputProps: PropTypes.object,

  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: PropTypes.func,

  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: PropTypes.func,

  /**
   * The input component property `type`.
   */
  type: PropTypes.string,

  /**
   * The value of the component.
   */
  value: PropTypes.string
} : {};
Radio.defaultProps = {
  color: 'secondary'
};
export default withStyles(styles, {
  name: 'MuiRadio'
})(Radio);