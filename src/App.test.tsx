// src/App.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';


describe('Rich Text Editor', () => {
  it('renders editor and bold button', () => {
    render(<App />);
    const editor = screen.getByRole('textbox');
    const boldButton = screen.getByRole('button', { name: /bold/i });

    expect(editor).toBeInTheDocument();
    expect(boldButton).toBeInTheDocument();
  });

  it('executes bold command when bold button is clicked', () => {
    render(<App />);
    const boldButton = screen.getByRole('button', { name: /bold/i });

    fireEvent.click(boldButton);

    expect(document.execCommand).toHaveBeenCalledWith('bold', false, undefined);
  });

  it('renders an editable content area', () => {
    render(<App />);
    const editor = screen.getByRole('textbox');
    expect(editor).toHaveAttribute('contenteditable', 'true');
  });
});
