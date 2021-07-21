import React from 'react'
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import { CollectionItemContainer, AddButton, BackgroundImage, CollectionFooterContainer } from './collection-item.styles';
 
const CollectionItem = ({item, addItem}) => {
    const { imageUrl, name, price } = item;
    return (
    <CollectionItemContainer>
        <BackgroundImage className='image' imageUrl={imageUrl} />
        
        <CollectionFooterContainer>
            <span>{name}</span>
            <span>${price}</span>
        </CollectionFooterContainer>

        <AddButton inverted onClick={() => addItem(item)}>ADD TO CART</AddButton>
    </CollectionItemContainer>
)}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
