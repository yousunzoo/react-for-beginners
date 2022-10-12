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
