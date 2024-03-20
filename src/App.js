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
      const [userSelect, setUserSelect] = useState(null);
      const [computerSelect, setComputerSelect] = useState(null);
      const [result, setResult] = useState("");
      const play = (userChoice) => {
        setUserSelect(choice[userChoice]);
        let computerChoice = randomChoice();
    setComputerSelect(computerChoice)
    // usersate 는 바로 userselect= choice(userchoice) 이렇게 넣어주면 x 
    // 다시 state를 바꿔주는 함수를 써줘야한다 set 으로 
    setResult(judgement(choice[userChoice], computerChoice));
  };
 
  



const randomChoice =() => {
  // Object.keys -객체의 키값만 뽑아서 어레이로 만들어주는 함수다 ! 
  // 지금 choice 의 키값은 rock scissors paper 로 0 1 2 가 만들어진다.
  let itemArray = Object.keys(choice); 
    console.log("item array", itemArray);

  // math.random 은 0~1 사이의 랜덤한 숫자를 내보낸다.
  // 그렇다면 가위바위보를 내보내는 것과 0~1 사이의 숫자를 내보내는 것을 어떻게 연관지을 것인가
  // 배열로 한다 . 알고리즘 문제 ! 
  let randomItem = Math.floor(Math.random() * itemArray.length);
  console.log("random value", randomItem);
  // 2.  몇  1. 몇 0. 몇 이렇게 된다 앞에 012 값만 가져오면 인덱스번호가 되므로 
  //  소수점버리는 함수 Math.floor 을 쓴다.
  let final = itemArray[randomItem];
    return choice[final];
  
}
const judgement = (user, computer) => {
  console.log("user", user, "computer", computer);

//user ===computer tie 비겼다 
  //user ===rock , computer === scissors user 이긴 것 
  //user === rock , computer === paper user 진 것 
  // user === scissors computer paper user 이긴것 
//  user === scissors computer rock user 진것
// user === paper computer rock user 이긴것
// user paper computer scissors user 진것 



//  이걸 삼항 연산식으로 바꾸기 

// if (user.name === computer.name ) {
//   return "tie"
// } else if  (user.name ==="Rock" ) {
//     if (computer === "Scissors") {
//       return "Win"}
//       else {
//         return "lose" }
//       }
//     }
if (user.name == computer.name) {
  return "tie";
} else if (user.name == "Rock")
  return computer.name == "Scissors" ? "win" : "lose";
else if (user.name == "Scissors")
  return computer.name == "Paper" ? "win" : "lose";
else if (user.name == "Paper")
  return computer.name == "Rock" ? "win" : "lose";
};
//  삼항연산식



return (
  <div>
    <div className="main">
      <Box title="You" item={userSelect} result={result} />
      <Box title="Computer" item={computerSelect} result={result} />
    </div>
    <div className="main">
      <button onClick={() => play("scissors")}>가위</button>
      <button onClick={() => play("rock")}>바위</button>
      <button onClick={() => play("paper")}>보</button>
    </div>
  </div>
);
}

    /* play()  > 이게 함수를 실행시키는 형식이라 ui 를 부를 때 실행까지 시켜버린다 */
    /* <button onClick={play("scissors")}>가위</button> 이렇게라면 */
    /* 그래서 <button onClick={()=> play("scissors")}>가위</button> 이렇게 함수안에 넣어야한다 ui 그릴 때 실행되지 않도록  */


export default App;
