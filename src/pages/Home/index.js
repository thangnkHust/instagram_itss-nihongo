import React from 'react'
import useStyles from './styles'
import {createPost, deletePost, getAllPost, getDetailPost, updatePost} from '../../api/PostApi'
import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Body from '../../components/Body';

export default function Home() {
    const classes = useStyles();

    const data = {
        image: "abc",
        title: "Hung da update du lieu nay",
        user: "users/uVkT3MEO10GJJB9yiz62"
    }

    // useEffect(() => {
    //     getDetailPost("zFmZR3BZHVM6mVRxNdd6")
    // }, [])

    return (
        <div className='test2'>
            <Header />
            <Body />
        </div>
    )
}
