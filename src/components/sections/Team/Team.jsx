import { useEffect, useRef, useState } from "react";

import "./Team.css";

import team from "../../../data/team/team";


// ======================================================
// SCROLL REVEAL HOOK
// ======================================================

function useRevealOnScroll(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}


// ======================================================
// TEAM COMPONENT
// ======================================================

const Team = () => {

  // ====================================================
  // MOBILE ACTIVE MEMBER
  // ====================================================

  const [activeMember, setActiveMember] = useState(null);


  // ====================================================
  // SCROLL REVEAL
  // ====================================================

  const [orbitRef, orbitVisible] = useRevealOnScroll();


  // ====================================================
  // CENTER MEMBER
  // Sourabh Kamble = id 1
  // ====================================================

  const centerMember =
    team.find(
      (member) => member.id === 1
    ) || team[0];


  // ====================================================
  // SURROUNDING MEMBERS
  // ====================================================

  const surroundingMembers =
    team.filter(
      (member) =>
        member.id !== centerMember.id
    );


  // ====================================================
  // HANDLE MEMBER CLICK
  // ====================================================

  const handleMemberClick = (memberId) => {
    setActiveMember(
      activeMember === memberId
        ? null
        : memberId
    );
  };


  return (
    <section
      className="team-section"
      id="team"
    >

      <div className="team-container">


        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="team-header">

          <span className="team-eyebrow">
            OUR TEAM
          </span>


          <h2>
            The people behind
            <span>{" "}Evergrow.</span>
          </h2>


          <p>
            A multidisciplinary team combining
            technology, creativity, marketing,
            and business thinking to build
            meaningful digital solutions.
          </p>

        </div>


        {/* =================================================
            TEAM ORBIT
        ================================================= */}

        <div
          ref={orbitRef}
          className={`team-orbit${
            orbitVisible ? " is-visible" : ""
          }`}
        >


          {/* =================================================
              DECORATIVE RINGS
          ================================================= */}

          <div className="team-ring team-ring-one" />

          <div className="team-ring team-ring-two" />

          <div className="team-ring team-ring-three" />


          {/* =================================================
              CENTER GLOW
          ================================================= */}

          <div className="team-center-glow" />


          {/* =================================================
              SURROUNDING MEMBERS
          ================================================= */}

          {surroundingMembers.map(
            (member, index) => (

              <article
                key={member.id}

                className={`
                  team-member
                  team-member-${index + 1}
                  ${
                    activeMember === member.id
                      ? "is-active"
                      : ""
                  }
                `}

                onClick={() =>
                  handleMemberClick(
                    member.id
                  )
                }
              >


                {/* -----------------------------------------
                    MEMBER IMAGE
                ----------------------------------------- */}

                <div className="team-member-image">

                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                  />

                </div>


                {/* -----------------------------------------
                    MEMBER INFORMATION
                ----------------------------------------- */}

                <div className="team-member-info">

                  <h3>
                    {member.name}
                  </h3>

                  <span>
                    {member.role}
                  </span>

                </div>


                {/* -----------------------------------------
                    MEMBER TOOLTIP
                ----------------------------------------- */}

                <div className="team-member-tooltip">

                  <strong>
                    {member.name}
                  </strong>

                  <span>
                    {member.role}
                  </span>

                  <p>
                    {member.description}
                  </p>


                  {member.linkedin &&
                    member.linkedin !== "#" && (

                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"

                      onClick={(event) =>
                        event.stopPropagation()
                      }
                    >
                      LinkedIn ↗
                    </a>

                  )}

                </div>

              </article>

            )
          )}


          {/* =================================================
              CENTER MEMBER
          ================================================= */}

          <article
            className={`
              team-center-member
              ${
                activeMember === centerMember.id
                  ? "is-active"
                  : ""
              }
            `}

            onClick={() =>
              handleMemberClick(
                centerMember.id
              )
            }
          >


            {/* -----------------------------------------
                CENTER ORBIT
            ----------------------------------------- */}

            <div className="team-center-orbit">

              <span />
              <span />
              <span />

            </div>


            {/* -----------------------------------------
                CENTER IMAGE
            ----------------------------------------- */}

            <div className="team-center-image">

              <img
                src={centerMember.image}
                alt={`${centerMember.name} - ${centerMember.role}`}
              />

            </div>


            {/* -----------------------------------------
                CENTER INFORMATION
            ----------------------------------------- */}

            <div className="team-center-info">

              <span className="team-center-label">
                EVERGROW
              </span>

              <h3>
                {centerMember.name}
              </h3>

              <p>
                {centerMember.role}
              </p>

            </div>


            {/* -----------------------------------------
                CENTER DESCRIPTION
            ----------------------------------------- */}

            <div className="team-center-description">

              <p>
                {centerMember.description}
              </p>

            </div>

          </article>


          {/* =================================================
              CONNECTION LINES
          ================================================= */}

          <div
            className="
              team-connection
              team-connection-one
            "
          />

          <div
            className="
              team-connection
              team-connection-two
            "
          />

          <div
            className="
              team-connection
              team-connection-three
            "
          />

          <div
            className="
              team-connection
              team-connection-four
            "
          />


          {/* =================================================
              BOTTOM CAPTION
          ================================================= */}

          <div className="team-orbit-caption">

            <span className="team-caption-dot" />

            <span>
              One team. Different strengths. One direction.
            </span>

          </div>


        </div>

      </div>

    </section>
  );
};


export default Team;