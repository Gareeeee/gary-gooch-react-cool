import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PortfolioSidebarList = props => {
    const portfolioList = props.data.map(portfolioItem => {
        return (
            <div key={portfolioItem.id}className='portfolio-item-thumb'> 
                <div className='portfolio-thumb-img'>
                    <img src={portfolioItem.thumb_image_url}/>
                </div>
                <div className='TitleDelete'>
                <h1 className="title">{portfolioItem.name}</h1>
                <a onClick={() => props.handleDeleteClick(portfolioItem)}>
                    <FontAwesomeIcon className='delete' icon='trash' />
                </a>
                </div>
            </div>
        );
    });




    return <div className="portfolio-sidebar-list-wrapper">{portfolioList}</div>;
};

export default PortfolioSidebarList;