import '../styles/footer.css'
import ln from '../assets/Social icon.svg'
import tw from '../assets/Social icon (1).svg'
import fb from '../assets/Social icon (2).svg'
import ig from '../assets/Social icon (3).svg'
import gh from '../assets/Social icon (4).svg'
import yt from '../assets/Social icon (5).svg'
function Footer () {
    return (
        <div className='footer'>
            <div className='copyrights'>
                &copy; 2023 ClearLink. All rights reserved
            </div>
            <div className='social-icons'>
                <ul>
                    <li><a href=""><img src={ln} alt="" /></a></li>
                    <li><a href=""><img src={tw} alt="" /></a></li>
                    <li><a href=""><img src={fb} alt="" /></a></li>
                    <li><a href=""><img src={ig} alt="" /></a></li>
                    <li><a href=""><img src={gh} alt="" /></a></li>
                    <li><a href=""><img src={yt} alt="" /></a></li>
                </ul>
            </div>
        </div>
    )
}
export default Footer