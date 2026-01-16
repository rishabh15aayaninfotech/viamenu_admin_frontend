import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaCog,
  FaQuestionCircle,
  FaFileAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ collapsed }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <aside className="crm-sidebar">
      <div className="logo">CRM</div>

      <nav>
        <NavLink to="/dashboard" className="menu-item">
          <FaHome />
          {!collapsed && <span>Dashboard</span>}
        </NavLink>

        <NavLink to="/contacts" className="menu-item">
          <FaUsers />
          {!collapsed && <span>Contacts</span>}
        </NavLink>
        <NavLink to="/leads" className="menu-item">
          <FaUsers />
          {!collapsed && <span>Leads</span>}
        </NavLink>
      </nav>

      <div className="sidebar-bottom">
        <div className="menu-item">
          <FaCog />
          {!collapsed && <span>Settings</span>}
        </div>
        <div className="menu-item">
          <FaQuestionCircle />
          {!collapsed && <span>Support & FAQ’s</span>}
        </div>
        <div className="menu-item">
          <FaFileAlt />
          {!collapsed && <span>AGB’s</span>}
        </div>

        {!collapsed && (
          <button className="impressum-btn" onClick={handleLogout}>Logout</button>
        )}
      </div>
    </aside>
  );
}
