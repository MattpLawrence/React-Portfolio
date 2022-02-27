import React from "react";

function About() {
  return (
    <div>
      <section id="one">
        <div className="imgMain" data-position="center">
          <img src="images/meStanding.jpg" alt="" />
        </div>
        <div className="container">
          <header className="major">
            <h2>About Me</h2>
            <p>
              I am a Jr. Full Stack developer learning MERN stack.
              <br />
              Here are a few things you should know about me.
            </p>
          </header>
          <p>
            I was born and raised in Atlanta Georgia, and currently live in
            Marietta. During my time working as a Mechanical Engineer co-op I
            was assigned a database project where I was first introduced to
            coding. Over a couple years I taught myself VBA and totally fell in
            love. Now I am branching out into software development and am eager
            to keep learning and creating. When I am not behind the computer I
            enjoy being outdoors. When the weather is nice (not an Atlanta
            summer) you can find me spending my free time hiking and mountain
            biking. I am also passionate about taking care of plants. For the
            last 7+ years I have been growing and taking care of my own little
            bonsai garden. There is nothing I love more than having a problem to
            solve, and help grow something from nothing.
          </p>
          <div id="resumeDiv">
            <button id="btnResume">View My Resume</button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;
