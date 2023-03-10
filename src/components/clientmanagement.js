import Header from './partials/header'
import InfoCard from './partials/infocard'
import avatarMale from '../assets/avatar_male.png'

const data = [
  {
      name: "Om",
      bio: "He is a coach for real estate business",
      avatar: avatarMale,
      creationDate: "3d"
  },
  {
      name: "Tushar",
      bio: "He is a coach for real estate business",
      avatar: avatarMale,
      creationDate: "3d"
  },
  {
      name: "Akarsh",
      bio: "He is a coach for real estate business",
      avatar: avatarMale,
      creationDate: "3d"
  },
]

function ClientManagement () {
  return (
      <div className='bg-agencyGrey h-screen rounded-xl m-6 p-6 py-0'>
          <Header name="Client"/>
          <div className='flex flex-wrap gap-8'>
              {data.map((user, index) => <InfoCard key={index} {...user}/>)}
          </div>
      </div>
  )
}

export default ClientManagement