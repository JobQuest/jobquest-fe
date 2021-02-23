import { useEffect, useState } from 'react'
import Grid from '../../ui/Grid/Grid'
import Button from '../../ui/Button/Button'
//this is a component where user can see available quests that can be accepted



const UserQuestLog = () => {

  return (
    <section style={{border: "1px solid black",
    height: '90vh',
    marginTop: 'auto',
    marginBottom: 'auto',
    padding: '1em',
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center"}}>
      <h2>My Quest Log</h2>
      <div style={{
        height: "8em",
        width: "100%",
        display: 'flex',
        flexDirection: "column",
        border: "1px solid red",
        marginTop: "1em"
      }}>
        <div style={{
          height: "100%"
        }}>
          <h2>My Quest 1</h2>
          <p>200XP</p>
          <p>Type</p>
        </div>
      </div>
      <div style={{
        height: "8em",
        width: "100%",
        display: 'flex',
        flexDirection: "column",
        border: "1px solid red",
        marginTop: "1em"
      }}>
        <div style={{
          height: "100%"
        }}>
          <h2>My Quest 2</h2>
          <p>200XP</p>
          <p>Type</p>
        </div>
      </div>
      <div style={{
        height: "8em",
        width: "100%",
        display: 'flex',
        flexDirection: "column",
        border: "1px solid red",
        marginTop: "1em"
      }}>
        <div style={{
          height: "100%"
        }}>
          <h2>My Quest 3</h2>
          <p>200XP</p>
          <p>Type</p>
        </div>
      </div>
    </section>
  )
 }

 export default UserQuestLog;