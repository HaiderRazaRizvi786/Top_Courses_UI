import React from "react";

import Card from "./Card";

import { useState } from "react";

const Cards = (props) => {

    let courses = props.courses;

    const [likedCourses,setLikedCourses] = useState([]); 

    const category = props.category;

    function getCourses(){
        if(category==="All"){
            let allcourses = [];

            Object.values(courses).forEach( categories => {
                categories.forEach( course => {
                    allcourses.push(course);
                })
            })
            return allcourses;
        }
        else{
            return courses[category];
        }
    }

   

    

    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4 ">
            {
                getCourses().map( (course) => {
                    return(
                        <Card course ={course} key={course.id} 
                        likedCourses = {likedCourses} setLikedCourses = {setLikedCourses}></Card>
                    ) 
                })
            }
        </div>
    )
}

export default Cards;