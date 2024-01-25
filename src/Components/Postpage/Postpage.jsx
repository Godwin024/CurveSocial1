import './Postpage.css'
import { GrFavorite } from "react-icons/gr";
import { FaRegComment } from "react-icons/fa6";
import { FiShare2 } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { TiLocationArrowOutline } from "react-icons/ti";
import { PiBellSimple } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogOutOutline } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { TfiBag } from "react-icons/tfi";
import { CiLocationArrow1 } from "react-icons/ci";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { IoStatsChart } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";

const Postpage = ()=>{
    
    return(
<>
<div className="Mainholder" >
    <div className='Post'>
        
        <div className='leftmid'>
            <div className='logoholder'>
                <img src="src/assets/images4.png" alt="" />
            </div>

            <div className='user'>
                <div className='userholder'>
                    <div className='Usercirclehold'>
                        <img src="src/assets/basket.jpg" alt="" />
                    </div>
                 
                </div>
                <h4>Godwin David</h4>
                <p>Lagos Nigeria</p>

            <div className='follower'>
                <div><h3>570</h3> 
                 <p>POST</p>
                 </div>
                 <div><h3>28.6k</h3> 
                 <p>FOLLOWERS</p>
                 </div>

                 <div><h3>985</h3> 
                 <p>FOLLOWING</p>
                 </div>
                
                
                

            </div>
         
            </div>
              <div className='leftoption'>
                <div className='Myfeeds'>
                   <GoHomeFill className='homefeeds'/>
                    <h5>Feeds</h5>
                </div>
                 
                 <div className='Explors'>
                    <TfiBag className='handbagand' />
                    <h5>Eplore</h5>
                 </div>
                 <div className='myFavorites'>
                    <img src="src/assets/Saveimage.jpg" alt="" />
                    <h5>Favorites</h5>
                 </div>
                 <div className='Directeee'>
                 <CiLocationArrow1 className='arrow33' />
                    <h5>Direct</h5>
                 </div>
                 <div className='Igtvseries'>
                 <PiTelevisionSimpleLight className='igtveserioe' />
                    <h5>IG Tv</h5>
                 </div>

                 <div className='Stattable'>
                 <IoStatsChart className='stateee'/>
                    <h5>Stat</h5>
                 </div>
                 <div className='Settingme'>
                 <CiSettings className='setttt' />
                    <h5>Setting</h5>
                 </div>
              </div>
              <div className='logout'>
                <div className='logouticon'>
                <IoLogOutOutline className='logouticonimg' />
                </div>
                <div className='writeup'>
                    <h3>Logout</h3>
                </div>
            </div>

        </div>
        

        <div className='mid'>
            <div className='searchtbn'>
                   <div className='Searchbtn'>
                    <input type="text" placeholder='Search' />
                      </div>
                      <div className='Createpost1'>
                        <div className='CreatBox'>
                        <p>+Create new Post</p>

                        </div>
                       
                  </div>
                  
            </div>
            <div className='Storiesandwatch'>
                <h5>Stories</h5>
                
            </div>

        <div className='top'>
            
            <div className='holder1'>
            <FaPlus className='plussign' />
            </div>
            <div className='holder2'>
                <img src="src/assets/image.jpg" alt="" />
            </div>
            
            <div className='holder3'>
                <img src="src/assets/image.jpg" alt="" />
            </div>
            <div className='holder4'>
                <img src="src/assets/image.jpg" alt="" />
            </div>
            <div className='holder5'>
                <img src="src/assets/image.jpg" alt="" />
            </div>
            <div className='holder6'>
                <img src="src/assets/image.jpg" alt="" />
            </div>
            
        </div>
               <div className='Nameslist'>
                <div className='Listnames'>
                    <p>Add story</p>
                </div>
                <div className='Listnames'>
                    <p>Ake Maro</p>
                </div>
                <div className='Listnames'>
                    <p> Nduka Favor</p>
                </div>
                <div className='Listnames'>
                    <p>Obodo Ella</p>
                </div>
                <div className='Listnames'>
                    <p>Akude Chidera</p>
                </div>
                <div className='Listnames'>
                    <p>Eze Francis</p>
                </div>
            
               </div>
              <div className='PostMainBox'>
                <div className='Boxcircleprofile'>
                    <div className='profilecircle'>
                        <img src="src/assets/image.jpg" alt="" />
                    </div>
                    <h5>Godwin David</h5>
                </div>
                <div className='Imageview'>

                </div>
                <div className='LIkesshare'>
                <GrFavorite className='Likeme'/><p>23 Likes</p>
                <FaRegComment className='Commentme1' /><p>62 comments</p>
                <FiShare2  className='shareme1'/><p>25k share</p>
                <img src="src/assets/Saveimage.jpg" alt="image" /><p>35 saved</p>

                </div>

                <div className='PostText'>
                   <div className='textdispkay'>
                   <p>text</p>
                   </div>
                </div>

                {/* <div className='commentprofilepost'></div> */}


              </div>
        
        </div>

        <div className='rightmid'>
            <div className='iconsdashbar'>
                <div className='Arrowpost'>
                <TiLocationArrowOutline className='arrowpost' />
                </div>
                <div className='Bellpost'>
                <PiBellSimple className='bellpost' />
                </div>
            
           
            <GiHamburgerMenu className='menupost' />


            </div>

            <div className='Trendingfeed'>
                <h5>Trending Feeds</h5>
            </div>
            <div className='TrendinBox'>
                <div className='FirstBoxtrend'>
                    <div className='SecondBoxtrend'>
                        <img src="src/assets/5e4425178281059.Y3JvcCwxMzgwLDEwODAsMjcwLDA.webp" alt="" />
                        </div> 
                    <div className='SecondBoxtrend2'>
                        <img src="src/assets/download (17).jpeg" alt="" />
                        </div> 
                </div>
                <div className='FirstBoxtrend2'>
                    <div className='SecondBoxtren3'>
                        <img src="src/assets/WhatsApp Image 2023-11-04 at 15.04.47_2d8ddd3c.jpg" alt="" />
                        </div> 
                    <div className='SecondBoxtren4'>
                        <img src="src/assets/images (18).jpeg" alt="" />
                        </div> 
                </div>
                
            </div>
            <div className='suggestion'>
                <h5>Suggestion for you</h5>
            </div>
             <div className='LeftdashBox'>
                <div className='LeftCirclebox'>
                    <img src="src/assets/photo2.jpeg" alt="" />
                </div>
                <h5>Wisdom Chiedra</h5>
             </div>
             <div className='LeftdashBox'>
                <div className='LeftCirclebox'>
                    <img src="src/assets/photo1.jpeg" alt="" />
                </div>
                <h5>George Nmesomachi</h5>
             </div>
             <div className='LeftdashBox'>
                <div className='LeftCirclebox'>
                    <img src="src/assets/basket.jpg" alt="" />
                </div>
                <h5>Daniel Ogah</h5>
             </div>
             
             <div className='Activist'>
                <h5> Profile Activity</h5>
             </div>
             <div className='clusterprofile'>
                <div className='clustercirlcle'>
                    <img src="src/assets/image.jpg" alt="" />
                </div>
                <div className='clustercirlcle'>
                    <img src="src/assets/WhatsApp Image 2023-11-04 at 12.14.12_c55f69a8.jpg" alt="" />
                </div>
                <div className='clustercirlcle'>
                    <img src="src/assets/WhatsApp Image 2023-11-04 at 15.17.33_f80a6370.jpg" alt="" />
                </div>
                <div className='clustercirlcle'>
                    <img src="src/assets/WhatsApp Image 2023-11-04 at 15.04.47_2d8ddd3c.jpg" alt="" />
                </div>
                <div className='clustercirlcle'>
                    <img src="src/assets/images 2.jpeg" alt="" />
                </div>
             </div>
             <div className='followers24k'>
                <div className='fellowpeopel'>
                    <h3>24.3k</h3> <p>Followers</p>
                </div>
             </div>
             <div className='activeonprofile'>
                <p>Active now on your profile</p>
             </div>

            
        </div>
   
    


    </div>




</div>
</>
    )
}

export default Postpage