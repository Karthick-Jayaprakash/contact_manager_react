import {useState} from "react"
function Practice() {

const [country,setCountry] = useState(0)
  console.log(country)
  const arr = [
    {
        name:"India",
        cities:["Delhi","Mumbai"]
     },{
        name:"Pakistan",
        cities:["Karachi","konut"]
    },{
        name:"Japan",
        cities:["Tokyo","Sunyun"]
    }  
    ]
  console.log(arr[country].cities)

  return (
    <div className="Practice">
      <select value={country} onChange={e=> setCountry(e.target.value)}>
      {arr.map((value,i) => 
        <option key={i} value={i}>{value.name}</option>
        )}
      </select>
      <select>
          {arr[country].cities.map((item,i) =>
            <option key={i} >{item}</option>
            )}         
      </select>
    </div>
  );
}

export default Practice;
