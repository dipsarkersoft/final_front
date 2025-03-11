import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/useAuth.jsx";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";

const { Sider, Content } = Layout;

export const UserDashboardCom = () => {
  const { user } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

 
  const menuItems =
    user.account_type === "Seller"
      ? [
          { 
            key: "1",
             icon: <IoHomeOutline />,
              label: "Dashboard",
               to: "/dashboard/seller/"
               },

          { 
            key: "2", 
            icon: <AiOutlineAppstoreAdd />,
             label: "Category", 
             to: "/dashboard/seller/category-create" 
          }, 

          { 
            key: "3",
            icon: <CiShoppingCart />, 
            label: "Category List",
             to: "/dashboard/seller/category-list" },

          { 
            key: "4",
             icon: <AiOutlineAppstoreAdd />,
             label: "Mango ", 
             to: "/dashboard/seller/mango-create" },

          { 
            key: "5", 
            icon: <IoHomeOutline />, 
            label: "Mango List", 
            to: "/dashboard/seller/mango-list" },

          { 
            key: "6",
             icon: <CiShoppingCart />,
              label: "Order List",
               to: "/dashboard/seller/order-list" },


               { 
                key: "7",
                 icon: <CiShoppingCart />,
                  label: "Profile",
                   to: "/dashboard/seller/profile" },

          
          
        ]
      : [
          { 
            key: "8", 
            icon: <CiShoppingCart />,
             label: "My Order", to: "/dashboard/my-order" },
             { 
              key: "9",
               icon: <CiShoppingCart />,
                label: "Profile",
                 to: "/dashboard/profile" },
         
        ];

  return (
    <Layout >
      {/* Sidebar Menu */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
      
          style={{
            position: "fixed",
            top: 55,
            bottom:0,
            left: 0,
            zIndex: 1,
           
            height: "100vh",
            transition: "width 0.2s ease-in-out",
            background: "#fff",
        }}
      >
         <div
        style={{
            height: "calc(100vh - 100px)",
            overflowY: "auto", 
            overflowX: "hidden", 
        }}
    >
        <Menu 
        mode="inline"
       
        className="mt-5"

        style={{ backgroundColor: "#f5f5f5" }} >
          
          
          {menuItems.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.to}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
        </div>
      </Sider>

      <Layout
       style={{ marginLeft: collapsed ? 80 : 200,
        transition: "margin-left 0.2s ease-in-out" }}>
        <Content
          style={{
            margin: "20px",
            padding: "30px",
            background: "#fff",
            overflowY: "auto",
            height: "calc(100vh - 64px)",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};


