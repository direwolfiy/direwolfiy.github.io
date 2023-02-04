import MHeader from "./MHeader";
import MFooter from "./MFooter";
import { Layout } from 'antd';
import { globalData } from '../libs/global'
import styles from './IndexLayout.module.scss'

const { Header, Content, Footer } = Layout;


export default function IndexLayout({ children }) {
  return (
    <Layout className={styles.layouts}>
      <Header style={{ background: 'white', borderBottom: '1px solid #f0f0f0' }}>
        <MHeader></MHeader>
      </Header>
      <Content className={styles.contents}>{children}</Content>
      <Footer >
        <MFooter>{globalData.footerText}</MFooter>
      </Footer>
    </Layout >
  );
}
