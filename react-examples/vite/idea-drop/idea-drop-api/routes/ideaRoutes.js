import exress from 'express';
const router = exress.Router();


//@route        GET /api/ideas
//@description  Get all ideas
//@access       Public
router.get('/',({req,res}) => {
    const ideas = [{id:1, title:'idea 1', description: 'This is idea 1' },
        {id:2, title:'idea 2', description: 'This is idea 2' },{id:3, title:'idea 3', description: 'This is idea 3' }
    ];

    res.json(ideas);

})

//@route        GET /api/ideas
//@description  Create new ideas
//@access       Private
router.post('/',({req,res}) => {
    //Тук може и деструктуриране ... const {title} = req.body;
    console.log(req.body);
    res.send('Processed');
})



export default router;