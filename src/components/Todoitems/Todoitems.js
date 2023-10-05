import React from 'react'
import './Todoitems.css'
    const Todoitems=(props)=>{
    const  items2=props.items1;
    const {deleteitem}=props;
    let length=items2.length;

    const theitems=length?/*noitems to show بيعرضهن وإذا مافي بيعرض العبارة تبع  items يعني لو في*/
    (
   items2.map((item,index)=>{
        return(
            <div key={index}>
            {/* <span>{item.id}</span> */}
            <span className="name">{item.name} </span>
            <span className="age">{item.age}</span>
            <span className="action icon" onClick={()=>deleteitem(index)}>&times;</span>
            </div>
        ) 
    })
    ):(
    <p>There is no items to show</p>
    )
    return(
        <div className="Listitems">
            <div>
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Action</span>
            </div>
            {theitems}
        </div>
    );
}
export default Todoitems