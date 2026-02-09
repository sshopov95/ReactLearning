import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    //Добавяме страницата без да се импортва и да се пише <Route> - filebased route
    
    layout('./routes/layouts/home.tsx',[index("routes/home/index.tsx")]), //Специфичен Layout за Home
    layout('./routes/layouts/main.tsx', [route('about', './routes/about/index.tsx'),
    route('contact', './routes/contact/index.tsx'),
    route('projects', './routes/projects/index.tsx'),
    route('projects/:id', './routes/projects/details.tsx'),//Специфичен раут за ID-тата
    route('blog', './routes/blog/index.tsx')])  //Layout за всички останали пейджове
    
] satisfies RouteConfig;
