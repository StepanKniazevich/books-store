import React, { Component } from 'react'
import { useEffect, useState } from 'react'


export default function Fetch() {

    const [bookStore, setBooksStore] = useState([])

    useEffect(() => {
        fetch('https://api.itbook.store/1.0/search/mongodb')
            .then(res => res.json())
            .then(res => setBooksStore(res.books))
    }, [])

    console.log(bookStore);
    return (
        <div> </div>
    )
}


