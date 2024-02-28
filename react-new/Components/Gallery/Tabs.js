function Tabs({filterCategory, tabsData}){
    return(
        <>

 <div className="text-center my-4">
 {
 tabsData.map((category, index)=>{
      return (
        <button type="button" className="btn mx-2 text-capitalize active tab-btn" onClick={()=> filterCategory(category)} key={index}>{category}</button>
      )
 })
 }


</div>
        </>
    )
}

export default Tabs;