
const Features = ({handleSpeedyClick, handleBookmarkClick,handleEasyClick, SpeedyColor,BookmarkColor, EasyColor}) => {
  return (
    <div className="features-container1">
      <h1 className="feature-header">Features</h1>
      <p className="features-paragrapgh"> Our aim is to make it quick and easy for you to access your favourite websites. your bookmarks sync between your devices so you can access them on the go.</p>
      <div className="features-container2">
        <div className="index-state" style={{
          borderBottom: BookmarkColor
        }} >
        <p className="feature-item"  onClick={ ()=>{
          handleBookmarkClick()
        } }>
          Simple Bookmarking
         
        </p>
        </div>
        <div  style={{
          borderBottom: SpeedyColor
        }}>
        <p className="feature-item" onClick={ ()=>{
          handleSpeedyClick()
        } }>
          Speedy Searching
         
        </p>
       
       </div>
      <div style={{
          borderBottom: EasyColor
        }}>
        <p className="feature-item"  onClick={ ()=>{
          handleEasyClick()
        } }>
          Easy Sharing  
        </p>
        </div> 
      </div>
    </div>
  )
}

export default Features