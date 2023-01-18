import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SideBarElements'

const SideBar = ({toggle, isOpen}) => {
  return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to='/'> Pizza</SidebarLink>
                <SidebarLink to='/'> Dessert</SidebarLink>
                <SidebarLink to='/'> Shawarma</SidebarLink>
                <SidebarLink to='/'> Full menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/'> Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default SideBar