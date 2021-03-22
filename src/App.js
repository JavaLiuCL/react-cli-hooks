import React, { useContext} from 'react';
import myContext from './createContext'

// 关键代码    子组件
function Counter() {
    const count = useContext(myContext);  // 得到父组件传的值
    return (
        <div>
            <h4>我是子组件</h4>
            <p>这是父组件传过来的值：{count}</p>
        </div>
    )
}
export default Counter;
