import React from "react";
import c from "./Article.module.css";
import { NavLink } from "react-router-dom";
import {ArticleType} from "../../redux/artticleReducer";

type PropsType = {
    data: ArticleType
}

const Article: React.FC<PropsType> = (props) => {
    const { name, year } = props.data;

    return(
        <div className={c.article}>
            <div className={c.article__top}>
                <div className={c.article__img}>
                    {name}
                </div>
                <div className={c.article__info}>
                    <h2 className={c.article__title}>Title of Article</h2>
                    <div className={c.article__year}>
                        Year: {year}
                    </div>
                    <div className={c.description__description}>
                        Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cumque eos excepturi hic molestias nostrum obcaecati quis recusandae sunt, voluptates! Culpa in mollitia quasi qui?
                    </div>
                </div>
            </div>

            <div className={c.article__more}>
                <NavLink to="/" className={c.article__link}>
                    Read more
                </NavLink>
            </div>
        </div>
    );
}

export default Article;