import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import ideaRouter from './routes/ideaRoutes.js'
import { errorHandler } from "./middleware/errorHandler.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.urlencoded({extended:true}));


/*Basic get / post  - must be in routes folder cuz clutter 
app.get('/api/ideas',({req,res}) => {
    const ideas = [{id:1, title:'idea 1', description: 'This is idea 1' },
        {id:2, title:'idea 2', description: 'This is idea 2' },{id:3, title:'idea 3', description: 'This is idea 3' }
    ];

    res.json(ideas);

})

app.post('/api/ideas',({req,res}) => {
    //Тук може и деструктуриране ... const {title} = req.body;
    console.log(req.body);
    res.send('Processed');
})*/

//Routes
app.use('/api/ideas', ideaRouter);


//404 Fallback
app.use((req,res,next)=>{
    const error = new Error(`Not found - ${req.originalUrl}`)
    res.status(404);
    next(error);

})

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
