import React from "react";
import "../styles/MemberCard.css"
const MemberCard = ({ member }: { member: any }) => {
  return (
    <div className="member">
      {/* Profile Image - Screenshot style: full width, fixed height, light gray bg, rounded, centered */}
      <div className="member-image">
        <img
          src={member.image || "/api/placeholder/128/128"}
          alt={member.username || member.name}
          className="w-full h-full object-cover"
          style={{background: 'transparent'}}
          onError={(e) => {
            e.currentTarget.src = "/api/placeholder/128/128";
          }}
        />
      </div>
      
      {/* Name */}
      <div className="member-container">
      <h3 className="member-name">
        {member.name || member.username}
      </h3>
      
      {/* Role/Position */}
      <p className="member-role">
        {member.role || member.post}
      </p>
      
      {/* Description */}
      <p className="member-dis">
        {member.about || member.dis}
      </p>
      
      {/* Social Links */}
      <div className="flex gap-0 mt-auto">
        {member.github && (
          <a 
            href={member.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.45 24 17.12 24 12.02 24 5.74 18.27.5 12 .5z"/>
            </svg>
          </a>
        )}
        {member.linkedin && (
          <a 
            href={member.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
            </svg>
          </a>
        )}
        {member.twitter && (
          <a 
            href={member.twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.32 4.57c-.88.39-1.83.65-2.83.77 1.02-.61 1.8-1.58 2.17-2.73-.95.56-2.01.97-3.13 1.19-.9-.96-2.18-1.56-3.59-1.56-2.72 0-4.92 2.2-4.92 4.92 0 .39.04.77.13 1.13-4.09-.2-7.71-2.16-10.13-5.14-.42.73-.67 1.58-.67 2.48 0 1.71.87 3.21 2.19 4.09-.81-.03-1.56-.25-2.23-.62v.06c0 2.38 1.7 4.37 3.95 4.82-.41.11-.85.17-1.3.17-.32 0-.63-.03-.93-.08.63 1.96 2.45 3.39 4.61 3.43-1.69 1.32-3.82 2.11-6.14 2.11-.4 0-.79-.02-1.17-.07 2.18 1.4 4.77 2.21 7.55 2.21 9.06 0 14.01-7.5 14.01-14.01 0-.21 0-.42-.01-.63.96-.69 1.8-1.56 2.46-2.55z"/>
            </svg>
          </a>
        )}
        </div>
      </div>
    </div>
  );
};

// Remove TeamGrid and restore default export
export default MemberCard;