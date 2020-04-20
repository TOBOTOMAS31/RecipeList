import React from 'react';
import { Link } from 'react-router-dom';
import RecipesList from './RecipesList';
import '../css/ListPage.css';


export default function ListPage() {
     return (
        <div className="listPage">
            <p>
                <Link to="/">Back to home page</Link>
            </p>
            <h3>Choose the recipes you want to degustate</h3>
                <div>
                 <RecipesList />
                </div>
        </div>
    );
}

