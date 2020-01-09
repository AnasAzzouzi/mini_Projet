const express= require('express');
const mongoose=require('mongoose');
const cors = require('cors');
const bodyParser=require('body-parser');
//const dbConfig=require('./database/db');


const EtudiantRoute=require('./routes/Etudiant.route');
const ProfRoute= require('./routes/Prof.route');
const FiliereRoute= require('./routes/Filiere.route');
const MatiereRoute= require('./routes/Matiere.route');
const DepartementRoute= require('./routes/Departement.route')
const NoteRoute= require('./routes/Note.route')
const UserRoute= require('./routes/User.route')
//Connecting

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/school',{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log('DataBase Connected')
})
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());
app.use('/api',EtudiantRoute)
app.use('/api',ProfRoute)
app.use('/api',FiliereRoute)
app.use('/api',MatiereRoute)
app.use('/api',DepartementRoute)
app.use('/api',NoteRoute)
app.use('/api',UserRoute)
 const port=process.env.PORT||4000;

 
 app.listen(port);