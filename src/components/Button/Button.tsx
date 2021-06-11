import { FC } from 'react';
import AntButton, { ButtonProps } from 'antd/lib/button';

import styles from './Button.module.scss';

const Button: FC<ButtonProps> = ({ children, ...otherProps }) => {
  return (
    <AntButton
      {...otherProps}
      className={styles.button}
    >
      { children }
    </AntButton>
  )
}

export default Button
