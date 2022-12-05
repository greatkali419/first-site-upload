import ChromeSvg from '../images/logo-chrome.svg';
import FirefoxSvg from '../images/logo-firefox.svg';
import OperaSvg from '../images/logo-opera.svg';
import DotSvg from '../images/bg-dots.svg';
const Download = () => {
  return (
    <div className='Download-container'>
      <div className='Download-container1'>
        <h1 className='Download-header no-wrap'> Download the extension</h1>
        <p className='Download-paragraph'> We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
      </div>
      <div className='extension-container'>
      <div className='extension-grid'> 
        <img src={ChromeSvg}  className='extension-img'/>
        <h2 className='extension-header'> Add to Chrome </h2>
        <p className='extension-paragraph'>Minimum version 62 </p>
        <img src={DotSvg}  className='extension-dot'/>
        <button className='extension-button'>
          Add & install Extension
        </button>
      </div>
      <div className='extension-grid'> 
        <img src={FirefoxSvg} className='extension-img'/>
        <h2 className='extension-header'> Add to Firefox </h2>
        <p className='extension-paragraph'>Minimum version 55 </p>
        <img src={DotSvg} className='extension-dot' />
        <button  className='extension-button'>
          Add & install Extension
        </button>
      </div>
      <div  className='extension-grid'> 
        <img src={OperaSvg} className='extension-img'/>
        <h2 className='extension-header'> Add to Opera</h2>
        <p className='extension-paragraph'>Minimum version 46 </p>
        <img src={DotSvg}  className='extension-dot'/>
        <button  className='extension-button'>
          Add & install Extension
        </button>
      </div>
      </div>
    </div>
  )
}

export default Download