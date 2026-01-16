import { FaSearch, FaBell, FaQuestionCircle, FaChevronLeft } from "react-icons/fa";

export default function Topbar({ onToggle }) {
  return (
    <header className="crm-topbar">
      <button className="collapse-btn" onClick={onToggle}>
        <FaChevronLeft />
      </button>

      <div className="search-box">
        <FaSearch />
        <input placeholder="Search for lead or contact" />
      </div>

      <div className="topbar-actions">
        <FaQuestionCircle />
        <FaBell />
        <div className="avatar">A</div>
      </div>
    </header>
  );
}
