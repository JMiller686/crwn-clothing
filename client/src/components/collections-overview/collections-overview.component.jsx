import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

import { CollectionOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = ({collections}) => (
    <CollectionOverviewContainer>
        {collections.map(({id, ...otherItemProps}) => (
            <CollectionPreview key={id} {...otherItemProps} />
        ))}
    </CollectionOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);
