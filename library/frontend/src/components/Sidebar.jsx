import React, { Component } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { FaBook, FaGithub, FaHome, FaList, FaPersonBooth, FaPlusCircle, FaPrint } from 'react-icons/fa';
import 'react-pro-sidebar/dist/css/styles.css';

class Sidebar extends Component {

    render() {
        return (
            <ProSidebar
            breakPoint="md">
                <SidebarHeader>
                    <div
                     style={{
                        padding: '24px',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        fontSize: 14,
                        letterSpacing: '1px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                      >Menu</div>
                </SidebarHeader>
                <SidebarContent>
                <Menu iconShape="square">
                    <MenuItem icon={<FaHome />}>Home</MenuItem>
                    <SubMenu title="Kitoblar" icon={<FaBook />}>
                        <MenuItem icon={<FaList/>}>Ro'yxat
                            <Link to='/books'/>
                        </MenuItem>
                        <MenuItem icon={<FaPlusCircle/>}>Qo'shish
                            <Link to='/addbook'/>
                        </MenuItem>
                    </SubMenu>
                    <SubMenu title="Mualliflar" icon={<FaPersonBooth />}>
                        <MenuItem icon={<FaList/>}>Ro'yxat
                            <Link to='/authors'/>
                        </MenuItem>
                        <MenuItem icon={<FaPlusCircle/>}>Qo'shish
                            <Link to='/addauthor'/>
                        </MenuItem>
                    </SubMenu>
                    <SubMenu title="Nashriyotlar" icon={<FaPrint />}>
                        <MenuItem icon={<FaList/>}>Ro'yxat
                            <Link to='/publishers'/>
                        </MenuItem>
                        <MenuItem icon={<FaPlusCircle/>}>Qo'shish
                            <Link to='/addpublisher'/>
                        </MenuItem>
                    </SubMenu>
                </Menu>
                </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/Sharofiddin/LibraryBackend"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span> Footer</span>
          </a>
        </div>
      </SidebarFooter>
            </ProSidebar>
        )
    }
}
export default Sidebar;