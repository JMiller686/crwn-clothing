import React from 'react';

import { CollectionPreviewContainer, PreviewTitle, PreviewContainer} from './collection-preview.styles';

import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({title, items}) => {
    return (
        <CollectionPreviewContainer>
            <PreviewTitle>{title.toUpperCase()}</PreviewTitle>
            <PreviewContainer>
                {items.filter((item, idx) => {
                    return idx < 4
                }).map(item => (
                    <CollectionItem key={item.id} item={item}/>
                ))}
            </PreviewContainer>
        </CollectionPreviewContainer>
    )
}

export default CollectionPreview;
