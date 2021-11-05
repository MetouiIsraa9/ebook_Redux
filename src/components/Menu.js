import React from 'react'
import { Navbar } from 'react-bootstrap'

export default function Menu() {
    return (
        <div class="sidebar ">
        <div class="logo">
            <a href="#">BOOK <span>Shop</span></a>
        </div>

        <ul class="list-group nav_likns list-group-flush">
            <li class="list-group-item ">
                <a href="/admin_Dashbord.html">
                    <i class="fa fa-th-large" aria-hidden="true"></i>
                    <span class="link_name">Dashboard</span>
                </a>
            </li>
            <li class="list-group-item">
                <a href="">
                    <i class="fa fa-book" aria-hidden="true"></i>
                    <span class="link_name">Books</span>
                </a>
            </li>
            <li class="list-group-item">
                <a href="">
                    <i class="fa fa-boxes" aria-hidden="true"></i>
                    <span class="link_name">Categories</span>
                </a>
            </li>
            <li class="list-group-item">
                <a href="">
                    <i class="fa fa-list" aria-hidden="true"></i>
                    <span class="link_name">Order List</span>
                </a>
            </li>
            <li class="list-group-item">
                <a href="/login.html">
                    <i class="fa fa-sign-out-alt" aria-hidden="true"></i>
                    <span class="link_name">Log out</span>
                </a>
            </li>
        </ul>

    </div>
    )
}
