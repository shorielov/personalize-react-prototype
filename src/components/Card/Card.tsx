import { FC } from 'react';
import { Card as AntCard, Divider } from 'antd';

import styles from './Card.module.scss';

interface Props {
  title: string,
};

const Card: FC<Props> = ({ children, title }) => {
  return (
    <AntCard
      bordered={false}
      bodyStyle={ {
        display: 'flex',
      } }
      className={styles.wrapper}
    >
      <AntCard.Grid
        className={styles.title}
        hoverable={false}
      >
        { title }
      </AntCard.Grid>
      <AntCard.Grid
        className={styles.content}
        hoverable={false}
      >
        { children }
      </AntCard.Grid>
    </AntCard>
  )
}

export default Card;
