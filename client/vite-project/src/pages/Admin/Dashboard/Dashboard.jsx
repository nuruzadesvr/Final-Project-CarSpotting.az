import React from 'react'
import "./Dashboard.scss"
import dashboardtraffic from "../../../images/dashboard__traffic.png"
import facebookdash from "../../../images/facebbokdash.png"
import twitterdash from "../../../images/twitterdash.png"
import linkedindash from "../../../images/linkedindash.png"
import calendardash from "../../../images/calendardash.png"
import downloadtable from "../../../images/downloadtable.png"
import earningtable from "../../../images/earningtable.png"
import completedtable from "../../../images/completedtable.png"
import viewstable from "../../../images/viewstable.png"
function Dashboard() {
  return (
<>
<section className='dashboard__container'>
<div className='statistica__card'>
  <div className='user__statistica'><img src={downloadtable} alt="" />  </div>
  <div className='income__statistica'><img src={earningtable} alt="" />  </div>
  <div className='conversion__statistica'><img src={completedtable} alt="" />  </div>
  <div className='session__statistica'><img src={viewstable} alt="" />  </div>
</div>

<div className="dashboard__traffic">
  <img src={dashboardtraffic} alt="" />
</div>

<div className='sosialmedia__traffic__container'>


<div className="sosial__media__box">
  <img src={facebookdash} alt="" />
<div className='socialmedia__dashboard'>
  <div className='participant__count__table'>
  <h4>89K</h4>
  <p>Friends</p>
  </div>
  <div className='meeting__count__table'>
  <h4>459</h4>
  <p>FEEDS</p>
  </div>
</div>
</div>


<div className="sosial__media__box">
<img src={twitterdash} alt="" />
<div className='socialmedia__dashboard'>
<div className='participant__count__table'>
  <h4>973K</h4>
  <p>FOLLOWERS</p>
</div>
  <div className='meeting__count__table'>
  <h4>1.792</h4>
  <p>TWEETS</p>
  </div>
</div>
</div>


<div className="sosial__media__box">
<img src={linkedindash} alt="" />
<div className='socialmedia__dashboard'>
<div className='participant__count__table'>
<h4>500</h4>
<p>CONTACTS</p>
</div>
  <div className='meeting__count__table'>
  <h4>1.292</h4>
  <p>FEEDS</p>
  </div>
</div>
</div>


<div className="sosial__media__box">
<img src={calendardash} alt="" />
<div className='socialmedia__dashboard'>
  
<div className='participant__count__table'>
<h4>12+</h4>
<p>EVENTS</p>
</div>
  <div className='meeting__count__table'>
  <h4>4</h4>
  <p>MEETINGS</p>
  </div>
</div>
</div>


</div>

</section>
</>
  )
}

export default Dashboard
