import React from 'react';
import {connect} from 'react-redux';
import {buyCake, buyIceCream, buyBurger} from '../redux';

const ItemContainer = (props) => {
    return (
        <div>
            <h2>Item ({props.name})- {props.item}</h2>
            <button onClick={props.buyItem}>Buy {props.name}</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {

    const itemState = ownProps.cake 
        ? state.cake.numOfCakes
        : (ownProps.iceCream ? state.iceCream.numOfIceCreams : state.burger.numOfBurgers)

        if (itemState === state.cake.numOfCakes) {
            return {
                item: itemState,
                name: "Cake"
                    }

        }
        
        if (itemState === state.iceCream.numOfIceCreams) {
            return {
                item: itemState,
                name: "IceCream"
                    }

        }
        return {
            item: itemState,
            name: "Burger"
                }

};

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake
        ? () => dispatch(buyCake()) 
        : (ownProps.iceCream ? () => dispatch(buyIceCream())
            : () => dispatch(buyBurger()))
         

        return {
            buyItem: dispatchFunction
        }
};

export default connect (mapStateToProps, mapDispatchToProps) (ItemContainer)
