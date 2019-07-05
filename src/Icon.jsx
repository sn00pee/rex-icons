import React from 'react';
import { string } from 'prop-types';
import { composeClassName } from 'rex-react-utils';
import './css/rex-icons.css';
import './Icon.scss';

export default function Icon({ name, className }) {
  const iconName = `rex-icon ${name}`;
  const classes = composeClassName([iconName, className]);

  return <span aria-hidden="true" {...classes} />;
}

Icon.defaultProps = {
  name: 'laptop-l',
  className: '',
};

Icon.propTypes = {
  name: string,
  className: string,
};
