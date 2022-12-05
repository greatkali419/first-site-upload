import Illustration1 from '../images/illustration-features-tab-1.svg';
import Illustration2 from '../images/illustration-features-tab-2.svg';
import Illustration3 from '../images/illustration-features-tab-3.svg';


const Bookmark = ({BookmarkNav, SpeedyNav, EasyNav}) => {
  return (
    <div className='bookmark-container1'>
      <div className='feature-container1' style={{ display: BookmarkNav }}>
      <div className='Illustration1-container'>
        <img src={Illustration1} className='Illustration1'/>
      </div>
      <div className="bookmark-container2">
        <h1 className='bookmark-header'>Bookmark in one click</h1>
        <p className='bookmark-paragraph'> Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
        <button className='bookmark-button'>
          More Info
        </button>
      </div>
      </div>
      <div className='feature-container2' style={{ display: SpeedyNav }}>
      <div className='Illustration1-container'>
        <img src={Illustration2} className='Illustration1'/>
      </div>
      <div className="bookmark-container2">
        <h1 className='bookmark-header'>Intelligent search </h1>
        <p className='bookmark-paragraph'> Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
        <button className='bookmark-button'>
          More Info
        </button>
      </div>
      </div>
      <div className='feature-container3' style={{ display: EasyNav }}>
      <div className='Illustration1-container'>
        <img src={Illustration3} className='Illustration1'/>
      </div>
      <div className="bookmark-container2">
        <h1 className='bookmark-header'>Share your bookmarks</h1>
        <p className='bookmark-paragraph'> Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
        <button className='bookmark-button'>
          More Info
        </button>
      </div>
      </div>
    </div>
  )
}

export default Bookmark