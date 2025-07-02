import { useState } from "react";
import "../styles/FaqItem.css";

const FaqItem = ({
  faq,
  isOpen,
  toggleOpen,
}: {
  faq: any;
  isOpen: boolean;
  toggleOpen: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`faq-item ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={toggleOpen}
        className={`faq-button ${isHovered ? "hovered" : ""}`}
      >
        <span style={{ flex: 1 }}>{faq.question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`faq-icon ${isOpen ? "open" : ""}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      {isOpen && (
        <div className="faq-content">
          {/* <div className="faq-divider"></div> */}
          <p className="faq-answer">{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
