import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "./AdminLayout.css";

export default function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`crm-layout ${collapsed ? "collapsed" : ""}`}>
      <Sidebar collapsed={collapsed} />
      <div className="crm-main">
        <Topbar onToggle={() => setCollapsed(!collapsed)} />
        <div className="crm-content">
          <Outlet /> {/* 👈 PAGE CONTENT HERE */}
        </div>
      </div>
    </div>
  );
}
