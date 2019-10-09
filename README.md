# ChromeExtension
웹캠으로 모션을 인지해 tab안에서의 몇몇 조작이 가능하도록 하는 프로그램

## 사용법

### 1. 다운로드 or Clone

git clone https://github.com/PoseKey/PoseKey.git

### 2. npm module 설치

npm install

### 3. 크롬에 등록
왼쪽 설정버튼>도구 더보기>확장프로그램>압축해제된 확장 프로그램을 로드합니다. > dist폴더 등록

## 파일 수정

### content.js/background.js

content.js/background.js는 es2017로 제작되어 별도의 transpile 작업이 필요함

parcel content.js background.js
혹은 수정한 파일만
parcel content.js
라고 입력하면 dist 폴더에 변환된 파일이 생성됨

실시간으로 변환해주기때문에 여러개의 콘솔창을 키고 작업하다가 
Ctrl+c
를 입력하면 실시간 변환을 멈출 수 있음
