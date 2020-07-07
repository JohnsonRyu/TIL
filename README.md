# 간단하게 끝내는 개념 정리 
## (1) [JS] undefined / null / NaN 차이

### `undefined` : 선언은 되었으나 값이 할당 되지 않은 상태
- var temp;
```
Boolean(undefined) 에서는 false
Number(undefined) 에서는 NaN
String(undefined) 에서는 "undefined"
```

### `null` : 아무런 값도 나타내지 않는 특수한 값
- var temp = null;
- C++ 에서는 포인터형 변수가 아무 것도 가르키지 않을 때 null이 된다.
```
Boolean(null) 에서는 false
Number(null) 에서는 0
String(null) 에서는 "null"
```

### `NaN` : JS에서만 존재하는 '숫자가 아니다'를 의미하는 값
```
Number(undefined | string) = NaN

Boolean(NaN) 에서는 false
Number(NaN) 에서는 NaN
String(NaN) 에서는 "NaN"
```
---