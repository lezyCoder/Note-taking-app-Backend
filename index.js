
const express = require("express");

const app = express();

app.use(express.json());// Using middleware 

app.get("/" , (req,res)=>{
    console.log("Response sent");
    res.send("Hello this is home page.")
})

let Notes=[];

// Show all the notes

app.get("/notes", (req, res) => { 
    res.json(Notes); // send all the notes in JSON format
})

// Add new notes to the server 

app.post("/notes" , (req, res)=>{
    const new_notes = req.body; // all data will come from the req.body from the frontend
    Notes.push(new_notes);
    console.log(Notes);
    
    res.json({
        message:"Data added "
    });

})

// Delete a note by its index

app.delete("/notes/:index" , (req,res)=>{
    const index =  req.params.index;
    delete Notes[index];
    res.json({
        message:"Data at given index deleted "
    });
})

// Update the data 

app.patch("/notes/:index" , (req, res)=>{
    const index = req.params.index;

    const{ new_title} = req.body;

    Notes[index].title = new_title ;
   
    res.json({
        message:"Data Updated ",
        
    });

})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});