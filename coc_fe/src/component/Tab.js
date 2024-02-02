import { useState } from 'react';

const Tab = () => {
  // Tab Menu 중 현재 어떤 Tab이 선택되어 있는지 확인하기 위한 currentTab 상태와 currentTab을 갱신하는 함수가 존재해야 하고, 초기값은 0.
  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { id:1, name: '게시글', content: 'Main' },
    { id:2, name: '방명록', content: 'Tab menu TWO' },
    { id:3, name: 'Tab3', content: 'Tab menu THREE' },
  ];

  const selectMenuHandler = (index) => {
    // parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않는다
    // 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신.
    clickTab(index);
  };

  return (
    <>
      <div>
        <div  className='tabDiv'>
          <ul>
            {/*// 아래 하드코딩된 내용 대신에, map을 이용한 반복으로 코드를 수정
          // li 엘리먼트의 class명의 경우 선택된 tab 은 'submenu focused', 나머지 2개의 tab은 'submenu'*/ }
            {/* <li className="submenu">{menuArr[0].name}</li>
            <li className="submenu">{menuArr[1].name}</li>
            <li className="submenu">{menuArr[2].name}</li> */}
            {menuArr.map((el,index) => (
                <li className={index === currentTab ? "submenu focused" : "submenu" }
                onClick={() => selectMenuHandler(index)}>{el.name}</li>
              ))}
          </ul>
        </div>
        <div style={{textAlign:"center"}}>
          <p>{menuArr[currentTab].content} </p>
        </div>
      </div>
    </>
  );
};

export default Tab;