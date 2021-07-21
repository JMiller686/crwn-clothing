import styled from 'styled-components';

export const MenuItemContainer = styled.div`
    height: ${({size}) => (size ? '380px' : '240px')};
    min-width: 30%;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    position: relative;
    overflow: hidden;

    &:hover {
        cursor: pointer;

        & .background-image {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25,0.45,0.45,0.95);
        }

        & .content {
            opacity: 0.9;
            
        }
    }

    &:first-child {
        margin-right: 7.5px;
    }

    &:last-child {
        margin-left: 7.5px;
    }
`;

export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-image: ${({imageUrl}) => `url(${imageUrl})`};
    background-size: cover;
    background-position: center;
`;

export const MenuItemContent = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background:  #fff;
    opacity: 0.7;
    position: absolute;
    transition: opacity .1s;

    &:hover {
        background: #fff;
        opacity: 0.9
    }
`;

export const MenuItemTitle = styled.h1`
    font-weight: bold;
    margin-bottom: 6px;
    margin-top: 0;
    font-size: 22px;
    color: #4a4a4a;
`;

export const  MenuItemSubTitle = styled.span`

`;