import theme from './theme/themeConfig';
import HomeLink from './pages/homeLink';
import HomeWallet from './pages/homeWallet';
import { ConfigProvider } from 'antd';


export default  function Home(){
  return (
    <ConfigProvider theme={theme}>
    <HomeWallet />
  </ConfigProvider>
  );
};
