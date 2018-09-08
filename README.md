# ChromeExtension
웹캠으로 모션을 인지해 tab안에서의 몇몇 조작이 가능하도록 하는 프로그램

## Requirement


### parcel
ES2017를 이용하기 위해서 transpiler인 parcel를 사용하지만 추후에 babeljs로 바뀔 수 도 있음
npm install -g parcel-bundler
### posenet
npm install @tensorflow-models/posenet


## chrome extension unpacked로 올릴때는 dist폴더 사용

content.js를 수정하고 싶을때는

parcel content.js를 입력하면
/dist의 content.js가 새로 생김새로 생성

## 파일구성

background.js -> parcel로 transpile 하기전 background.js
camera.js -> tfjs-models에서 우리가 사용하는 posenet모델의 일부로 실제 크롬ex에 소스파일로 활용되지는 않음
content.js -> parcel로 transpile 하기전 content.js
index.html -> transpile할때 test용
package-lock.json 
package.json ->npm 패키지를 위한거
README.md -> 설명 파일

### dist 폴더내
manifest.json ->
thumbs-up.png ->임의로 사용중인 테스트용 버튼
background.js -> parcel로 transpile된 background.js
content.js -> parcel로 transpile된 content.js
