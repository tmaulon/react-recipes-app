import React, { Component } from 'react'

class AddRecipe extends Component {
    state = {
        nom: '',
        image: '',
        ingredients: '',
        instructions: ''
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        event.preventDefault()

        const recipe = { ...this.state };
        this.props.addRecipe(recipe)

        // reset
        Object.keys(recipe).forEach(item => { recipe[item] = '' })
        this.setState({ ...recipe })
    }


    render() {
        return (
            <div className="card">
                <form className="admin-form ajouter-recette" onSubmit={this.handleSubmit}>
                    <input value={this.state.nom} onChange={this.handleChange} name='nom' type="text" placeholder="Nom de la recette" />
                    <input value={this.state.image} onChange={this.handleChange} name='image' type="text" placeholder="nom de l'image" />
                    <textarea value={this.state.ingredients} onChange={this.handleChange} name="ingredients" rows="3" placeholder="Liste des ingrédients"></textarea>
                    <textarea value={this.state.instructions} onChange={this.handleChange} name="instructions" rows="15" placeholder="Liste des instructions"></textarea>
                    <button type='submit'>Ajouter une recette</button>

                </form>

            </div>
        )
    }
}

export default AddRecipe