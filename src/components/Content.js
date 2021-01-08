import "./Content.css"
import { Component } from "react";
import Search from "./Search.js";
import Filter from "./Filter.js";
import getDotForType from "./common/util";
/**
 * Wrapper function for main display
 */
class Content extends Component {
    constructor() {
        super();
        this.state = { 
            searchValue: "",
            fullPokeDex: [],
            pokeMap: null,
            strengthFilters: null,
            weaknessFilters: null,
         };
    }

    componentDidMount = async () => {
        const data = await fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
        const json = (await data.json()).pokemon;

        this.setState({
            fullPokeDex: json,
            strengthFilters: new Map(),
            weaknessFilters: new Map()
        })
        this.convertDexToMap(json)
    }

    renderPokedex = () => {
        const pokeList = this.getFilteredPokemon().map((pokemon) =>
            <div className="pokemon-cell" key={pokemon.num.toString()}>
                {pokemon.name}
                {pokemon.type.map(type => {
                    return getDotForType(type)
                })}
            </div>
        );
        return (
            pokeList
        );
    }

    getFilteredPokemon = () => {
        return this.state.fullPokeDex.filter((pokemon) => {
            if(this.state.searchValue === "" || pokemon.name.includes(this.state.searchValue)) {
                if(!this.state.strengthFilters.size && !this.state.weaknessFilters.size) {
                    return true
                } else {
                    // check if strength in map
                    for(const key of this.state.strengthFilters.keys()) {
                        if(!pokemon.type.includes(key)) {
                            return false
                        }
                    }
                }
 
                if(!this.state.weaknessFilters.size) {
                    return true
                } else {
                    for (const key of this.state.weaknessFilters.keys()) {
                        console.log(key)
                        if (!pokemon.weaknesses.includes(key)) {
                            return false
                        }
                    }
                }
                return true
            } else {
                return false
            }
        });
    }

    /**
     * 
     * @param {JSON} pokemons 
     * This function creates a map keyed by the pokemon num, allows for faster lookups for next evolution & prev evolution, passed via props -> details
     */
    convertDexToMap = (pokemons) => {
        const pokeMap = new Map();

        for (const pokemon of pokemons) {
            pokeMap.set(pokemon.num, pokemon)
        }

        this.setState({
            pokeMap: pokeMap
        })
    } 

    searchChanged = (event) => {
        this.setState({
            searchValue: event.target.value
        })
    }

    /**
     * 
     * toggle values in map based on event
     */
    weaknessFilterChanged = (event) => {
        const {
            id
        } = event.target;

        const temp = this.state.weaknessFilters;
        const box = temp.get(id);

        // true only
        if(box) {
            temp.delete(id)
        } else {
            temp.set(id, true)
        }

        this.setState({
            weaknessFilters: temp
        })
    }

    strengthFilterChanged = (event) => {
        const {
            id
        } = event.target;

        const temp = this.state.strengthFilters;
        const box = temp.get(id);

        // true only, delete the key
        if (box) {
            temp.delete(id)
        } else {
            temp.set(id, true)
        }

        this.setState({
            strengthFilters: temp
        })
    }

    render() {
        return (
            <div className="content-container">
                <div className="filter-search-container">
                    <Search searchValue={this.state.searchValue} searchChanged={this.searchChanged} />
                    <Filter type="Strength" filterChanged={this.strengthFilterChanged} />
                    <Filter type="Weakness" filterChanged={this.weaknessFilterChanged} />
                </div>
                <div className="pokemon-container">
                    {this.renderPokedex()}
                </div>
            </div>
        );
    }
}

export default Content