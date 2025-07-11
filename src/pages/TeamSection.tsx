import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Hardcoded team members data organized by year
import contents from "../data/contents";
const teamsByYear = contents.teamsByYear;
// Custom Member Card Component
import MemberCard from "../components/MemberCard";
import "../styles/TeamSection.css";

export default function TeamSection() {
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const currentTeam =
    teamsByYear[selectedYear as keyof typeof teamsByYear] || [];
  const availableYears = Object.keys(teamsByYear)
    .map(Number)
    .sort((a, b) => b - a);
  const navigate = useNavigate();

  // Show only the first 4 members (1 row)
  const visibleMembers = currentTeam.slice(0, 4);

  return (
    <div className="team-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <section style={{ position: 'relative', zIndex: 1 }}>
        <div className="team-container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="team-heading">
            <h2>
              <span className="highlight">COMMUNITY MEMBER</span>{" "}
             
            </h2>
            <p>
              Meet our talented community of developers
            </p>
          </div>

          <div className="year-tabs-container">
            <div className="year-tabs">
              {availableYears.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`year-button ${
                    selectedYear === year ? "active" : ""
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {visibleMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>

          {/* View More Button */}
          {currentTeam.length > 4 && (
           <div className="view-btn">
           <button
             className="view-more-btn"
             onClick={() => navigate("/all-members?year=" + selectedYear)}
           >
             View More
           </button>
         </div>
         
          )}
        </div>
      </section>
    </div>
  );
}
