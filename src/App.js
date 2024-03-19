import { useState } from 'react';
import './App.css';
import Box from './component/Box';



const choice = {
  rock : {
      name:"Rock",
      img: "https://images.squarespace-cdn.com/content/v1/55be33aee4b0dbaefa8ec173/1544975599807-LOURJ9MN1KKMV7U13WSF/gag-gift-send-a"
  },
  scissors: {
    name:"Scissors",
    img : "https://res.cloudinary.com/rsc/image/upload/bo_1.5px_solid_white,b_auto,c_pad,dpr_2,f_auto,h_399,q_auto,w_710/c_pad,h_399,w_710/C0487101-01?pgw=1"

  }, 

  paper: {
    name: "Paper",
    img: "https://m.media-amazon.com/images/I/61OorFhm6SL._AC_UF894,1000_QL80_.jpg"
  }


}

function App() {

  const [userSelect, setUserSelect] = useState(null)

  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
    // usersate 는 바로 userselect= choice(userchoice) 이렇게 넣어주면 x 
    // 다시 state를 바꿔주는 함수를 써줘야한다 set 으로 
   
  }

  return (
    <div>
    <div className='main'>
      <Box title="you" item={userSelect}/>
      {/* <Box title="computer" /> */}

    </div>

    <div className='main'>
      <button onClick={()=> play("scissors")}>가위</button>
      <button onClick={()=> play("rock")}>바위</button>
      <button onClick={()=> play("paper")}>보</button>
    </div>
    {/* play()  > 이게 함수를 실행시키는 형식이라 ui 를 부를 때 실행까지 시켜버린다 */}
    {/* <button onClick={play("scissors")}>가위</button> 이렇게라면 */}
    {/* 그래서 <button onClick={()=> play("scissors")}>가위</button> 이렇게 함수안에 넣어야한다 ui 그릴 때 실행되지 않도록  */}
    </div>
  );
}

export default App;
