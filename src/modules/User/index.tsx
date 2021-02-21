import { useEffect, useState } from 'react'
import './Profile.scss'
import Grid from '../../ui/Grid/Grid'

interface Profile {
  id: number
  name: string 
  image: string
  email: string
}

type UserProfile = Profile

const Profile = () => {
  const [user, setUser] = useState<object>({})

const userOne:Profile = {
  id: 1,
  name: "Tom",
  image: "https://www.youngisthan.in/wp-content/uploads/2017/02/Pikachu-407x400.png",
  email: "user@gmail.com"
}
  return (
    <section style={{border: "1px solid black",
        height: '90vh',
        marginTop: 'auto',
        marginBottom: 'auto',
        padding: '1em'}}>
      <img style={{border: "1px solid black",
        width: "20vw"}}src={userOne.image}/>
      <h1 style={{
        textAlign: "center",
        border: "1px solid black"}}>
        {userOne.name}
      </h1>
    </section>
  )

}

export default Profile;
