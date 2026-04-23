export default function Controls({ run, reset, setSpeed }){

 return(
 <div className="flex gap-4 mt-4">

   <button
     onClick={run}
     className="bg-blue-500 text-white px-4 py-2 rounded"
   >
     Run
   </button>

   <button
     onClick={reset}
     className="bg-red-500 text-white px-4 py-2 rounded"
   >
     Reset
   </button>

   <select
     onChange={(e)=>setSpeed(Number(e.target.value))}
     className="border px-3"
   >
     <option value="1000">Slow</option>
     <option value="600">Normal</option>
     <option value="200">Fast</option>
   </select>

 </div>
 )
}