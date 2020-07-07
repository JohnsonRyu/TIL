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
- C++ 에서는 포인터형 변수가 아무 것도 가르키지 않을 때 nullptr이 된다. (null은 0이 래핑 되어있다.)
- null의 타입은 null이다. 하지만, `typeof로 출력 되는 값은 object 이다.` 이는, 코드가 업데이트 되지 않은채 많은 시간이 흘렀기 때문이라고 한다. [(링크)](https://2ality.com/2013/10/typeof-null.html)
```
Boolean(null) 에서는 false
Number(null) 에서는 0
String(null) 에서는 "null"
```

### `NaN` : JS에서만 존재하는 '숫자가 아니다'를 의미하는 값
- undefined를 Number로 형변환 하면 NaN이 되지만, null을 변환하면 0이 나온다. 이는 C++에서 null이 0과 래핑 되어있는 것과 같다.
- NaN === NaN 은 false다. NaN을 검사하기 위해서는 `isNaN()` 이라는 전용함수를 사용해야한다.
- 하지만 isNaN()은 string, object를 넣어도 성립된다.
```
Number(undefined | string) = NaN

Boolean(NaN) 에서는 false
Number(NaN) 에서는 NaN
String(NaN) 에서는 "NaN"
```


---
## (2) [JS] `==` / `===` 차이점

### 결론 : `==` 유형 비교는 값만 비교, `===` 엄격한 비교는 타입도 비교

(1) 0은 false, 그 외 모든 것은 true이다.

```
// 유형 비교는 값만 비교한다.
// 0은 false 이기에 true가 된다.
// 엄격한 비교는 타입도 비교한다.
// number인 0과 false인 boolean은 타입이 다르다.

0 == false // true
0 === false // false
```

(2) number와 string 또한, (1)과 같은 결과가 출력 된다.

```
1206 == "1206" // true
1206 === "1206" // false
```

(3) null undefined 비교

```
null == undefined // true
null === undefined // false
```

(4) NaN
- 이 친구는 역시 무엇가도 비교할 수 없다.


```
undefined == NaN // false
undefined === NaN // false
null == NaN // false
null === NaN // fasle
NaN == NaN // false
NaN === NaN // false
NaN == "NaN" // false
NaN === "NaN" // false
```
```
// NaN 검사 방법

var a = "류크";   // typeof a 는 string
a = Number(a);   // a = NaN (숫자가 아니다.)
isNaN(a);        // true
```

### 유형 비교 `==` 보다는 엄격한 비교 `===` 를 추천 한다고 한다.
---