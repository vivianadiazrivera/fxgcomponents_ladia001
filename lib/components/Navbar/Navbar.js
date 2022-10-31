import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

export const App = ({ background,color}) => (
  <Menu style={{ background: `${background}`,color: `${color}` }} mode="horizontal" defaultSelectedKeys={['mail']}>
    <Menu.Item style={{ background: `${background}`,color: `${color}` }}  key="mail" icon={<MailOutlined />}>
      Mail
    </Menu.Item>
    <Menu.SubMenu  key="SubMenu" title="Contact - Sous menu" icon={<SettingOutlined />}>
      <Menu.Item key="two" icon={<AppstoreOutlined />}>
        Téléphone
      </Menu.Item>
      <Menu.Item key="three" icon={<AppstoreOutlined />}>
        Adresse
      </Menu.Item>
      <Menu.ItemGroup title="Réseaux sociaux">
        <Menu.Item key="four" icon={<AppstoreOutlined />}>
          Facebook
        </Menu.Item>
        <Menu.Item key="five" icon={<AppstoreOutlined />}>
          Linkedln
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu.SubMenu>
  </Menu>
);
Menu.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string 
};


export default App;