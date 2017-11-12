import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #333;
  background-color: #bbb;

  h1 {
    letter-spacing: 4px;
    font-size: 5rem;
    margin: 2rem;
    margin-bottom: 1.3rem;
    font-weight: 400;
  }
  p {
    font-size: 2.5rem;
    margin-top: 0;
    margin-bottom: 3rem;
  }

  a {
    text-decoration: none;
    font-size: 2rem;
    color: #333;
    border: 1px solid black;
    padding: 6px 10px;
  }
`

const NotFoundPage = () => (
  <NotFound>
    <h1>404</h1>
    <p>Page Not Found</p>
    <Link to="/">Go Home</Link>
  </NotFound>
)

export default NotFoundPage
