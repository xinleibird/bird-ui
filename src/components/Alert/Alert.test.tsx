import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Alert } from '../main';

describe('test Alert component', () => {
  it('<Alert> should be render by default', () => {
    render(<Alert message="Alert test" description="Alert describe" type="info" />);
    expect(screen.getByText('Alert test')).toHaveClass('alert-message-wrapper');
  });

  it('<Alert> should can be closed ', () => {
    render(<Alert message="Alert test" description="Alert describe" closeable />);
    // Because use CSSTransitionGroup, there's some delay, so set some sleep.
    setTimeout(() => {
      fireEvent.click(screen.getByTestId('alert-close-btn'));
    }, 1000);
    setTimeout(() => {
      expect(screen.getByText('Alert test')).not.toBeInTheDocument();
    }, 1000);
  });
});
