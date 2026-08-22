import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import {
  FaMusic,
  FaSmile,
  FaSearch,
  FaCompactDisc,
  FaPaperPlane,
} from "react-icons/fa";

const About = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const submit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const features = [
    {
      icon: <FaSmile size={28} color="#7EA9F8" />,
      title: "Mood Playlists",
      text: "Listen to Happy, Sad, Chill, Romantic and Focus playlists instantly.",
    },
    {
      icon: <FaSearch size={28} color="#59C9A5" />,
      title: "Smart Search",
      text: "Search songs and artists just like YouTube Music.",
    },
    {
      icon: <FaCompactDisc size={28} color="#FF6B81" />,
      title: "Vinyl Player",
      text: "Enjoy music with a beautiful modern record player interface.",
    },
  ];

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
          <div
            className="rounded-5 p-5 text-center mb-4"
            style={{
              background: "linear-gradient(135deg,#D7E7FF,#C6DCFF)",
            }}
          >
            <FaMusic size={50} color="#5A7FD8" />

            <h1 className="fw-bold mt-3">About MeloMood</h1>

            <p className="text-secondary fs-5">
              Music that understands every emotion.
            </p>
          </div>

          <div
            className="rounded-5 p-4 shadow-sm mb-4"
            style={{ background: "#F8FAFF" }}
          >
            <h3 className="fw-bold mb-3">Our Story 🎵</h3>

            <p className="text-secondary">
              MeloMood was born from a simple belief that music feels
              more meaningful when it matches your emotions. Whether
              you're celebrating a happy moment, relaxing after a long
              day, studying, or healing from heartbreak, the perfect
              soundtrack is only one mood away.
            </p>

            <p className="text-secondary mb-0">
              Instead of endlessly scrolling through songs, MeloMood
              helps you discover playlists based on your feelings using
              the YouTube music library, wrapped inside a calm and
              beautiful listening experience.
            </p>
          </div>

          <div className="row g-4 mb-4">
            {features.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="rounded-4 p-4 shadow-sm h-100"
                  style={{ background: "#F8FAFF" }}
                >
                  {item.icon}

                  <h5 className="fw-bold mt-3">
                    {item.title}
                  </h5>

                  <p className="text-secondary small mb-0">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="rounded-5 p-4 shadow-sm"
            style={{ background: "#F8FAFF" }}
          >
            <h3 className="fw-bold mb-4">Contact Us</h3>

            <form onSubmit={submit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">
                    Your Name
                  </label>

                  <input
                    className="form-control"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">
                    Subject
                  </label>

                  <input
                    className="form-control"
                    required
                    value={form.subject}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        subject: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    className="form-control"
                    required
                    value={form.message}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        message: e.target.value,
                      })
                    }
                  ></textarea>
                </div>

                <div className="col-12">
                  <button
                    className="btn text-white rounded-pill px-4"
                    style={{ background: "#7EA9F8" }}
                  >
                    <FaPaperPlane className="me-2" />
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div
            className="rounded-4 p-3 text-center mt-4 text-white"
            style={{ background: "#7EA9F8" }}
          >
            <h5 className="mb-1">MeloMood v1.0</h5>
            <small>
              React • Bootstrap • YouTube Data API
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;