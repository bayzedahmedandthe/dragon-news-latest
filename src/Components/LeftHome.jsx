import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftHome = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res => res.json())
        .then(data => setCategories(data.data.news_category))
    }, [])
    return (
        <div className="flex flex-col gap-2">
            {categories.map(category => <div><NavLink to={`/category/${category.category_id}`} className="btn bg-base-100 border-none" key={category.category_id}>{category.category_name}</NavLink></div>)}
        </div>
    );
};

export default LeftHome;