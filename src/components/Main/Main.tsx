import React, {useEffect, useState} from "react";
import c from "./Main.module.css";
import {Container} from "@material-ui/core";
import Article from "../Article/Article";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {useDispatch, useSelector} from "react-redux";
import {ArticleType, getArticles} from "../../redux/artticleReducer";
import {AppStateType} from "../../redux/store";

const Main = () => {
    const [dateSort, setDateSort] = useState<null | "up" | "down">(null);
    const [articleList, setArticleList] = useState<null | Array<ArticleType>>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState<number[]>([]);

    const { articles } = useSelector((state: AppStateType) => state.article);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArticles());
    }, [])

    useEffect(() => {
        if(articles && articles.length > 0) {
            let pages = [];
            const countPages = Math.round(articles.length / 4 );
            for(let i = 0; i < countPages; i++) {
                pages.push(i + 1);
            }
            setPages(pages);
            setArticleList(articles);
        }else {
            setPages([]);
        }
    }, [articles]);

    const changeDateSort = () => {
        if(!dateSort || dateSort === "down") {
            setDateSort("up");
            articleList?.sort((art1, art2) => art1.year - art2.year);
        }else {
            setDateSort("down");
            articleList?.sort((art1, art2) => art2.year - art1.year);
        }
    }


    return(
        <div className={c.main}>{currentPage}
            <Container maxWidth="md">
                <h1 className={c.main__title}>
                    Articles
                </h1>
                <div className={c.main__tools}>
                    <span className={c.main__sort}>
                        Sorting
                    </span>
                    <span onClick={changeDateSort} className={`${c["main__sort-date"]} ${c.main__tool} ${!dateSort || dateSort === "up"? "" : c["main__sort-date_active"]}`}>
                        Date <KeyboardArrowDownIcon />
                    </span>
                </div>
                <div className={c.main__articles}>
                    {
                        articleList?.map((art, index) => {
                            if(index + 1 >=  ( currentPage * 4 - 3 ) && index + 1 <= currentPage * 4) {
                                return <Article key={art._id} data={art}/>
                            }
                        })
                    }
                </div>
                <div className={c.main__pagination}>
                    {
                        pages?.map((numb) =>
                            <span onClick={() => setCurrentPage(numb)}
                                  className={`${c.main__numb} ${currentPage === numb? c.main__numb_active : ""}`}>
                                {numb}
                            </span>)
                    }
                </div>
            </Container>
        </div>
    );
}

export default Main;