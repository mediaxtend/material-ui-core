"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/builtin/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _withStyles = _interopRequireDefault(require("../styles/withStyles"));

var _helpers = require("../utils/helpers");

var _Modal = _interopRequireDefault(require("../Modal"));

var _Fade = _interopRequireDefault(require("../Fade"));

var _transitions = require("../styles/transitions");

var _Paper = _interopRequireDefault(require("../Paper"));

// @inheritedComponent Modal
var styles = function styles(theme) {
  return {
    root: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    paper: {
      display: 'flex',
      margin: theme.spacing.unit * 4,
      flexDirection: 'column',
      flex: '0 1 auto',
      position: 'relative',
      maxHeight: '90vh',
      overflowY: 'auto',
      // Fix IE11 issue, to remove at some point.
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 'none'
    },
    paperWidthXs: {
      maxWidth: Math.max(theme.breakpoints.values.xs, 360)
    },
    paperWidthSm: {
      maxWidth: theme.breakpoints.values.sm
    },
    paperWidthMd: {
      maxWidth: theme.breakpoints.values.md
    },
    paperFullWidth: {
      width: '100%'
    },
    paperFullScreen: {
      margin: 0,
      width: '100%',
      maxWidth: '100%',
      height: '100%',
      maxHeight: '100%',
      borderRadius: 0
    }
  };
};
/**
 * Dialogs are overlaid modal paper based components with a backdrop.
 */


exports.styles = styles;

function Dialog(props) {
  var _classNames;

  var BackdropProps = props.BackdropProps,
      children = props.children,
      classes = props.classes,
      className = props.className,
      disableBackdropClick = props.disableBackdropClick,
      disableEscapeKeyDown = props.disableEscapeKeyDown,
      fullScreen = props.fullScreen,
      fullWidth = props.fullWidth,
      maxWidth = props.maxWidth,
      onBackdropClick = props.onBackdropClick,
      onClose = props.onClose,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onEscapeKeyDown = props.onEscapeKeyDown,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      open = props.open,
      PaperProps = props.PaperProps,
      TransitionComponent = props.TransitionComponent,
      transitionDuration = props.transitionDuration,
      TransitionProps = props.TransitionProps,
      other = (0, _objectWithoutProperties2.default)(props, ["BackdropProps", "children", "classes", "className", "disableBackdropClick", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "onEnter", "onEntered", "onEntering", "onEscapeKeyDown", "onExit", "onExited", "onExiting", "open", "PaperProps", "TransitionComponent", "transitionDuration", "TransitionProps"]);
  return _react.default.createElement(_Modal.default, (0, _extends2.default)({
    className: (0, _classnames.default)(classes.root, className),
    BackdropProps: (0, _objectSpread2.default)({
      transitionDuration: transitionDuration
    }, BackdropProps),
    disableBackdropClick: disableBackdropClick,
    disableEscapeKeyDown: disableEscapeKeyDown,
    onBackdropClick: onBackdropClick,
    onEscapeKeyDown: onEscapeKeyDown,
    onClose: onClose,
    open: open,
    role: "dialog"
  }, other), _react.default.createElement(TransitionComponent, (0, _extends2.default)({
    appear: true,
    "in": open,
    timeout: transitionDuration,
    onEnter: onEnter,
    onEntering: onEntering,
    onEntered: onEntered,
    onExit: onExit,
    onExiting: onExiting,
    onExited: onExited
  }, TransitionProps), _react.default.createElement(_Paper.default, (0, _extends2.default)({
    elevation: 24,
    className: (0, _classnames.default)(classes.paper, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes["paperWidth".concat(maxWidth ? (0, _helpers.capitalize)(maxWidth) : '')], maxWidth), (0, _defineProperty2.default)(_classNames, classes.paperFullScreen, fullScreen), (0, _defineProperty2.default)(_classNames, classes.paperFullWidth, fullWidth), _classNames))
  }, PaperProps), children)));
}

Dialog.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * @ignore
   */
  BackdropProps: _propTypes.default.object,

  /**
   * Dialog children, usually the included sub-components.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * If `true`, clicking the backdrop will not fire the `onClose` callback.
   */
  disableBackdropClick: _propTypes.default.bool,

  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   */
  disableEscapeKeyDown: _propTypes.default.bool,

  /**
   * If `true`, the dialog will be full-screen
   */
  fullScreen: _propTypes.default.bool,

  /**
   * If `true`, the dialog stretches to `maxWidth`.
   */
  fullWidth: _propTypes.default.bool,

  /**
   * Determine the max width of the dialog.
   * The dialog width grows with the size of the screen, this property is useful
   * on the desktop where you might need some coherent different width size across your
   * application. Set to `false` to disable `maxWidth`.
   */
  maxWidth: _propTypes.default.oneOf(['xs', 'sm', 'md', false]),

  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: _propTypes.default.func,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: _propTypes.default.func,

  /**
   * Callback fired before the dialog enters.
   */
  onEnter: _propTypes.default.func,

  /**
   * Callback fired when the dialog has entered.
   */
  onEntered: _propTypes.default.func,

  /**
   * Callback fired when the dialog is entering.
   */
  onEntering: _propTypes.default.func,

  /**
   * Callback fired when the escape key is pressed,
   * `disableKeyboard` is false and the modal is in focus.
   */
  onEscapeKeyDown: _propTypes.default.func,

  /**
   * Callback fired before the dialog exits.
   */
  onExit: _propTypes.default.func,

  /**
   * Callback fired when the dialog has exited.
   */
  onExited: _propTypes.default.func,

  /**
   * Callback fired when the dialog is exiting.
   */
  onExiting: _propTypes.default.func,

  /**
   * If `true`, the Dialog is open.
   */
  open: _propTypes.default.bool.isRequired,

  /**
   * Properties applied to the `Paper` element.
   */
  PaperProps: _propTypes.default.object,

  /**
   * Transition component.
   */
  TransitionComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  })]),

  /**
   * Properties applied to the `Transition` element.
   */
  TransitionProps: _propTypes.default.object
} : {};
Dialog.defaultProps = {
  disableBackdropClick: false,
  disableEscapeKeyDown: false,
  fullScreen: false,
  fullWidth: false,
  maxWidth: 'sm',
  TransitionComponent: _Fade.default,
  transitionDuration: {
    enter: _transitions.duration.enteringScreen,
    exit: _transitions.duration.leavingScreen
  }
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiDialog'
})(Dialog);

exports.default = _default;