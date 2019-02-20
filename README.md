# reactjs_ClickBlock

### **네모 박스 컴포넌트를 쌓고 클릭한 컴포넌트만 다른 색으로 변경이 되는 프로그램입니다.**
![ezgif-2-2b262dd7e29d](https://user-images.githubusercontent.com/38427658/53077113-a687cd00-3534-11e9-9ab6-b282a5b8982b.gif)

* Block.css
    * on CSS 클래스는 주황색 박스, off CSS 클래스는 회색 박스를 나타냅니다. 모두 50px 정사각형입니다.
* Block.js
    ```css
        className={this.props.on ? 'on' : 'off'}
        onClick={this.props.onClick.bind(this)}
    ```
    * on prop 값으로 true/false가 전달됩니다. 이 값이 true 이면, on CSS 서식이 지정되고, false 이면 off CSS 서식이 지정됩니다.
    * 클릭시 prop로 전달된 onClick 메서드를 호출하도록 합니다.
* App.js
    * 생성자에서 2개의 state x,y를 추가합니다. x는 클릭한 위치의 x좌표의 값을, y는 y좌표의 값을 저장합니다.
    ```js
        let isOn = j === this.state.x && i === this.state.y;
    ```
    * Render()의 isOn 속성은 현재 클릭된 좌표 x,y와 박스를 출력하는 좌표 i,j를 비교하여 동일한 경우 on CSS클랙스를 지정하고, 다른 경우 off CSS 클랙스를 지정합니다. 
    ```js
        onClick={this.handleClick.bind(this, i, j)}
    ```
    * Block 컴포넌트의 onClick prop는 this.handleclick() 메소드를 bind 하며 추가값으로 현재 박스의 좌표 i, j 값을 전달합니다.
    ```js
    handleClick(i, j) {
    this.setState({ x: j, y: i });
  }
    ```
    * handleClick() 메소드는 인자로 전달된 i, j 값을 state의 x, y 값으로 지정하여 현재 클릭한 좌표를 저장합니다.