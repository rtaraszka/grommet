'use strict';

exports.__esModule = true;

var _polished = require('polished');

var _styledComponents = require('styled-components');

var _utils = require('../components/utils');

var brandColor = '#865CD6';
var accentColors = ['#00CCEB', '#FF7D28'];
var neutralColors = ['#0A64A0', '#DC2878', '#501EB4', '#49516F'];
var statusColors = {
  critical: '#FF324D',
  error: '#FF324D',
  warning: '#FFD602',
  ok: '#8CC800',
  unknown: '#a8a8a8',
  disabled: '#a8a8a8'
};
var darkColors = ['#333333', '#444444', '#555555', '#666666', '#777777', '#999999'];
var lightColors = ['#F6F6F6', '#EEEEEE', '#DDDDDD', '#CCCCCC', '#BBBBBB', '#AAAAAA'];
var backgroundColor = '#FFFFFF';
var textColor = '#333333';
var fontPath = 'https://fonts.gstatic.com/s/worksans/v2';

var baseSpacing = 24;

var borderWidth = 2;

exports.default = {
  global: {
    borderSize: {
      small: '1px',
      medium: baseSpacing / 8 + 'px',
      large: baseSpacing / 4 + 'px',
      xlarge: baseSpacing + 'px'
    },
    centerColumnWidth: baseSpacing * 48 + 'px',
    colors: {
      accent: accentColors,
      background: backgroundColor,
      black: '#000000',
      brand: brandColor,
      dark: darkColors,
      darkBackgroundTextColor: 'rgba(255, 255, 255, 0.85)',
      light: lightColors,
      neutral: neutralColors,
      status: statusColors,
      text: textColor,
      white: '#FFFFFF'
    },
    control: {
      font: {
        weight: 600,
        size: '19px'
      }
    },
    drop: {
      backgroundColor: '#f8f8f8',
      boxShadow: 'none',
      border: {
        width: '0px',
        radius: '0px'
      }
    },
    edgeSize: {
      xsmall: baseSpacing / 4 + 'px',
      small: baseSpacing / 2 + 'px',
      medium: baseSpacing + 'px',
      large: baseSpacing * 2 + 'px',
      xlarge: baseSpacing * 4 + 'px'
    },
    focus: {
      border: {
        width: '2px'
      }
    },
    font: {
      family: "'Work Sans', Arial, sans-serif",
      face: '\n        @font-face {\n          font-family: \'Work Sans\';\n          font-style: normal;\n          font-weight: 300;\n          src:\n            local(\'Work Sans Light\'),\n            local(\'WorkSans-Light\'),\n            url("' + fontPath + '/FD_Udbezj8EHXbdsqLUplxampu5_7CjHW5spxoeN3Vs.woff2") format(\'woff2\');\n        }\n\n        @font-face {\n          font-family: \'Work Sans\';\n          font-style: normal;\n          font-weight: 400;\n          src:\n            local(\'Work Sans\'),\n            local(\'WorkSans-Regular\'),\n            url("' + fontPath + '/ElUAY9q6T0Ayx4zWzW63VJBw1xU1rKptJj_0jans920.woff2") format(\'woff2\');\n        }\n\n        @font-face {\n          font-family: \'Work Sans\';\n          font-style: normal;\n          font-weight: 500;\n          src:\n            local(\'Work Sans Medium\'),\n            local(\'WorkSans-Medium\'),\n            url("' + fontPath + '/Nbre-U_bp6Xktt8cpgwaJBampu5_7CjHW5spxoeN3Vs.woff2") format(\'woff2\');\n        }\n\n        @font-face {\n          font-family: \'Work Sans\';\n          font-style: normal;\n          font-weight: 600;\n          src:\n            local(\'Work Sans SemiBold\'),\n            local(\'WorkSans-SemiBold\'),\n            url("' + fontPath + '/z9rX03Xuz9ZNHTMg1_ghGRampu5_7CjHW5spxoeN3Vs.woff2") format(\'woff2\');\n        }\n\n        @font-face {\n          font-family: \'Work Sans\';\n          font-style: normal;\n          font-weight: 700;\n          src:\n            local(\'Work Sans Bold\'),\n            local(\'WorkSans-Bold\'),\n            url("' + fontPath + '/4udXuXg54JlPEP5iKO5AmRampu5_7CjHW5spxoeN3Vs.woff2") format(\'woff2\');\n        }\n      ',
      size: '16px'
    },
    hover: {
      backgroundColor: (0, _polished.rgba)('#DDDDDD', 0.5),
      textColor: '#000000'
    },
    input: {
      border: {
        width: '1px',
        radius: '4px',
        color: 'rgba(0, 0, 0, 0.15)'
      }
    },
    lineHeight: '24px',
    opacity: {
      weak: '0.8',
      medium: '0.4',
      strong: '0.1'
    },
    placeholder: {
      color: '#AAAAAA'
    },
    selected: {
      backgroundColor: (0, _polished.lighten)(0.23, brandColor),
      textColor: textColor
    },
    spacing: baseSpacing + 'px',
    size: {
      xxsmall: baseSpacing * 2 + 'px', // 48
      xsmall: baseSpacing * 4 + 'px', // 96
      small: baseSpacing * 8 + 'px', // 192
      medium: baseSpacing * 16 + 'px', // 384
      large: baseSpacing * 32 + 'px', // 768
      xlarge: baseSpacing * 48 + 'px', // 1152
      full: '100%'
    }
  },
  anchor: {
    textDecoration: 'none',
    fontWeight: 600,
    color: brandColor
  },
  button: {
    border: {
      width: borderWidth + 'px',
      radius: '5px'
    },
    colors: {
      accent: accentColors[0],
      critical: statusColors.critical,
      secondary: neutralColors[1]
    },
    minWidth: baseSpacing * 5 + 'px',
    maxWidth: baseSpacing * 16 + 'px',
    padding: {
      vertical: baseSpacing / 3 - borderWidth + 'px',
      horizontal: baseSpacing - borderWidth + 'px'
    }
  },
  grommet: {},
  heading: {
    level: {
      1: {
        medium: { size: '48px', height: 1.125 },
        small: { size: '24px', height: 1.333 },
        large: { size: '96px', height: 1.125 }
      },
      2: {
        medium: { size: '36px', height: 1.23 },
        small: { size: '18px', height: 1.333 },
        large: { size: '48px', height: 1.125 }
      },
      3: {
        medium: { size: '24px', height: 1.333 },
        small: { size: '18px', height: 1.333 },
        large: { size: '36px', height: 1.23 }
      },
      4: {
        medium: { size: '18px', height: 1.333 },
        small: { size: '16px', height: 1.333 },
        large: { size: '24px', height: 1.333 }
      }
    },
    weight: 300
  },
  icon: {
    extend: (0, _styledComponents.css)(['', ' ', ''], function (props) {
      return props.color && props.color !== 'plain' && '\n        fill: ' + (0, _utils.colorForName)(props.color, props.theme) + ';\n        stroke: ' + (0, _utils.colorForName)(props.color, props.theme) + ';\n      ';
    }, function (props) {
      return props.dark && '\n        fill: ' + props.theme.global.colors.darkBackgroundTextColor + ';\n        stroke: ' + props.theme.global.colors.darkBackgroundTextColor + ';\n      ';
    })
  },
  layer: {
    backgroundColor: '#FFFFFF',
    border: {
      radius: '4px'
    },
    overlayBackgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  paragraph: {
    medium: { size: '16px', height: 1.375, maxWidth: baseSpacing * 24 + 'px' },
    small: { size: '14px', height: 1.43, maxWidth: baseSpacing * 18 + 'px' },
    large: { size: '24px', height: 1.167, maxWidth: baseSpacing * 36 + 'px' },
    xlarge: { size: '32px', height: 1.1875, maxWidth: baseSpacing * 48 + 'px' }
  },
  text: {
    medium: { size: '16px', height: 1.375 },
    xsmall: { size: '12px', height: 1.5 },
    small: { size: '14px', height: 1.43 },
    large: { size: '24px', height: 1.167 },
    xlarge: { size: '32px', height: 1.1875 },
    xxlarge: { size: '48px', height: 1.125 }
  },
  video: {
    captions: {
      background: (0, _polished.rgba)(0, 0, 0, 0.7)
    }
  }
};