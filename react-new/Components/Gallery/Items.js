function Items({data}){
    return (
        <div className="row justify-content-center">
        {
          data.map((value)=>{
           const {id, image} = value;
           return (
            <div className="" key={id}>
             <div className="card bg-light text-center">
                 <img src={image} className="img-fluid" style={{height:"180px"}} alt=""/>
                 {/* <h3>{title}</h3>
                 <p>{description}</p> */}
            </div>
         </div>
           )
          })
        }

</div>
    )
}

export default Items;