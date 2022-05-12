import React from 'react';
import ReactDOM from 'react-dom';

class Logistics extends React.Component{
    state = {
        // insert starting variables
    }

    render(){
        return(
            <div style = {{ textAlign: 'center' }} >
            
           
    // This is the head of HTML
    
        <title> Let'sGo - Logistics </title>
        <style>
            h1 {
                text-align: center;
            }

        table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
        }

        td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
        }

        tr:nth-child(even) {
        background-color: #000000;
        }

        </style>

// Below I linked the CSS file to this HTML file this allowed the button to display a pop up window when clicked.
       
<link href="/Users/rafaelgrullon/Desktop/html, body {.css" rel="stylesheet" type="text/css">

    

//This is the body of HTML

    
   
     // Heading 
    
    <div>
       <h1> Logistics </h1>
   </div>

// TRYING TO CREATE A POP UP WINDOW 

// Events Button 

<a href="#Events" class="btn"> Events </a>
  
  <div id="Events" class="popup">
        <a href="#" class="close">&times;</a>
        <h2>List of Events</h2>
        <table>
            <tr>
                <th> <strong> Name </strong> </th>
                <th> <strong> Location </strong> </th>
                <th> <strong> Time </strong> </th>

            <tr>
                <th> Apple Forum </th>
                <th> New York, NY 10001 </th>
                <th> May 7th, 7:00PM </th>
            </tr>

            <tr>
                <th> Microsoft Year Event </th>
                <th> Queens, NY 11368 </th>
                <th> May 10th, 5:00PM </th>
            </tr>

            <tr>
                <th> Samsung Unboxing </th>
                <th> Chicago, IL 60602 </th>
                <th> May 12th, 2:00PM </th>
            </tr>

            <tr>
                <th> J&J Department Feast </th>
                <th> Los Angeles, CA 90016 </th>
                <th> May 17th, 6:00PM </th>

            </tr>

            <tr> 
                <th> Pfizer Showcase </th>
                <th> Las Vegas, NV 89178 </th>
                <th> May 21st, 12:00PM </th>
            </tr>
        </table>

        <hr>
        <hr>

        <p> Issues with: </p>

        <select style="width:200px">
        <option> Choose an event </option>
        </select>
        
       

// This is the text box to write the issues with the event

        <p>
            
        </p>

        <textarea id="eventissues" name="eventissues" rows="4" cols="50">
            
           Input any issues that the event is facing.

        </textarea>
       
        <br>
        <input type="submit" value="Submit">
       
   
        
        </div>

    <a href="#" class="close-popup"></a>

// Vendors Button

    <a href="#popup" class="btn"> Vendors</a>
    
    <div id="popup" class="popup">
    <a href="#" class="close">&times;</a>
    <p>
        <table>
            <tr>
                <th> <strong> Name </strong> </th>
                <th> <strong> Category </strong> </th>
                <th> <strong> Contact </strong> </th>
                <th> <strong> Phone </strong> </th>
                <th> <strong> Email </strong> </th>
                <th> <strong> Address </strong> </th>
                <th> <strong> City / State / ZIP </strong> </th>
            
            </tr>

            <tr>
                <td> Weissnat Inc </td>
                <td> Equipment Mover </td>
                <td> Robert Renshaw </td>
                <td> (646) 336-7281 </td>
                <td> RRenshaw@WeissnatInc.com </td>
                <td> 454 W 22nd St </td>
                <td> New York, NY 10011 </td>
            </tr>

            <tr> 
                <td> Altenwerth Group </td>
                <td> Stage Setup </td>
                <td> August Stanton </td>
                <td> (646) 366-0843 </td>
                <td> AStanton@AltenwerthGroup.com </td>
                <td> 39 W 37th St </td>
                <td> New York, NY 10018 </td>

            </tr>

            <tr>
                <td> Friesen Inc </td>
                <td> Equipment Mover </td>
                <td> Drake Acosta </td>
                <td> (646) 370-5017 </td>
                <td> DAcosta@FriesenInc.com </td>
                <td> 10 W 138th St </td>
                <td> New York, NY 10037 </td>

            </tr>

            <tr>
                <td> Wuckert Group </td>
                <td> Electrical </td>
                <td> Leia Martin </td>
                <td> (646) 371-9225 </td>
                <td> LMartin@WuckertGroup.com </td>
                <td> 222 E 93rd St </td>
                <td> New York, NY 10128 </td>
                
            </tr>
            
        </table>
<hr>
    </p>
   
    
    </div>

<a href="#" class="close-popup"></a>


   

            </div>
        );
    }

}

export default Logistics;
