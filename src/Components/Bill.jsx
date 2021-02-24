
import CompactProfile from 'src/Components/CompactProfile';

export default function Bill() {
  return (
    
   <center>

 
    <div style={{border: "1px solid black", borderRadius: '5%', width: '80%'}} > 

 <div className="row" >
 
 <div className="col-md-8" style={{alignContent: "flexStart", display: "flex"}} >  
 <h2> Bill Name </h2>
  <h2> Bill Number </h2>
  <p> Bill description </p>  
  </div>


<div className="col-md-4" >  
  <CompactProfile />
</div>

 
 </div>

  </div>

	   </center>
  
  
  );
}
