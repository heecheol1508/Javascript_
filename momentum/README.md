# [ Javascipts ]



## 1. background.js

**background image 가져오기**

- 미리 image 이름을 1부터 자연수로 지정
- Math.floor(Math.random() * IMAGE_NUMBER)



**background image 넣기**

- Image 객체 생성
- 속성 추가 (src, class)
- body.appendChild(image)



**[css] .bgImage**

- position: absolute; 
- z-index: -1;
- animation 등





## 2. clock.js

**getTime**

- Date 객체
- setInterval(getTime, 1000)





## 3. greeting.js

**localStorage, classList, preventDefault**





## 4. todo.js

**createElement("li"), appendChild**





## 5. weather.js

**getweather**

- fetch
  - https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric
  - then, json



**askForCoords**

- navigator.geolocation.getCurrentPosition







## [ TO DO MORE ]

- 크롬 확장프로그램으로 사용하는 방법
- TODO 목록에 시간 추가