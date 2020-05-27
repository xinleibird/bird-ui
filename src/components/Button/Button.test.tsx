import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { Button } from '../../main';
const { Link } = Button;

describe('test Button component', () => {
  it('<Button> should be render by default', () => {
    render(<Button>Button Default</Button>);
    expect(screen.getByRole('button').tagName).toEqual('BUTTON');
  });

  it('<Button> disabled attribute', () => {
    render(<Button disabled>Button Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  const clickFn = jest.fn();
  it('<Button> onclick event', () => {
    render(<Button onBtnClick={clickFn}>Button Default</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(clickFn).toHaveBeenCalled();
  });
});

describe('test Button.Link component', () => {
  it('<Button.Link> disabled attribute', () => {
    render(<Link disabled>Link</Link>);
    expect(screen.getByText('Link')).toHaveClass('disabled');
  });

  it('<Button.Link> href attribute', () => {
    render(
      <Link disabled href="www.baidu.com">
        Link
      </Link>
    );
    expect(screen.getByText('Link')).toHaveAttribute('href');
  });

  const clickFn = jest.fn();
  it('<Button.Link> onclick event', () => {
    render(<Link onClick={clickFn}>Link</Link>);
    fireEvent.click(screen.getByText('Link'));
    expect(clickFn).toHaveBeenCalled();
  });
});
