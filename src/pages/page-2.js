import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Success!</h1>
    <p>Your message was sent. Expect a reply within 1-3 business days.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
