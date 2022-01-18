import Image from 'next/image';
import EventIcon from '@mui/icons-material/Event';
import { IconButton, InputLabel, InputAdornment, Fade, Paper, TextField, Tooltip } from '@mui/material';
import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'

const Form = () => {
  const [ date, setDate ] = useState('[DATE]');
  const [ address, setAddress ] = useState('[ADDRESS]');
  const [ position, setPosition ] = useState('[POSITION]');
  const [ event, setEvent ] = useState('[EVENT]');
  const [ company, setCompany ] = useState('[COMPANY]');

  // Resets fill-in-the-blank values
  useEffect(() => {
    if (!date.length) setDate('[DATE]')
    if (!address.length) setAddress('[ADDRESS]')
    if (!position.length) setPosition('[POSITION]')
    if (!event.length) setEvent('[EVENT]')
    if (!company.length) setCompany('[COMPANY]')
  }, [date, address, position, event, company])

  // Gets today's date
  const getTodayDate = () => {
    const dateInput = document.getElementById('date');
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const d = new Date();
    const fullDate = `${monthNames[d.getMonth()]} ${d.getDate()}, ${1900 + d.getYear()}`
    setDate(fullDate);
  }

  return (
    <div className={styles.form_container}>
      <TextField
        id='date'
        className={styles.input}
        size='small'
        label='Date'
        variant='outlined'
        onChange={(e) => setDate(e.target.value)}
        style={{
          'width': '195px',
          'margin': '8px 7.5px 8px 0px'
        }}

        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <EventIcon className={styles.date} onClick={(e) => getTodayDate()}/>
            </InputAdornment>
          ),
        }}/>
      <TextField className={styles.input} margin='dense' size='small' label='Company' variant='outlined' onChange={(e) => setCompany(e.target.value)}/>
      <TextField className={styles.input} margin='dense' size='small' label='Address' variant='outlined' onChange={(e) => setAddress(e.target.value)}/>
      <TextField className={styles.input} margin='dense' size='small' label='Position' variant='outlined' onChange={(e) => setPosition(e.target.value)}/>
      <TextField className={styles.input} margin='dense' size='small' label='Event' variant='outlined' onChange={(e) => setEvent(e.target.value)}/><br/><br/>

      <Tooltip
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        title='Letter'>
        <IconButton>
          <Image
            src='/google-docs-icon.png'
            width={50}
            height={50}
            alt='Google Docs'
            onClick={() => {window.open('https://docs.google.com/document/d/1ssnDs7m48hGJoZR5c0019wNGgJxD1E1VnfgVuWeofaM/edit')}}
            />
        </IconButton>
      </Tooltip>

      <Tooltip
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        title='Resume'>
        <IconButton>
          <Image
            src='/resume-icon.png'
            width={50}
            height={50}
            alt='Resume'
            onClick={() => {window.open('https://docs.google.com/document/d/15e3KoduVmc__nxI6cEZ4isIM8FzJMTyJ9Vxo3Gs68zs/edit')}}
            />
        </IconButton>
      </Tooltip>

      <Tooltip
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        title='Copy'>
        <IconButton>
          <Image
            src='/email-icon.png'
            width={50}
            height={50}
            alt='Copy'
            onClick={() => {navigator.clipboard.writeText('jacky.chen0319@gmail.com')}}
          />
        </IconButton>
      </Tooltip>

      <Tooltip
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        title='Copy'>
        <IconButton>
          <Image
            src='/linkedin-icon.png'
            width={50}
            height={50}
            alt='LinkedIn'
            onClick={() => {navigator.clipboard.writeText('https://www.linkedin.com/in/chen-jacky')}}
            />
        </IconButton>
      </Tooltip>

      <Tooltip
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        title='Copy'>
        <IconButton>
          <Image
            src='/github-icon.png'
            width={50}
            height={50}
            alt='Github'
            onClick={() => {navigator.clipboard.writeText('https://github.com/jackychen19')}}
            />
        </IconButton>
      </Tooltip>

      <Paper
        id='letter'
        variant='elevation'
        elevation={3}
        style={{
          'margin-top': '15px',
          'padding': '70px 90px 90px 90px',
          'font-family': 'serif',
          'width': 'clamp(450px, 100%, 800px)'
        }}
      >
        <p>
        <br/>{date}<br/>

        {company}<br/>
        {address}<br/><br/>

        Dear Hiring Manager,<br/><br/>

        My name is Jacky Chen and I am a Full Stack Software Engineer with a marketing and entrepreneurship background. I am applying for the {position} position that I learned about from {event}. I believe that I am a strong fit for {company}’s unique culture and would bring to the company my technical and interpersonal competence.<br/><br/>

        This past summer, I attended an advanced software engineering immersive, where I refined my technical and soft skills. During this program, I worked with teams of 3-6 people on full-stack web applications, each with a one-week deadline. To meet tight deadlines, I cultivated a growth mindset and researched numerous technologies, quickly learning how to implement new tools including various frameworks, databases, and DevOps. These projects refined my decision-making skills and problem-solving process, as I accurately diagnosed issues and proactively made informed decisions to find the optimal solution. Furthermore, I practiced Agile methodology to keep track of deliverables. This facilitated transparency within my teams and promoted accountability for each of our responsibilities, which allowed me to communicate to team members with ease and complete my tasks in a timely manner. My ability to think critically and work well in a team will contribute to the cohesiveness of {company}’s development team.<br/><br/>

        Throughout building full-stack web applications, I practiced communicating technical details to our non-technical clients in meetings to translate workflow feedback into implementable features in our ticketing system. As a result, we completed our tasks earlier than initial deadlines and added more features than the minimum viable product requirements, exceeding clients’ expectations. With my communication skills and a goal-oriented mentality, I believe I would be a great fit for your organization.<br/><br/>

        It would truly be a privilege to receive an opportunity to work as a {position} at {company} as I believe it is a great opportunity for me to utilize and strengthen my current skills. Thank you for your time and consideration for reviewing this application, and I look forward to hearing from you soon!<br/><br/>

        Sincerely,<br/><br/>
        Jacky Chen
        </p>
      </Paper>

    </div>
  )
}

export default Form;