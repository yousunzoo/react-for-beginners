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

- callback 함수 안에 return (cleanUp function) 입력하면 컴포넌트가 마운트 해제될 때 cleanUp function이 실행된다.
-
