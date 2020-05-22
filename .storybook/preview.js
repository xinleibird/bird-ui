import { addParameters, addDecorator } from '@storybook/react';
import { themes } from '@storybook/theming';
import { withInfo } from '@storybook/addon-info';

addParameters({
  options: {
    theme: themes.light,
  },
});

addDecorator(
  withInfo({
    inline: true,
    source: true,
    // header: false,
  })
);
