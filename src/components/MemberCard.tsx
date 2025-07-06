import React from "react";

const MemberCard = ({ member }: { member: any }) => {
  return (
    <div
      style={{
        background: "#181A1B",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 32,
        marginBottom: 18,
        boxShadow: "0 2px 16px 0 rgba(0,0,0,0.12)",
        minHeight: 320,
        maxWidth: 350,
        marginLeft: "auto",
        marginRight: "auto",
        gap: 0,
      }}
    >
      <img
        src={member.image}
        alt={member.name}
        style={{
          width: 160,
          height: 160,
          objectFit: "cover",
          borderRadius: 12,
          background: "#222",
          marginBottom: 10,
        }}
      />
      <div style={{ fontSize: 22, fontWeight: 600, color: "#fff", marginBottom: 2, textAlign: "left", width: "100%" }}>
        {member.name}
      </div>
      <div style={{ fontSize: 16, color: "#b0b0b0", fontWeight: 500, marginBottom: 4, textAlign: "left", width: "100%" }}>
        {member.role}
      </div>
      <div style={{ fontSize: 15, color: "#b0b0b0", lineHeight: 1.5, textAlign: "left", width: "100%" }}>
        {member.about}
      </div>
    </div>
  );
};

export default MemberCard;
