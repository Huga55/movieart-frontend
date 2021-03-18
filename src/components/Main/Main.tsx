import React from "react";
import c from "./Main.module.css";
import {Container} from "@material-ui/core";
import Article from "../Article/Article";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Main = () => {
    return(
        <div className={c.main}>
            <Container maxWidth="md">
                <h1 className={c.main__title}>
                    Articles
                </h1>
                <div className={c.main__tools}>
                    <span className={c.main__sort}>
                        Sorting
                    </span>
                    <span className={`${c["main__sort-date"]} ${c.main__tool}`}>
                        Date <KeyboardArrowDownIcon />
                    </span>
                </div>
                <div className={c.main__articles}>
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                </div>
                <div className={c.main__pagination}>
                    <span className={c.main__numb}>
                        1
                    </span>
                    <span className={c.main__numb}>
                        2
                    </span>
                    <span className={c.main__numb}>
                        3
                    </span>
                </div>
            </Container>
        </div>
    );
}

export default Main;