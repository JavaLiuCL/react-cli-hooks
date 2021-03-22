import React, { useState} from "react";
import Counter from './Counter'
import myContext from './createContext'
//父组件的方法
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4>我是父组件</h4>
      <p>点击了 {count} 次!</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        点我
      </button>
      {/* 关键代码 */}
      {/* 提供器 */}
      <myContext.Provider value={count}>
        <Counter />
      </myContext.Provider>
    </div>
  );
}
export default App;
