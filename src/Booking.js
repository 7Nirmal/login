import { useState } from "react";
import"./booking.css";

export default function Booking() {
  const [from,setFrom] = useState("");
  const [to,setTo] = useState("");
  const [departure,setDeparture] = useState();
  const[start,setStart] = useState("");
  const [offers,setOffers] = useState();
  const [arrival,setArrival] = useState();
  const [price,setPrice] = useState(0);


  const pricecalc = (date) => {

    const bookedmonth = new Date(date).getMonth();
    const bookedyear = new Date(date).getFullYear();
    const curr= new Date().getMonth();
    const curryear= new Date().getFullYear();
    console.log(bookedmonth,curr)
   if(bookedyear === curryear &&  bookedmonth < curr){ 
    console.log("yes");
    setPrice(10000)
   }
   else{
    setPrice(20000)
   }
  } 


  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(from,to,arrival,start);
    pricecalc(start)
  }
    
  return (
    <div className="booking">
      <form onSubmit={handlesubmit} className="booking-form">
        <h1>Enter details to book!</h1>
       <div className="place">
       <span>From</span>
      <select value={from} onChange={(e)=>{setFrom(e.target.value)}}>
      <option value="chennai">Chennai</option>
      <option value="bangalore">Bangalore</option>
      <option value="mumbai">Mumbai</option>
      <option value="Delhi">Delhi</option>
      </select>
      <span>To</span>
      <select value={to} onChange={(e)=>{setTo(e.target.value)}}>
      <option value="chennai">Chennai</option>
      <option value="bangalore">Bangalore</option>
      <option value="Delhi">Delhi</option>
      </select>

       </div>
    <div className="timings">
    <label>Date</label>
      <input type="date" onChange={(e)=>setStart(e.target.value)}/>
      <label>Time</label>
      <input type="time" onChange={(e)=>setArrival(e.target.value)}/>
      </div>
      <div className="offers">
      <label> Offers</label>
        <select value={offers} onChange={(e)=>setOffers(e.target.value)}>
        <option value="food">Food</option>
      <option value="flat50%">Flat 50%</option>
        </select>
      </div>
      <button type="submit" className="check">submit</button>
      <p>Total price: {price}</p>
      </form>
    </div>
  )
}
