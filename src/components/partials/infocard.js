import loadingBar from '../../assets/loading_bar.svg'
import optionIcon from "../../assets/vertical_dot_option_icon.svg"

function InfoCard ({ name, bio, avatar, creationDate }) {
  return (
    <div className='bg-agencyDark w-[315px] p-6 text-white flex flex-col gap-4 rounded-lg'>
        <div className='flex justify-between'>
            <h2 className='text-2xl font-bold'>{name}</h2>
            <img src={optionIcon} alt="option icon" />
        </div>
        <p className='text-[14px] mb-12'>
            {bio}
        </p>
        
        <img src={loadingBar} alt="loading bar"/>

        <img src={`${avatar}`} alt="" className='w-10 h-10'/>
        <div>
            <p className='text-[13px]'>Created:</p>
            <h4 className='text-lg font-bold'>{`${creationDate}`}</h4>
        </div>
    </div>
  )
}

export default InfoCard;