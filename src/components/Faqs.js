
const Faqs = ({Dropdown1,Dropdown2,Dropdown3,Dropdown4, handleDropdown1, handleDropdown2, handleDropdown3, handleDropdown4, DropdownColor,handleDropup1,handleDropup2,handleDropup3,handleDropup4}) => {
  return (
    <div className='faqs-main-container'>
      <div className='faqs-container1'>
        <h1 className="faq-header no-wrap">
          Frequently Asked Questions
        </h1>
        <p className="faq-paragraph">
          Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
        </p>
      </div>
      <div className='faqs-container2'>
       <div  className="faq-item">
        <p  className="faq-item1"> What is Bookmark?
                { Dropdown1=="flex"? 
                <svg  className='arrow-up' onClick={()=> {handleDropup1()}} style={{ display: Dropdown1
                }}width="18" height="12" xmlns="http://www.w3.org/2000/svg"><path stroke=" hsl(0, 94%, 66%)" stroke-width="3" fill="none" d="m1 11 8-9 9 9"/></svg>  : <svg  className='arrow' onClick={()=>{handleDropdown1()}}
                xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8"/></svg>}
                
        </p>
        <p className="dropdown-item" style={{ display: Dropdown1
                }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quasi incidunt cumque reiciendis officia laudantium officiis quod, sint tempore quae?</p>
        </div>
        <div  className="faq-item">
        <p className="faq-item1"> How can i request a new browser?
                { Dropdown2=="flex"? 
                <svg  className='arrow-up' onClick={()=> {handleDropup2()}} style={{ display: Dropdown2
                }}width="18" height="12" xmlns="http://www.w3.org/2000/svg"><path stroke=" hsl(0, 94%, 66%)" stroke-width="3" fill="none" d="m1 11 8-9 9 9"/></svg>  : <svg  className='arrow' onClick={()=>{handleDropdown2()}}
                xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8"/></svg>}
        </p>
        <p className="dropdown-item" style={{ display: Dropdown2
                }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere temporibus ipsa dolores eius fugit inventore rem suscipit, placeat alias corporis sapiente neque! Accusantium, sit magni, praesentium laborum in corporis velit adipisci asperiores rem</p>
        </div>

        <div  className="faq-item">
        <p className="faq-item1"> Is there a mobile app?
        { Dropdown3=="flex"? 
                <svg  className='arrow-up' onClick={()=> {handleDropup3()}}  style={{ display: Dropdown3
                }}width="18" height="12" xmlns="http://www.w3.org/2000/svg"><path stroke=" hsl(0, 94%, 66%)" stroke-width="3" fill="none" d="m1 11 8-9 9 9"/></svg>  : <svg  className='arrow' onClick={()=>{handleDropdown3()}}
                xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8"/></svg>}
        </p>
        <p className="dropdown-item" style={{ display: Dropdown3
                }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque modi atque ducimus asperiores repudiandae praesentium optio illum explicabo deleniti nemo eos saepe, hic ullam natus ab debitis. Dignissimos, necessitatibus eaque.</p>
        </div>

        <div  className="faq-item">
        <p className="faq-item1 no-wrap"> What about other Chromium browsers?
        { Dropdown4=="flex"? 
                <svg  className='arrow-up' onClick={()=> {handleDropup4()}} style={{ display: Dropdown4 }}width="18" height="12" xmlns="http://www.w3.org/2000/svg"><path stroke="hsl(0, 94%, 66%)" stroke-width="3" fill="none" d="m1 11 8-9 9 9"/></svg>  : <svg  className='arrow' onClick={()=>{handleDropdown4()}}
               
                xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8"/></svg>}
        </p>
        <p className="dropdown-item" style={{ display: Dropdown4 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ratione, consequuntur voluptatum fuga eaque, ad dolorem distinctio fugit accusantium laborum tenetur quas ea itaque in.</p>
        </div>
      <button className='faqs-button'>
        More Info
      </button>
      </div>
    </div>
  )
}

export default Faqs