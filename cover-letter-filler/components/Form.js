import React, { useState } from 'react';
import styles from '../styles/Home.module.css'

const Form = () => {
  const [date, setDate] = useState('[DATE]');
  const [address, setAddress] = useState('[ADDRESS]');
  const [position, setPosition] = useState('[POSITION]');
  const [event, setEvent] = useState('[EVENT]');
  const [company, setCompany] = useState('[COMPANY]');

  const handleDate = (e) => {
    setDate(e.target.value);
  }

  const handleAddress = (e) => {
    setAddress(e.target.value);
  }

  const handlePosition = (e) => {
    setPosition(e.target.value);
  }

  const handleEvent = (e) => {
    setEvent(e.target.value);
  }

  const handleCompany = (e) => {
    setCompany(e.target.value);
  }

  return (
    <div className={styles.form_container}>
      Set date:
      <input onChange={handleDate}></input><br/>
      Set company:
      <input onChange={handleCompany}></input><br/>
      Set address:
      <input onChange={handleAddress}></input><br/>
      Set position:
      <input onChange={handlePosition}></input><br/>
      Set event:
      <input onChange={handleEvent}></input><br/><br/>

      <div>
      {date}<br/>

      {company}<br/>
      {address}<br/><br/>

      Dear Hiring Manager,<br/><br/>

      My name is Jacky Chen and I am a Full Stack Software Engineer with a marketing background. I am applying for the {position} position that I learned about from {event}. I believe that I am a strong fit for {company}’s unique culture and would bring to the company my technical and interpersonal competence.<br/><br/>

      This past summer, I attended an advanced software engineering immersive, where I refined my technical and soft skills. During this program, I worked with teams of 3-6 people on full-stack web applications, each with a one-week deadline. To meet tight deadlines, I cultivated a growth mindset and researched numerous technologies, quickly learning how to implement new tools including various frameworks, databases, and DevOps. These projects refined my decision-making skills and problem-solving process, as I accurately diagnosed issues and proactively made informed decisions to find the optimal solution. Furthermore, I practiced Agile methodology to keep track of deliverables. This facilitated transparency within my teams and promoted accountability for each of our responsibilities, which allowed me to communicate to team members with ease and complete my tasks in a timely manner. My ability to think critically and work well in a team will contribute to the cohesiveness of {company}’s development team.<br/><br/>

      Throughout building full-stack web applications, I practiced communicating technical details to our non-technical clients in meetings to translate workflow feedback into implementable features in our ticketing system. As a result, we completed our tasks earlier than initial deadlines and added more features than the minimum viable product requirements, exceeding clients’ expectations. With my communication skills and a goal-oriented mentality, I believe I would be a great fit for your organization.<br/><br/>

      It would truly be a privilege to receive an opportunity to work as a {position} at {company} as I believe it is a great opportunity for me to utilize and strengthen my current skills. Thank you for your time and consideration for reviewing this application, and I look forward to hearing from you soon!<br/><br/>

      </div>

    </div>
  )
}

export default Form;