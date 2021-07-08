// Test away

import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react'

import Dashboard from './Dashboard';
import Display from '../display/Display'
import Controls from '../controls/Controls'

describe("<Dashboard />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Dashboard />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("cannot be closed or opened if it is locked", () => {
    const { getByText, findByText } = render(<Dashboard />)
    findByText(/locked/i)
    fireEvent.click(getByText("Close Gate"));
    fireEvent.click(getByText("Lock Gate"));
    fireEvent.click(getByText("Open Gate"));
    fireEvent.click(getByText("Open Gate"));
    findByText("Locked")
    findByText("Closed")
    findByText("Open Gate")
    findByText("Unlock Gate")
  })

  it("displays if gate is open/closed and if it is locked/unlocked", () => {
    let locked = false;
    let closed = false;

    const { getByText, findByText } = render(
      <Dashboard>
        <Display locked={locked} closed={closed} />
        <Controls />
      </Dashboard>);

    fireEvent.click(getByText("Close Gate"));
    findByText("Open Gate")
    fireEvent.click(getByText("Open Gate"));
    findByText("Close Gate")
  })

});