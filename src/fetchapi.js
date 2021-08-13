import { useState, useEffect } from "react";

const API = 'https://jsonmock.hackerrank.com/api/movies?Year=';

export const GetMovieList = (year) => {

    let API_URL= `${API}${year}`;
        console.log(API_URL);
        useEffect(() => {
            fetch(API_URL).then((resp)=>resp.json())
            .then((results)=>{
                results.data.map(data => console.log(data.Title));
            });
        }, []);

    return (
        <div>

        </div>
    );
}