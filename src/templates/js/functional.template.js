// @flow

function generateFunctionalComponent(COMPONENT_NAME: string): string {
  return `
import React from 'react';
import PropTypes from 'prop-types';

const ${COMPONENT_NAME} = ({}) => (
  <div></div>
);

${COMPONENT_NAME}.propTypes = {};

${COMPONENT_NAME}.defaultProps = {};

export default ${COMPONENT_NAME};
`
}

export default generateFunctionalComponent
