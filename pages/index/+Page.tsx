import React from 'react'
import { Counter } from './Counter.js'
import { Movies } from './Movies.js'

export default function Page() {
  return (
    <>
      <h1>My Vike app</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      <Movies />
    </>
  )
}
