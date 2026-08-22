import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import {
  FaUser,
  FaBell,
  FaSave,
  FaCog,
  FaMoon,
} from "react-icons/fa";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    notifications: true,
    darkMode: false,
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("moodmusic-user"));

    if (data) {
      setUser(data);
    } else {
      setUser({
        name: "Sam",
        username: "sam123",
        email: "sam@email.com",
        notifications: true,
        darkMode: false,
      });
    }
  }, []);

  const saveProfile = () => {
    localStorage.setItem("moodmusic-user", JSON.stringify(user));
    alert("Profile updated successfully!");
  };

  return (
    <div
      className="container-fluid py-3"
      style={{ background: "#EEF3FF", minHeight: "100vh" }}
    >
      <div className="row">
        <div className="col-lg-2">
          <Sidebar />
        </div>

        <div className="col-lg-10">
          {/* Header */}
          <div
            className="rounded-5 p-4 mb-4"
            style={{
              background: "linear-gradient(135deg,#D7E7FF,#C6DCFF)",
            }}
          >
            <div className="d-flex align-items-center gap-3">
              <div
                className="rounded-circle d-flex justify-content-center align-items-center"
                style={{
                  width: 75,
                  height: 75,
                  background: "#7EA9F8",
                  color: "white",
                }}
              >
                <FaUser size={32} />
              </div>

              <div>
                <h2 className="fw-bold mb-0">Mood Music</h2>
                <p className="text-secondary mb-0">
                  Personal Profile & Settings
                </p>
              </div>
            </div>
          </div>

          {/* Profile Card */}
          <div
            className="rounded-5 p-4 shadow-sm"
            style={{ background: "#F8FAFF" }}
          >
            <h4 className="fw-bold mb-4">
              <FaCog className="me-2" />
              Edit Profile
            </h4>

            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Full Name
                </label>

                <input
                  className="form-control"
                  value={user.name}
                  onChange={(e) =>
                    setUser({ ...user, name: e.target.value })
                  }
                />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Username
                </label>

                <input
                  className="form-control"
                  value={user.username}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      username: e.target.value,
                    })
                  }
                />
              </div>

              <div className="col-12">
                <label className="form-label fw-semibold">
                  Email Address
                </label>

                <input
                  type="email"
                  className="form-control"
                  value={user.email}
                  onChange={(e) =>
                    setUser({ ...user, email: e.target.value })
                  }
                />
              </div>
            </div>

            <hr className="my-4" />

            {/* App Settings */}
            <h5 className="fw-bold mb-3">App Settings</h5>

            <div className="d-flex justify-content-between align-items-center border rounded-4 p-3 mb-3">
              <div>
                <h6 className="mb-0">
                  <FaBell className="me-2" />
                  Notifications
                </h6>
                <small className="text-secondary">
                  Get new music recommendations
                </small>
              </div>

              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={user.notifications}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      notifications: e.target.checked,
                    })
                  }
                />
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center border rounded-4 p-3 mb-4">
              <div>
                <h6 className="mb-0">
                  <FaMoon className="me-2" />
                  Dark Mode
                </h6>
                <small className="text-secondary">
                  UI preference (demo setting)
                </small>
              </div>

              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={user.darkMode}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      darkMode: e.target.checked,
                    })
                  }
                />
              </div>
            </div>

            <button
              className="btn text-white rounded-pill px-4"
              style={{ background: "#7EA9F8" }}
              onClick={saveProfile}
            >
              <FaSave className="me-2" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;