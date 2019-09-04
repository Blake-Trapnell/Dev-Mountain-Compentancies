import React, { Component } from "react"
import axios from "axios"
import "./Example.css"

export default class Example extends Component {
    state = {
        foods: null,
        usersearch: '',
        foodsearch: ''
    }

    handleChange(key, value) {
        this.setState({
            [key]: value
        })
    }

    componentDidUpdate(prevprops, prevstate) {
        if (prevstate = this.state) {
            axios.get(`/api/foods?food=${this.state.foodsearch}&user=${this.state.usersearch}`)
                .then(res => (
                    this.setState({
                        foods: res.data
                    })
                )
                )
        }
            return
        }

    render() {
        const { foods } = this.state
        return (
            <div>
                <input onChange={(e) => this.handleChange('usersearch', e.target.value)} name="usersearch" type="text" value={this.state.usersearch} />
                <input onChange={(e) => this.handleChange('foodsearch', e.target.value)} name="foodsearch" type="text" value={this.state.foodsearch} />
                <div>
                    {foods ?
                        foods.map(el => (
                            <div key={el.food_id}>
                                <h1>{el.food_name}</h1>
                            </div>
                        ))
                        : null}
                </div>
            </div>
        )
    }
}