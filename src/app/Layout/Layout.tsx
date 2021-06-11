import AntLayout from 'antd/lib/layout';

import styles from './Layout.module.scss';

const { Header, Content } = AntLayout;

const Layout: React.FC = ({ children }) => {
  return (
    <AntLayout className={styles.wrapper}>
      <Header className={styles.header}>
        Never Stop Exploring
      </Header>
      <Content className={styles.container}>
        { children }
      </Content>
    </AntLayout>
  );
}

export default Layout;
