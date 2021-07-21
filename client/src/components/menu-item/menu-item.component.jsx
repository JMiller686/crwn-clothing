import React from 'react';
import { withRouter } from 'react-router-dom';

import { MenuItemContainer, BackgroundImage, MenuItemContent, MenuItemTitle, MenuItemSubTitle } from './menu-item.styles';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match }) => {

    return (
        <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <BackgroundImage imageUrl={imageUrl} className='background-image'/>
            <MenuItemContent className='content'>
                <MenuItemTitle>{title.toUpperCase()}</MenuItemTitle>
                <MenuItemSubTitle>SHOP NOW</MenuItemSubTitle>
            </MenuItemContent>
        </MenuItemContainer>
    )
}

export default withRouter(MenuItem);
