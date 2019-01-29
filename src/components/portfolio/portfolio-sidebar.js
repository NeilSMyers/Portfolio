import React from 'react';

const PortfolioSidebar = (props) => {
  const portfolioList = props.data.map(item => {
    return (
      <div key={item.id} className="portfolio-item-thumb">
        <div className="portfolio-thumb-img">
          <img src={item.thumb_image_url}/>
        </div>
        <div>
          <h1 className="title">{item.name}</h1>
          <h2>{item.id}</h2>
        </div>
      </div>
    )
  })

  return (
    <div className="portfolio-sidebar-wrapper">
      {portfolioList}
    </div>
  );
}

export default PortfolioSidebar;