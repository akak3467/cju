import React from 'react';
import PropTypes from 'prop-types';
const MyComponent = ({name ,패이브, children}) => {
    return (
      <div>
          안녕하세요 제이름은 {name} 입니다 <br/>
          children 값은 {children}입니다
          <br/>
          제가 좋아하는 숫자는 {패이브}입니다.
      </div>
    );
}; 
MyComponent.defaultPoros = {
    name: '기본 이름'
};

MyComponent.PropTypes = {
    name: PropTypes.string,
    패이브:PropTypes.number.isRequired
};

export default MyComponent;