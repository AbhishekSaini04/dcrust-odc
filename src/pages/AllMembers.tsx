import React from "react";
import { useLocation } from "react-router-dom";
import contents from "../data/contents";
import MemberCard from "../components/MemberCard";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const AllMembers = () => {
  const query = useQuery();
  const year = query.get("year") || "2024";
  const teamsByYear = contents.teamsByYear;
  const members = teamsByYear[year] || [];

  return (
    <div className="min-h-screen bg-black pt-8 px-4">
      <h2 className="text-3xl font-bold text-white text-center mb-8">All Members - {year}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default AllMembers; 