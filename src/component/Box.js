import React from 'react'

const Box = (props) => {

  let result ;
  if (
     props.title === "Computer" && props.result !== "tie" && props.result !== ""  ) {

 result = props.result === "win" ? "lose" : "win";
  } else {// 위의 경우가 아니라면 props&nbsp;로 전달된 결과를 그대로 쓴다.
    result = props.result;
  }
  
 
return (

    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <h2>{props.item && props.item.name}</h2>
      <img className="item-img" src={props.item && props.item.img} />

       {/* 맨처음에 값이 없을 수도 있다 그래서 에러나는 것을 막기위해 >> null 면 false 가 리턴된다. 앞에props.item 가 false 면 뒤에는 false 가 된다 
       &&연산자기 때문에 그래서 props.item 을 가드로 써준다    */}
 <h2>{result}</h2>
    </div>  );
};

export default Box
