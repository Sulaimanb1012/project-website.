import React from 'react'
import './ProjectDetail.css'
import theme from '../../assets/theme.png'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from  '../../assets/arrow_icon.svg'

const ProjectDetail = () => {
  return (
    <div className='mywork'>
    <div className="mywork-title">
      <h1>Mijn nieuwste werk</h1>
      <img src={theme} alt="" />
    </div>
    <div className="mywork-container">
      {mywork_data.map((work,index)=>{
        return <img key={index} src={work.w_img} alt="" />
      })}
    </div>
    <div className="mywork-showmore">
      <p>Lees Meer</p>
      <img src={arrow_icon} alt="" />
    </div>
    </div>
  )
}
export default ProjectDetail