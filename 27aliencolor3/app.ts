// if and else chain

import { Console } from "console";
import { version } from "os";

let alienColors :string = "green";
/// version 1

if(alienColors === "green"){
    console.log("PLAYER EARNED 5 POINTS ")}

    else if(alienColors === "yellow"){
        console.log("PLAYER EARNED 10 POINTS ")}

        else if(alienColors === "red"){
            console.log("PLAYER EARNED 15 POINTS ")}

            else{console.log("PLEASE SELECT THE CORRECT COLOR ")};
          //VERSION 2
          
          alienColors ="yellow";
          if(alienColors === "green"){
            console.log("PLAYER EARNED 5 POINTS ")}
        
            else if(alienColors === "yellow"){
                console.log("PLAYER EARNED 10 POINTS ")}
        
                else if(alienColors === "red"){
                    console.log("PLAYER EARNED 15 POINTS ")}
        
                    else{console.log("PLEASE SELECT THE CORRECT COLOR ")};

                   // version 3
                   alienColors ="red";
                   if(alienColors === "green"){
                    console.log("PLAYER EARNED 5 POINTS ")}
                
                    else if(alienColors === "yellow"){
                        console.log("PLAYER EARNED 10 POINTS ")}
                
                        else if(alienColors === "red"){
                            console.log("PLAYER EARNED 15 POINTS ")}
                
                            else{console.log("PLEASE SELECT THE CORRECT COLOR ")}; 

                            //version 4
                            alienColors = "blue";
                            if(alienColors === "green"){
                                console.log("PLAYER EARNED 5 POINTS ")}
                            
                                else if(alienColors === "yellow"){
                                    console.log("PLAYER EARNED 10 POINTS ")}
                            
                                    else if(alienColors === "red"){
                                        console.log("PLAYER EARNED 15 POINTS ")}
                            
                                        else{console.log("PLEASE SELECT THE CORRECT COLOR ")};