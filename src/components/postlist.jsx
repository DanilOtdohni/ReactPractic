import React from 'react';
import Postitem from "./postitem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const Postlist = ({posts, title, remove}) => {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            <TransitionGroup>
            {posts.map((post, index) =>
                <CSSTransition
                    key={post.id}
                    timeout={500}
                    classNames="post"
                    >
                <Postitem remove={remove} number={index + 1} post={post} key={post.id}/>
                </CSSTransition>
            )}

            </TransitionGroup>
        </div>
    );
};

export default Postlist;