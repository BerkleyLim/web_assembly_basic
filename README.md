# web_assembly_basic
데스크탑 기반 프로젝트를 웹 어셈블리를 이식하는 프로젝트 (테이블 연동 작업 진행)

## 프로젝트 구조

```
📁 web_assembly_basic
├── 📁 react-app/                  # React 웹 애플리케이션
│   ├── 📁 src/
│   │   ├── components/
│   │   │   ├── Table.js          # 테이블 렌더링 컴포넌트
│   │   │   └── TableRow.js       # 개별 행 렌더링 컴포넌트
│   │   ├── mockDB.js             # 메모리 기반 Mock DB
│   │   ├── wasm/                 # WebAssembly 관련 파일
│   │   │   ├── TableApp.wasm     # WebAssembly 바이너리
│   │   │   └── runtime.js        # WebAssembly 런타임
│   │   └── app.js                # WebAssembly와 상호작용
│   ├── public/
│   │   └── index.html            # React 메인 HTML 파일
│   ├── package.json              # React 프로젝트 설정 파일
│   └── README.md                 # React 애플리케이션 설명
├── 📁 javafx-app/                 # JavaFX 데스크탑 애플리케이션
│   ├── 📁 src/
│   │   ├── TableApp.java         # JavaFX 메인 애플리케이션
│   │   ├── Person.java           # 데이터 모델 클래스
│   │   ├── MockData.java         # Mock 데이터 생성 클래스
│   │   └── util/
│   │       └── DataExporter.java # 데이터 내보내기 클래스 (JSON/CSV)
│   └── pom.xml                   # JavaFX Maven 설정 파일
└── README.md                      # 전체 프로젝트 설명

```


