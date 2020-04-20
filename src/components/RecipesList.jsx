import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class RecipesList extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            meals: {
                strMeal: "",
                strMealThumb: "",
            }
        };
    }

    componentDidUpdate(prevProps) {
        const {
            match: {
                params: { strCategorie }
            }
        } = this.props;
        const prevCategorieId = prevProps.match.params.strCategorie;
        if (prevCategorieId !== strCategorie) {
            this.loadCategorieList(strCategorie);
        }
    }

    componentDidMount() {
        const strCategorie = this.props.match.params.strCategorie;
        console.log(strCategorie);
        this.loadCategorieList(strCategorie);
    }

    loadCategorieList(strCategorie){
        axios
            .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategorie}`)
            .then(response => response.data)
            .then(data => {
                this.setState({
                    meals: data,
                })
            });
    }


    render() {
        const meals = this.state.meals;
        return (
            <div>
                <div>
                    <img src={meals.strMealThumb} alt={meals.strMeal} />
                </div>
                <div>
                    <h2>{meals.strMeal}</h2>
                </div>
            </div>
        )
    }
}

export default withRouter(RecipesList);