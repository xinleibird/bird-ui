import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import Alert from './index';

describe('test Alert component', () => {
  it('<Alert> should be render by default', () => {
    render(<Alert message="Alert test" description="Alert describe" type="info" />);
    expect(screen.getByText('Alert test')).toHaveClass('alert-message-wrapper');
  });

  it('<Alert> should can be closed ', () => {
    render(<Alert message="Alert test" description="Alert describe" closeable />);
    fireEvent.click(screen.getByTestId('alert-close-btn'));
    expect(screen.getByText('Alert test')).toHaveClass('alert-message-wrapper');
  });
});
