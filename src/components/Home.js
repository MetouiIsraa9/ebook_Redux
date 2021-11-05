import React from 'react'

import Menu from './Menu'
import Books from '../containers/Books';
import CreateBook2  from '../containers/CreateBook2'
import Navbar from '../components/Nav'

export default function Home() {
    return (
        <div>
        <div class="home-section">           
            <Books/>
        </div>
        </div>
    )
}
