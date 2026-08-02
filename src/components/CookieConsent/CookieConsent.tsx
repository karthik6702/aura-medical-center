import React, { useEffect, useState } from "react";
import { Cookie } from "lucide-react";
import "./CookieConsent.css";

export const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");

    if (!consent) {
      setTimeout(() => {
        setVisible(true);
      }, 800);
    }
  }, []);

  const handleChoice = (choice: "accepted" | "rejected") => {
    localStorage.setItem("cookieConsent", choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <div className="cookie-icon">
          <Cookie size={28} />
        </div>

        <div className="cookie-text">
          <h3>We Value Your Privacy</h3>

          <p>
            We use cookies to improve your browsing experience, personalize
            content, analyze website traffic, and maintain a secure experience.
            By clicking <strong>Accept All</strong>, you consent to our use of
            cookies.
          </p>
        </div>

        <div className="cookie-buttons">
          <button
            className="cookie-btn reject"
            onClick={() => handleChoice("rejected")}
          >
            Reject
          </button>

          <button
            className="cookie-btn accept"
            onClick={() => handleChoice("accepted")}
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};