# 1. Tour of CRA(create-react-app)

- 한개의 컴포넌트 당 한개의 JS 파일을 가질 수 있어서 모듈화가 가능

## 컴포넌트별 스타일 적용(.module.css)

- 컴포넌트별 스타일을 주고 싶을 때 아무이름.module.css 파일을 생성 + import 하여 사용
- 스타일은 className이나 id로 import한 스타일 객체의 property를 전달하여 적용됨.
- 특정 jsx element에 적용할 스타일이라고 생각하면 됨.
- React 컴파일 과정 중 random class나 id가 생성되기 때문에 .css 파일의 class,id 이름을 굳이 외울 필요가 없다.

`import styles from "./Button.module.css" <Button style={styles.btn}>`
으로 사용

<br />

---

# 2. useEffect

## useEffect

- 두개의 argument를 가지는 함수
- 첫번째 argument는 딱 한번만 실행하고 싶은 코드, 두번째는 [] 배열
- 최초 렌더링시 callback 함수 실행되고 컴포넌트의 상태가 변화되면 callback 함수 재실행 하지 않음.
- 대표적인 사용법 : API 호출, 타이머
- useEffect : 해당 컴포넌트의 렌더링이 완료된 후에 실행
- useMemo : 렌더링 중에 실행

  `useEffect(callback, [])`

## Deps (dependency, [])

- `useEffect(callback,[])` 에서 []에 어떤 변수가 변화될 때 함수가 발동하게 하고 싶은지를 작성
- deps에서는 언제 함수가 실행되게 할지를 정할 수 있다.
- 빈 배열 : 최초 실행시에만 렌더링
- [변수] : 변수 값이 변할 때마다 렌더링

### recap

\*\* React를 사용하는 이유 : 최소 단위의 렌더링

- useState() : 변수, 변수를 제어하는 함수로 구성되며 변하는 값을 제어, 해당 부분의 리렌더링을 위함
- props : 태그의 속성 값을 함수의 argument처럼 컴포넌트에 값을 전달해줌
- useEffect() : 코드의 실행 시점을 관리할 수 있음. dep 없을 경우 최초 1회 실행, 있을 경우 해당 값이 변할 경우 실행됨. deps 여러개 입력 가능
- 부모 컴포넌트에서 리렌더링이 일어날 경우 모든 자식들이 리렌더링이 된다. (useMemo 통해서 변화되지 않는 값 리렌더링 안할 수 있음)
- propType을 설치해 props의 타입을 지정해 줄 수 있다. isRequired로 필수값 지정 가능

## Cleanup

- useEffect의 callback 함수 안에 return (cleanUp function) 입력하면 useEffect의 subscription을 종료할 때 즉, 컴포넌트가 마운트 해제될 때 cleanUp function이 실행된다.
- 메모리 누수를 방지하기 위해 사용된다.

---

<br />

---

# To Do List

- form은 기본적으로 submit 이벤트를 가짐. event.preventDefault() 이용하여 기본 동작 막은 후, input에 todo 입력하고 button 누르면 toDo를 받는 배열 생성
- state는 직접적으로 수정 불가능, setState를 이용하여 수정해야 함.
- check) console.log(toDos)를 onSubmit 함수 안에 입력했을 때 해당 toDo가 빠진 상태로 출력되고 그 다음 실행시에 출력되는 이유
  => setState는 비동기 함수, 컴포넌트가 렌더링 될 때 이전값을 기준으로 판단되기 때문.

- 이전 배열에 새로운 요소 추가하는 방법 : `setTodos((prev)=> [toDo, ...prev])`

## .map()

`[].map((item, index)=>{})`

- 배열을 갖고 있을 때 각각의 element들을 callback 함수를 이용해 원하는 형태로 바꿀 수 있게 해줌.
- 첫 번째 인자로는 배열 값을, 두 번째 인자로는 해당 값의 인덱스를 가져올 수 있다.

- `<li>`를 작성할 때 각자 고유의 key 값이 필요하다. 일반적으로는 index 값 사용

## .filter()

`[].filter((item, index)=>{})`

- callback 함수에 해당하는 내용을 걸러내 줌
- toDo li 삭제하는데 사용
- item 대신 _를 입력하면 index 값만 가져와서 사용
  <br/>
  `const deleteBtn = (index) => { setToDos((current)=> current.filter((_, curIndex)=> curIndex !== index )) }`<br /> jsx 구문에서는`<button onClick={() => deleteBtn(index)}>❌</button>`
  <br/>
  - check) onClick 이벤트 안에 `{deleteBtn(index)}`가 아니라 `onClick={() => deleteBtn(index)}`를 입력하는 이유 : 바로 실행되지 않고 클릭을 기다리는 함수로 쓰기 위함

--> 해당 인덱스를 갖지 않는 값들만 필터링해서 반환

<br/>

---

# Coin Tracker
