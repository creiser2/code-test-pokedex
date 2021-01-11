import { Component, Fragment } from "react";
import getDotForType from "./common/util";
import "./Details.css";
import { withRouter } from "react-router";
import Header from "./Header.js";


class Details extends Component {
    state = {
        loaded: false
    }

    componentDidMount = async () => {
        if(!this.props.location.state) {
            // just resetting the href if user tries to jump to /:id without going through root
            const domainPort = /(https?:\/\/\w+\:?)(\d+)/.exec(window.location.href)
            window.location.href = domainPort[1] + domainPort[2]
        } else {
            this.setState({
                pokemon: this.props.location.state.pokemon,
                loaded: true
            })
        }
    }


    renderWeaknesses = () => {
        if(this.state.pokemon.weaknesses) {
            return this.state.pokemon.weaknesses.map((weakness) => {
                return (
                    <div className="strength-dot" key={weakness.toString()}>
                        {getDotForType(weakness)}
                        {weakness}
                    </div>
                )
            })
        }
    }

    renderPreEvolutions = () => {
        if(this.state.pokemon.prev_evolution) {
            return this.state.pokemon.prev_evolution.map((pokemon) =>
                this.renderLinkData(pokemon)
            )
        }
    }
    

    renderEvolutions = () => {
        if(this.state.pokemon.next_evolution) {
            return this.state.pokemon.next_evolution.map((pokemon) =>
                this.renderLinkData(pokemon)
            )
        }   
    }

    renderLinkData = (pokemon) => {
        return (
            <div className="pokemon-evo-card" key={pokemon.num.toString()} >
                {pokemon.name}
            </div>
        )
    }

    render() {
        return (
            <Fragment>
                { this.state.loaded ? 
                    <div className="details-container">
                        <Header title={`${this.state.pokemon.name} - ${this.state.pokemon.num}`} />
                        <div className="back-btn" onClick={() => this.props.history.goBack()}>
                            Back
                    </div>
                        <div className="stats-container">
                            <div className="r1">
                                <div className="img-card">
                                    <img src={this.state.pokemon.img} alt="pokemon" className="pokemon-img" />
                                </div>
                                <div className="hw-card">
                                    <div>Height: {this.state.pokemon.height}</div>
                                    <div>Weight: {this.state.pokemon.weight}</div>
                                </div>
                            </div>
                            <div className="r2">
                                <div className="strength">
                                    Weaknesses: {this.renderWeaknesses()}
                                </div>
                            </div>
                            <div style={{ color: "white" }}>Pre-Evolutions</div>
                            <div className="evolution-container">
                                {this.renderPreEvolutions()}
                            </div>
                            <div style={{ color: "white" }}>Evolutions</div>
                            <div className="evolution-container">
                                {this.renderEvolutions()}
                            </div>
                        </div>
                    </div>
                :
                    <div>Loading</div>
                }
            </Fragment>

        )
    }
}

export default withRouter(Details);