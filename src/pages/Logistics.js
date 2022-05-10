import React from 'react';
import ReactDOM from 'react-dom';

class Logistics extends React.Component{
    state = {
        // insert starting variables
    }

    render(){
        return(
            <div style = {{ textAlign: 'center' }} >
            
            <html>
            
    <!-- This is the head of HTML-->
    <head>
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
        background-color: #dddddd;
        }

        </style>

<!-- Below I linked the CSS file to this HTML file
this allowed the button to display a pop up window when clicked.-->
       
<link href="/Users/rafaelgrullon/Desktop/html, body {.css" rel="stylesheet" type="text/css">

    </head>

<!-- This is the body of HTML-->

    <body>
   
        <!-- Heading -->
    <div>
       <h1> Logistics </h1>
   </div>

<!-- ** TRYING TO CREATE A POP UP WINDOW **-->

<!-- Events Button -->
<a href="#Events" class="btn"> Events </a>
  
  <div id="Events" class="popup">
        <a href="#" class="close">&times;</a>
        <h2>List of Events</h2>
        <table>
            <tr>
                <th> Name </th>
                <th> Location </th>
                <th> Time </th>

            </tr>

            <tr>
                <th> Event 1</th>
                <th> New York, NY 10001</th>
                <th> May 7th, 7:00PM</th>
            </tr>
        </table>

        
<!-- This is the text box to write the issues with the event-->
        <p>
            <label for="eventissues"> Issues with the events:</label>
        </p>

        <textarea id="eventissues" name="eventissues" rows="4" cols="50">
            
           Input any issues that the events are facing.

        </textarea>
       
        <br>
        <input type="submit" value="Submit">
       
   
        
        </div>

    <a href="#" class="close-popup"></a>

<!-- Vendors Button-->

    <a href="#popup" class="btn"> Vendors</a>
    
    <div id="popup" class="popup">
    <a href="#" class="close">&times;</a>
    <p>
        <table>
            <tr>
                <th> Name </th>
                <th> Category </th>
                <th> Contact </th>
                <th> Phone </th>
                <th> Email </th>
                <th> Address </th>
                <th> City / State / ZIP </th>
            
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
        <button class="GFG" onclick=" window.location.href= '/Users/rafaelgrullon/Library/Containers/com.microsoft.Excel/Data/Desktop/Vendor List.xlsx';">
            List of Vendors
        </button>
    </p>
   
    
    </div>

<a href="#" class="close-popup"></a>


<!-- Progress Button -->
   
<a href="#Progress" class="btn"> Progress </a>
        
    <div id="Progress" class="popup">
    <a href="#" class="close">&times;</a>
    
    <!-- This is the checkbox with : not started, started, and completed
            This information will be below each event -->

            <table>
                <tr>
                <th> Event </th>
                </tr>

                <tr>
                    <th> This is an event [location] and [time]</th>
                </tr>
            </table>
    <fieldset>
        <Legend>
            Status of event:
        </Legend>

        <div>
            <input type="checkbox" id="notstarted" name="Event" checked>

            <label for = "notstarted"> Not Started</label>
        </div>

        <div>
        <input type="checkbox" id="started" name="Event" checked>

            <label for = "started"> Started</label>
        </div>

        <div>
            <input type="checkbox" id="completed" name="Event" checked>

            <label for = "completed"> Completed</label>
        </div>

        <input type="submit" value = "Submit">
    </fieldset>
   

</div>
    <a href="#" class="close-popup"></a>

    </body>
</html>
            </div>
        );
    }

}

export default Logistics;
