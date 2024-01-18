import React, { useEffect, useState } from "react";

import Navbar from "./components/navbar";

import Filter from "./components/filter";

import Cards from "./components/Cards";

import Spinnner from "./components/Spinner";

import { apiUrl,filterData } from "./data";

import { toast } from "react-toastify";

const App = () => {

        const [courses,setCourses] = useState(null);
        const [loading,setLoading] = useState(true);
        const [category,setCategory] = useState(filterData[0].title);

        async function fetchdata(){
          setLoading(true);
          try{
            const res = await fetch(apiUrl);
            const output = await res.json();

            setCourses(output.data);
            
          }
          catch(error){
            toast.error("Something Went Wrong");
          }
          setLoading(false);
          
        }

        useEffect(()=>{
          fetchdata();
        },[])
      
      
      
        return (
        <div className="min-h-screen flex flex-col  bg-bgDark2 ">

          <div>
            <Navbar></Navbar>
          </div>

          <div className=" bg-bgDark2">

            <div>
              <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
            </div>

            <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh] ">
              {loading ? (<Spinnner></Spinnner>) : (<Cards courses={courses} category={category}></Cards>) }
            </div>

          </div>

        </div>
        );
};

export default App;




//npm i react-toastify
//npm i react-icons