import Illustration from '../images/illustration-hero.svg'
const Main = () => {
  return (
    <div className='main-container'>
      <div className='main-container1'>
        <h1 className='main-header no-wrap'>
         A Simple Bookmark </h1>
        <h1 className='main-header'>Manager</h1>
        <p className='main-paragraph'>A clean and simple interface to organise your favourite  websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
        <div className='container-button'>
        <button className='main-button1'>
          Get it on Chrome
        </button>
        <button className='main-button1'>
          Get it on Firefox
        </button>
        </div>
      </div>
      <div className='illustration-container'>
          <img src={Illustration} className='illustration' />
      </div>

    </div>
  )
}

export default Main