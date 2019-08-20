// Test away

import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react'

import Controls from './Controls';
import Dashboard from '../dashboard/Dashboard'
import Display from '../display/Display'
import { fireEvent } from 'react-testing-library';

describe("<Controls />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Controls />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  // provide buttons to toggle the `closed` and `locked` states.
  it("provides buttons to toggle the `closed` and `locked` states", () => {
    const controls = render(<Controls />)

    const closeButton = controls.getByText("Close Gate")
    const lockButton = controls.getByText("Lock Gate")
    fireEvent.click(closeButton)
    fireEvent.click(lockButton)
    
  })

  // buttons' text changes to reflect the state the door will be in if clicked
  it("buttons' text changes to reflect the state the door will be in if clicked", () => {
    
    const buttonText = ''
    const { getByText, findByText } = render(
      <Dashboard>
        <Display />
        <Controls />
      </Dashboard>  
    )

    findByText("Close Gate")
    fireEvent.click(getByText("Close Gate"))
    findByText("Open Gate")
    fireEvent.click(getByText("Open Gate"))
  })

  // the closed toggle button is disabled if the gate is locked
  it("the closed toggle button is disabled if the gate is locked", () => {
    const { getByText, findByText } = render(
      <Dashboard>
        <Display />
        <Controls />
      </Dashboard>  
    )

    fireEvent.click(getByText("Close Gate"))
    fireEvent.click(getByText("Lock Gate"))
    findByText("disabled")
  })

  // the locked toggle button is disabled if the gate is open
  it("the locked toggle button is disabled if the gate is open", () => {
    const { getByText, findByText } = render(
      <Dashboard>
        <Display />
        <Controls />
      </Dashboard>  
    )
    
    findByText("disabled")
    fireEvent.click(getByText("Close Gate"))
    fireEvent.click(getByText("Lock Gate"))
    findByText("disabled")

  })

});