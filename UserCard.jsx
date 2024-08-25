import React from "react";

const UserCard = () => {
  const userData = [
    {
      online: true,
      profile: "img/1.jpg",
      name: "Saratha",
      city: "Theni",
      description: "SEO Specialist",
      skills: ["HTML", "CSS", "SEO", "Digital Marketing"],
    },
    {
      online: false,
      profile: "img/3.jpg",
      name: "Chandru",
      city: "Chennai",
      description: "Front-end Developer",
      skills: [
        "HTML",
        "CSS",
        "Bootstrap",
        "TailwindCSS",
        "JavaScript",
        "React-js",
      ],
    },
    {
      online: true,
      profile: "img/2.jpg",
      name: "Keerthana",
      city: "Theni",
      description: "Back-end Developer",
      skills: ["HTML", "CSS", "Python", "SQL"],
    },
    {
      online: false,
      profile: "img/4.jpg",
      name: "pranav",
      city: "Theni",
      description: "CEO",
      skills: ["HTML", "CSS", "Python", "SQL", "javaScript", "react-js"],
    },
  ];
  return (
    <>
      {userData.map((user, index) => (
        <div className="card-container" key={index}>
          <span className={user.online ? "status online" : "status offline"}>
            {user.online ? "ONLINE" : "OFFLINE"}
          </span>
          <img src={user.profile} alt="user" className="img" />
          <h3>{user.name}</h3>
          <h3>{user.city}</h3>
          <p>{user.description}</p>
          <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
          </div>
          <div className="skills">
            <h6>skills</h6>
            <ul>
              {user.skills.map((skill, index) => (
                <li key="index">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserCard;
