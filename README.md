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
## (5) [JS] 화살표 함수
약 2년전, Javascript를 처음 접할 때 Arrow Function이 그냥 함수를 정의할 때. 꼭 써야하는 문법이라고 생각했다. 난 시작 부터 **ECMAScript2015(ES6)** 가 있었기 때문이다. (왜 2015가 6가 되는진 모르겠다.) JS에 대해서 조금 알게 되고, 실제 제품을 만들 때 '굳이 화살표 함수를 써야하나?' 생각이 들었다. 도대체 이게 왜 나왔고, 뭐가 편리한지 알아보자.

### 스포 : (1) function에 비해 구문이 짧고, (2) this, arguments, super 또는 new.target을 바인딩 하지 않는다. 

### 1. function에 비해 구문이 짧다.
```
// ES5
var foo = function () { console.log("foo") }; // foo

// ES6
var bar = () => console.log("bar"); // bar

// ES5
var plus = function (a, b) { console.log(a + b) };
plus(1,2);  // 3

// ES6
var plus = (a,b) => console.log(a+b);
plus(1,2);  // 3
```

* 오호 한줄로 보니 그럴듯 하다. 하지만 좀 더 여러 줄의 모습을 보자.

```
// ES5
var GH = function () {
  var first = "여러분들";
  var second = "안냐세여~";

  setTimeout(function () {
		console.log(first);
		console.log(second);
	}, 1000);
};

GH(); // 여러분들 \n 안냐세여~

// ES6
var GH = () => {
  var first = "여러분들";
  var second = "안냐세여~";

  setTimeout(() => {
		console.log(first);
		console.log(second);
	}, 1000);
};

GH(); // 여러분들 \n 안냐세여~
```
```
var dataStore = [
    { "id": 1 },
    { "id": 2 },
    { "id": 3 },
    { "id": 4 },
];

// ES5
dataStore.map(function(data){ 
  console.log(data.id);
});

// ES6
dataStore.map((data) => {
  console.log(data.id);
})
```

* 더 사용하기 간략해져서 업데이트가 되었다..? 물론, 조금은... 아주 조금은.... 간략해졌다고 생각한다. class 안에 들어가는 function 정의가 아니고, 무언가 인라인으로 정의할 때? 하지만, 고작 이 이유만으로 babel 세팅까지 해서 화살표 함수를 쓰려고 하진 않을 것 같다. 분명 다른 이유가 있을 것 같다.

### 2. 바인딩 하지 않는다.
바인딩이라는 개념은 추후 보다 더 섬세하게 다루어볼 예정이다. 만만한 친구가 아니다..</br></br>
공식문서를 살펴보면, 화살표함수는 **'메소드 함수가 아닌 곳에 적당하다.'** 라고 적혀있다.</br>
 여기서는 간단하게 차이만 눈에 익혀보자.

 ```
 var RyuK = {
    age: 27,
    
    arrow: () => {
        // this => global

        console.log(this.age)
        // undefined
    },

    normal: function() {
        console.log(this.age)
        // 27
    }
}
 ```

* **객체(object)의 this는 내부의 함수를 포함한 객체 자체에 바인딩 된다.**
* 즉, 위의 예시에서 Arrow Function은 메소드가 아니였기 때문에 this가 바인딩 되지 않았다.
* 고로, 여기까지만 살펴보면 Arrow Function은 this가 바인드 되지 않기 때문에 함수형 프로그래밍에 어울릴 것 같다. 인자를 넣어주고 return을 해주는. 하지만, 정확히는 함수와 메소드의 차이와 바인드에 대해서 더 자세히 공부해야 알 수 있을 것 같다.

---
## (6) [JS] 메소드와 함수

## [스포]
* 메소드와 함수의 차이는 `정의`의 차이다.
* 화살표 함수, 일반 함수 모두 객체 안에 정의 되면 `메소드`가 맞다.
* 화살표 함수는 고유한 this가 없어, this는 객체 외부 함수로 지정된다.


## [정의]
* function (함수)는 그 자체로도 기능을 한다.
  * 함수는 매소드를 포함한 더 포괄적인 개념이다.
  * **fucntion();** 으로 호출 할 수 있다.
* method (메소드)는 객체 안에 존재 하며,  객체안에서 작동 한다.
  * 메소드는 클래스 안에 있는 data를 조작할 수 있다.
  * **object.method();** 로 호출 할 수 있다.

```
function func() {
  return "Call me function!";
}

var obj = {
  method() {
    return "Call me Method!";
  }
}
```

### 의문의 시작
```
var RyuK = {
  age: 27,
  
  arrow: () => {
      console.log(this.age) // undefined
  },

  normal: function() {
      console.log(this.age) // 27
  }
}
```

이전 화살표 함수를 공부하면서 사용한 예제이다.</br>
**객체(object)의 this는 내부의 함수를 포함한 객체 자체에 바인딩 된다.** 라는 이유 때문에 화살표 함수에는 this가 바인딩 되지 않아, undefined가 출력되는 모습이다.</br>
</br>
하지만, 위의 화살표 함수는 `함수`라는 정의 보다는 `메소드`의 정의에 더 가깝다고 생각한다.</br>
그렇다면, 왜 `객체안에 존재하는 화살표함수는 메소드가 아니였을까?` `왜 바인딩 될 수 없었을 까?`

## # function과 Arrow function
Javascript의 객체는 `프로퍼티`를 할당 받게 되고, 그 곳에 함수를 할당 하고 객체가 `행동` 할 수 있는 능력을 부여한다. 

```
var RyuK = {
  age: 27
};

RyuK.talk = function() {
  console.log("삐빅삐비비빅", this.age);
};

RyuK.talk(); // ~~~27
```
* RyuK라는 **객체 프로퍼티에 `talk`** 라는 함수를 추가 했다.
* Javascript function은 자신만의 `this`를 사용할 수 있다.
* Jacascript Arrow function은 자신만의 고유한 `this`를 사용할 수 없다. 그렇게 this를 참조하면, 화살표 함수가 아닌 외부 함수에서 `this`를 가지고 온다. 즉, 위 예제에서는 객체 밖의 **this.age** 를 가지고 오는 것이다.
* `대부분의 메소드는 객체 프로퍼티의 값을 사용`한다. 그렇게 메소드의 this는 객체를 this 참조할 수 있다.

### 결론
- **객체(object)의 this는 내부의 함수를 포함한 객체 자체에 바인딩 된다.** 
- 화살표 함수도 내부의 함수 즉, **메소드**이다. 하지만, 화살표 함수는 자체 고유한 this를 갖지 않기 때문에 `this.~~ === undefined`로 출력되는 것이였다.
- 내가 계속 혼란이 오는 것은 ES6 부터 생겨난 class 형태 때문인 것 같다. class 내부 함수를 화살표 함수로 정의 하면, class의 변수를 this로 접근 할 수 있다. 이 문제는 차차 살펴 보자.

---

