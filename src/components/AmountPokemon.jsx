import React, { Component } from 'react';
import {connect} from 'react-redux';

class AmountPokemon extends Component {
    render() {
        return (
            <React.Fragment>
            Unidades : {this.props.game_shop.pokemon}
            </React.Fragment>
        )
    }
}

//to convert state to props
const mapStateToProps = (state) =>{
    return{
        game_shop: state.game_shop
    }
}

// connect executes that function en set the state to the function

export default connect(mapStateToProps)(AmountPokemon);

