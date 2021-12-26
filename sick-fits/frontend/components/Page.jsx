import React from 'react';
import { node } from 'prop-types';

const Page = ({ children }) => (
  <div>
    <h2>I am the page component!</h2>
    {children}
  </div>
);

Page.propTypes = {
  children: node.isRequired,
};

export default Page;
