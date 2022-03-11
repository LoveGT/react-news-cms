import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import SideMenu from '../../components/SideMenu'
import TopHeader from '../../components/TopHeader'
import Home from './Home'
import UserManage from './UserManage'
import RightList from './RightManage/RightList'
import RoleList from './RightManage/RoleList'

export default function NewsSandBox() {
  return (
    <div>
      <SideMenu></SideMenu>
      <TopHeader></TopHeader>

      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/user-manage/list" component={UserManage} />
        <Route path="/role-manage/list" component={RoleList} />
        <Route path="/right-manage/role/list" component={RoleList} />
        <Route path="/right-manage/right/list" component={RightList} />
        <Redirect from='/' to="/home"/>
      </Switch>
    </div>
  )
}
