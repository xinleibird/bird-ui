import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: 'hotpink',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: 'white',
  appContentBg: 'silver',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
  "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
  fontCode: `source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace`,

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: 'hotpink',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Bird Ui Design',
  brandUrl: 'https://github.com/xinleibird/bird-ui',
  brandImage: 'https://raw.githubusercontent.com/xinleibird/bird-ui/master/public/logo180.png',
});
