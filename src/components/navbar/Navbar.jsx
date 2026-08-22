import React from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = ({ search, setSearch }) => {
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim() !== "") {
      navigate("/search", {
        state: { query: search },
      });
    }
  };

  return (
    <div className="bg-white rounded-4 shadow-sm p-3 mb-4">
      <div className="d-flex align-items-center">
        <div className="input-group">
          <span className="input-group-text bg-light border-0">
            <FaSearch className="text-secondary" />
          </span>

          <input
            type="text"
            className="form-control border-0 bg-light"
            placeholder="Search songs, artists..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />

          <button
            className="btn text-white px-4"
            style={{ background: "#7EA9F8" }}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <button className="btn ms-3">
          <FaBell size={20} color="#7EA9F8" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;