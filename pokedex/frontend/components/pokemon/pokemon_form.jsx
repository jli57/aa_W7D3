import React from 'react';

class PokemonForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      poke_type: "bug",
      attack: "",
      defense: "",
      move1: "",
      move2: "",
      image_url: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeProperty = this.changeProperty.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const pokemon = {
      name: this.state.name,
      poke_type: this.state.poke_type,
      attack: this.state.attack,
      defense: this.state.defense,
      moves: [this.state.move1, this.state.move2],
      image_url: this.state.image_url,
    };
    this.props.createNewPokemon(pokemon);
  }

  changeProperty(e){
    return this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (

      <form className="pkm-new" onSubmit={ this.handleSubmit}>
        <input type="text" onChange={this.changeProperty} name="name" placeholder="name" value={this.state.name} />
        <select onChange={this.changeProperty} name="poke_type">
          {
            POKEMON_TYPES.map( (type) => <option value={type}>{type}</option> )
          }
        </select>
        <input type="text" onChange={this.changeProperty} name="image_url" placeholder="image url" value={this.state.image_url} />
        <input type="text" onChange={this.changeProperty} name="attack" placeholder="attack" value={this.state.attack} />
        <input type="text" onChange={this.changeProperty} name="defense" placeholder="defense" value={this.state.defense} />
        <input type="text" onChange={this.changeProperty} name="move1" placeholder="move 1" value={this.state.move1} />
        <input type="text" onChange={this.changeProperty} name="move2" placeholder="move 2" value={this.state.move2} />
        <input type="submit" value="Create New Pokemon" />
      </form>
    );
  }

}

export default PokemonForm;
