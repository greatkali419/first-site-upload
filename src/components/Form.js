
const Form = () => {
  return (
    <div className="form-main-container">
      <p className="form-paragraph"> 35,000+ ALREADY JOINED </p>
      <h2 className="form-header"> Stay up-to-date with what </h2>
      <h2 className="form-header"> we're doing</h2>
      <form className="form-container" >
        <div className="input-container" data-error="Whoops, make sure it's an email"> <input type='text' placeholder="enter your email adress" value={"john Doe"}
        onChange={(e) => (e.target.value)}/>
        </div>
        <button className="form-button">
          Contact Us
        </button>
      </form>
    </div>
  )
}

export default Form