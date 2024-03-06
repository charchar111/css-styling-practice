# CSS styling practice

## Link
https://charchar111.github.io/css-styling-practice/

## 컨셉

이 프로젝트는 scss와 반응형 디자인에 기반한 실제 사이트 디자인을 연구했습니다. 
주 소재는 아래 명시된 6개의 사이트를 클론 코딩하였고 일반적인 상업적 사이트 디자인을 기준으로 채택했습니다.

## 기능

- 사이트 구조는 소스의 전체적인 레이아웃 구조를 참고하되, grid와 flex같은 현대적인 레이아웃을 도입하였습니다.
- 반응형 디자인을 위한 rem, em 단위와 media-query를 사용했습니다.


## 기술 스택
### SCSS
CSS는 문법이 어렵지 않지만 함수나 조건문 등을 충분히 지원하지 않아서 재사용 가능한 스타일 시트를 작성하는 데 한계가 있습니다. 때문에, BEM 등의 방법론을 도입해보았으나, 프로젝트의 규모가 커질수록 가독성을 크게 해칩니다.
SCSS는 그런 문제를 해결하는 데 유용합니다. 

- nesting에 따른 전역 오염 방지
- mixin과 상속기능에 기반한 재사용가능한 스타일 시트 작성

#### 다른 라이브러리와의 고민
SCSS와 경쟁하면서도 작동방식이 크게 다른 라이브러리로는 tailwind, styled-component가 있습니다. 각 라이브러리는 장단점이 명확하고 현재는 tailwind가 nextJS와 함께 주류의 반열에 오르고 있습니다.
tailwind는 SCSS의 단점을 보완할 수 있습니다. css 파일을 생성한다는 점에서 styled-component보다 초기 속도가 빠르고, scss에 비해 직관적으로 스타일링을 요소에 도입할 수 있습니다.
하지만, 큰 프로젝트에서는 js 코드와 스타일링을 분할할 수 있는 SCSS의 장점 역시 매력적입니다. 특히, 반응형 디자인 스타일링을 적용하는 데 있어서 SCSS는 더 가독성이 좋습니다.

그래서 저의 고민은 SCSS를 생산성 있게 사용하는 방식이었습니다.


## 이슈-해결방안

## 배운 점

- 상업용 사이트에서 많이 쓰이는 레이아웃 디자인부터 grid를 활용한 보다 현대적인 UI까지 구현해보며 익숙해질 수 있었습니다.
- 반응형 디자인을 위한 ui를 고안해서 viewport의 크기에 따라 보여주거나 grid와 flex로 레이아웃을 조정하는 메커니즘을 배웠습니다.
- SCSS를 사용해서 일반 css보다 재사용성이 높은 디자인을 하며 생산성을 늘리는 방법을 알았습니다.

## 기타
### 클론 사이트 출처
1. movie - https://besthorrorscenes.com
2. shopping mall(shop) - https://paint-box.com
3. gallery1(grid) - http://10x19.co
4. gallery2(photo) - http://www.z-o-o.fr/en
5. news - https://schwartzmedia.com.au
6. cookie shop(cafe) - https://beige.de/?c=mode&c=menschen
