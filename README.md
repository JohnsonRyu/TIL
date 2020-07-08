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
## (3) [JS] 원시 타입
Javascript에서는 `원시 타입(Primitive Type)`과 `참조 타입(Reference Type)` 두 가지 자료형을 제공한다. `자바스크립트는 느슨한 타입 언어 || 동적 언어이다.` 이 말은 변수의 타입을 미리 지정할 필요가 없다는 의미이다. 타입은 프로그램이 처리되는 과정에서 자동으로 파악되고, 같은 변수에 여러 타입의 값을 넣을 수 있다는 뜻이다.

- 그렇기 때문에 프로그램 규모가 커질 수록, Typescript와 같은 대체제를 사용한다. (타입에 따른 실수를 방지 하기 위한 방법이자 도구이다.)

```
var test;             // undefined
test = null;          // null    
test = 1206;          // Number
test = "Ryuk";        // String
test = true;          // Boolean
test = Symbol("key"); // ES6 추가 Symbol
```

### (1) undefined
- 선언되었지만, 초기화가 되지 않음을 의미한다.
- undefined 타입은 undefined만 갖을 수 있다. 
- 초기화가 진행 된 변수를 다시 undefined로 초기화를 할 수 있다. 하지만, 다시 값이 없음을 의미하기 위해 `null`이 존재하기 때문에 우리는 값이 undefined일 경우 초기 생성 된 상태라는 것으로 상태를 사용할 수 있을 것 이다.

```
var test;               // undefined
test = "something";     // string

// undefined 하지만, 보통 초기화 된 상태에서는 다시 undefined으로 초기화 하지 않는다.
test = undefined;       // undefined
```

### (2) null
- `값이 없음`을 의미한다.
- null 타입은 null만 갖을 수 있다.

```
var test;       // undefined
test = null;    // null
```

### (3) Boolean
- 논리적 요소를 나타내는 타입이고, true와 false 두 값을 갖을 수 있다.
- 0 - false 그 외, 모든 값은 true이다.

### (4) Number
- 정수, 실수, 음수를 표현할 수 있다.
- `+,- Infinity` / `+,- 0` / `Number.MAX_VALUE, Number.MIN_VALUE` / `NaN (숫자 아님)`등 다양한 상수값과 무한대, 0을 양수 음수로 표현하는 등 많은 기능이 있다.
- `Number.MAX_SAFE_INTEGER(9007199254740991)`, `Number.MIN_SAFE_INTEGER (-9007199254740991)` 해당 범위를 벗어나면 JS에서 숫자는 더 이상 안전하지 않다.
- 다루는 숫자가 커진다면, BigNumber 라이브러리를 활용하거나 직접 만들어야 한다. `16자리가 넘어간다면 JS Number를 다시 찾아봐야한다`는 정도만 인지 하고 넘어가면 될 것 같다.

### (5) String
- 문자 || 텍스트를 나타내는 타입이다.
- 정규식을 통하여, string 형식을 바꿀 수 있다.
- JS 문자열은 변경 불가능 상태(immutable)이다. 문자열이 한번 생성 되면, 중간중간 특정 값들을 수정할 수 없다는 이야기다. 하지만, String.substr(), String.concat() 등을 활용하여 다시 변수에 대입하여 재활용 할 수 있다.

```
// 정규식을 통한 toLocaleString()
// 1206 -> 1,206

var test = 1206;
test.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
```
```
var test = "안냐세여~~"

// immutable하기 때문에 ~~ 만 삭제할 수 없다.
// 하지만, 함수들을 활용해서 변경할 수 있다.

test = test.substr(0, 4);  // 안냐세여
```

### (6) Symbol
- ES6 (ECMAScript 6)에서 추가 되었다. symbol은 유일하고 변경 불가능(immutable)한 타입이다.
- 객체 속성의 key값으로 사용 될 수 있고, C언어의 enum과 비슷하다.
- **Symbole을 정확하게 이해하고 공감하려면, object & key에 대하여 먼저 알아야할 것 같다.**
```
var symbol = Symbol("abc");   // Symbol(abc)
var symbol2 = Symbol("abc");   // Symbol(abc)

// 같은 값의 key를 대입하여도, Symbol로 선언하면 같지 않다.
```
---
## (4) [JS] 형변환
대부분의 언어에서 형변환이 존재한다. 직접 한땀한땀 변경하는 방법과 자동으로 변경하는 방법 정도로 생가하면 좋을 것 같다. **분명 한 것은 한땀한땀 변경하는 것을 모두가 추천할 것이다.**

### 암묵적 타입 변환(Implicit Coercion)
* 자바스크립트의 강점이기도 하지만, 가장 피해야할 기능이기도 하다. 자바스크립트는 **느슨한 언어**이기에  **var**는 어떤 타입이든 자동적으로 변경 된다.

```
1 + "Ryuk"    // 1Ryuk : string
1 + "2" + 3   // 121 : string
1 + 2 + "3"   // 33 : string
2 * "2"       // 4 : number
1 + true      // 2 : number
1 + false     // 1 : number
```
예제가 더 보고 싶다면 [(링크)](https://dev.to/promhize/what-you-need-to-know-about-javascripts-implicit-coercion-e23)

* 위와 같은 기괴한 타입 변환이 이루어지는데. 사실 눈으로 한 번 감상하면 대략적인 규칙을 알 수 있다. 이렇게 가볍게 다루는 것은 **결국 이렇게 쓰면 안되고, 코드를 짜다보면 이런 기괴한 코드를 작성할 일은 없기 때문이다.** 하지만, 많은 개발자들과 함께 작업을 하다보면 이런 기괴한 코드가 나오고 협업하는 개발자들은 해당 코드를 파악하기 위하여 시간을 많이 쏟아야 되니 애초에 더 타이트한 타입스크립트를 사용하게 되는 것이다.

### 명시적 타입 변환 (Explicit Coercion)
* 명시적 타입 변환은 말 그대로 **명시!** 하겠다는 것이다. Number(), parseInt(), parseFloat(), String(), Boolean() 등이 있다.

```
Number(null)            // 0
Number(undefined)       // NaN
Number(true)            // 1
Number(false)           // 0
Number(" 12 ")          // 12
Number("-12.34")        // -12.34
Number("\n")            // 0
Number(" 12s ")         // NaN
Number(123)             // 123
String(123)             // "123"
String(-12.3)           // "-12.3"
String(null)            // "null"
String(undefined)       // "undefined"
String(true)            // "true"
String(false)           // "false"
Boolean('')             // false
Boolean(0)              // false     
Boolean(-0)             // false
Boolean(NaN)            // false
Boolean(null)           // false
Boolean(undefined)      // false
Boolean(false)          // false
Boolean({})             // true
Boolean([])             // true
Boolean(Symbol())       // true
Boolean(function() {})  // true
```

작성하기 쉬운 코드는 깊어질 수록 큰 혼란을 가져오게 되는 것 같다.</br>
타입을 신경 쓰지 않은 Javascript 코드로 협업을 할 상상을 하면 가슴이 뛴다.</br>
Typescript를 도입하는 프로젝트의 수가 점차 증가하여 지금은 약 28%를 차지한다고 하는데.</br>
2012년 10월 1일 약 7년전에 나온 것 치고 비중이 점점 높아지는 이유를 알 것도 같다.

---
