import React from 'react';
import "./MainContent.css";

const MainContent = ({pageName, create}) => {
  return (
    <div>
      <main>{pageName} page
        <br />
        {create}
      </main>
    
    </div>
  );
}

export default MainContent;
