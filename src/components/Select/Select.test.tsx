import React from 'react';
import { render } from '@testing-library/react';
import Select from '.';


describe("Select", () => {
  it("should match snapshot", () => {
    const { getByText } = render(<Select />);
    const linkElement = getByText(/Select works!/i);
    expect(linkElement).toBeInTheDocument();
  });
});