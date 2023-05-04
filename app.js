const  express  = require('express'); 
const { title } = require('process');
//express app

const app  = express();
 //register view engine
 app.set('view engine','ejs')

app.listen(3000);

app.get('/',(req,res) =>{

    const blogs = [

        {title: 'Yoshi  finds eggs', snippet :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, iure tempora! Libero, dolore iste quia sint labore hic. Neque voluptates placeat modi, id veritatis ipsam, quibusdam dolore distinctio sint excepturi atque iste, fugiat cumque non quam consequuntur aperiam cum tenetur! Aliquid fugit officiis tempore minus fuga unde saepe quasi explicabo!"},
        {title: 'Yoshi  finds eggs', snippet :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, iure tempora! Libero, dolore iste quia sint labore hic. Neque voluptates placeat modi, id veritatis ipsam, quibusdam dolore distinctio sint excepturi atque iste, fugiat cumque non quam consequuntur aperiam cum tenetur! Aliquid fugit officiis tempore minus fuga unde saepe quasi explicabo!"},
        {title: 'Yoshi  finds eggs', snippet :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, iure tempora! Libero, dolore iste quia sint labore hic. Neque voluptates placeat modi, id veritatis ipsam, quibusdam dolore distinctio sint excepturi atque iste, fugiat cumque non quam consequuntur aperiam cum tenetur! Aliquid fugit officiis tempore minus fuga unde saepe quasi explicabo!"},
    ];

    res.render('index', {title : "Home" , blogs});
});
app.get('/about',(req,res) =>{

    res.render('about', {title : "About"});
});
app.get('/blog',(req,res) =>{

    res.render('blog',{title : "Blog"});
});