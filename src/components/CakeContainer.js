import React from 'react';
import {connect} from 'react-redux';
import {buyCake} from '../redux';

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes- {props.numOfCakes}</h2>
            <button onClick = {props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes //Here, to access the "numOfCakes", we need to access state then 
        //cake and then numOfCakes. It is because to access numOfCakes in the initial state in the 
        // reducer, it has to be accessed thorough root reducer, where cakeReducer has been referred as "cake".
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer);
