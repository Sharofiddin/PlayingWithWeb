import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import React, { Component } from 'react';
import BookList from './BooksList'
import 'react-pro-sidebar/dist/css/styles.css';

class HomePage extends Component {
    render() {
        return (
            <>
                <ProSidebar className="col-md-4">
                    <SidebarHeader>
                        Menu
  </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <SubMenu title="Kitoblar">
                                <MenuItem path="/books" exact component={HomePage}>Kitoblar ro'yxati
    </MenuItem>
                                <MenuItem>Yangi kitob qo'shish</MenuItem>
                            </SubMenu>
                            <SubMenu title="Talabalar">
                                <MenuItem>Talabalar ro'yxati</MenuItem>
                            </SubMenu>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        TIU 2011-2015
  </SidebarFooter>
                </ProSidebar>
                <BookList className="col-md-8" />
            </>
        );

    }
}
export default HomePage;