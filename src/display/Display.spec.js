// Test away

import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react'

import Dashboard from '../dashboard/Dashboard'
import Controls from '../controls/Controls'
import Display from './Display';

describe("<Display />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Display />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("gate defaults to unlocked and open", () => {
    const { findByText } = render(<Display />)
    findByText(/unlocked/i)
    findByText(/open/i)
  })

  // displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
  it("displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise", () => {
    
    const display = render(
      // <Dashboard>
        <Display closed={true} locked={false} />
      //   <Controls />
      // </Dashboard>
    )
    expect(display.findByText("Closed"))
    // findByText("Closed")
    })

    // displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
    it("displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise", () => {
    
      const display = render(
        // <Dashboard>
          <Display closed={true} locked={true} />
        //   <Controls />
        // </Dashboard>
      )
      expect(display.findByText("Locked"))
      // findByText("Closed")
    })

    // when `locked` or `closed` use the `red-led` class
    it("when `locked` or `closed` use the `red-led` class", () => {
    
      const {container} = render(
        // <Dashboard>
          <Display closed={true} locked={true} />
        //   <Controls />
        // </Dashboard>
      )
      container.classList.contains("red-led")
      // findByText("Closed")
    })

    // when `unlocked` or `open` use the `green-led` class
    it("when `locked` or `closed` use the `red-led` class", () => {
    
      const {container} = render(
        // <Dashboard>
          <Display closed={false} locked={false} />
        //   <Controls />
        // </Dashboard>
      )
      container.classList.contains("red-led")
      // findByText("Closed")
    })
})




  
  