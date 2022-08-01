import s from './../Dialogs.module.css'
import React from "react";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialoges/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <img src='https://klike.net/uploads/posts/2019-03/1551511862_28.jpg'></img>

        <NavLink to={path}>{props.name}</NavLink></div>


}




export default DialogItem;