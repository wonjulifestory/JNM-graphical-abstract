# JNM graphical abstract 제작 워크플로우

작성일: 2026-09-17. 아래는 도입 제안이며 JNM 공식 규정이 아니다.

## 권장 프로그램

- ChatGPT/Codex: 원고에서 핵심 내용과 출처 추출, 영문 문구·배치안 작성, 반복 제작을 위한 코드 작성.
- PowerPoint 데스크톱: JNM 템플릿, 텍스트·수치·도형·화살표를 편집 가능한 형태로 조립. 논문별 PPTX를 편집 정본으로 관리.
- Excel: 원문 근거표, 차트 데이터, 제작 상태와 승인 기록.
- Inkscape: 필요할 때 식도·위·장 등의 공통 SVG 자산을 만들거나 수정. SVG 자산을 PowerPoint에 삽입한 뒤 변환 결과를 확인.
- Bioicons: 선택적 과학 아이콘 공급원. 아이콘별 출처와 라이선스를 기록하고 JNM 공통 색상·선 굵기로 조정.
- BioRender: 복잡한 기전 도식이 많을 때 선택. 학술지 편집부의 반복 제작 및 재사용 범위를 충족하는 구독·출판 조건을 확인한 뒤 채택. 외부 편집 가능 범위는 시험 파일로 검증.

## 최초 1회 준비

1. 배포 위치와 출판사 요구 형식·픽셀 크기·인쇄 크기를 확인한다. 시안은 가로 16:9로 시작하되 JNM 공식 규격으로 간주하지 않는다.
2. 색상, 글꼴, 최소 글자 크기, 선 굵기, 여백, 제목·결론·서지 위치를 정한다.
3. 임상연구형, 기전연구형, 근거종합형 템플릿을 만든다. Fass2026은 임상연구형 시험 대상으로 삼는다.
4. 내용 근거표와 검수표, 아이콘 출처 목록을 만든다.

## 논문별 반복 과정

| 단계 | 프로그램 | 작업 및 산출물 | 담당 확인 |
|---|---|---|---|
| 1. 원고 고정 | PDF 뷰어/Word | 승인 원고 및 보충자료, 논문 ID, 판본, DOI 기록 | 편집부가 제작 기준 원고 확정 |
| 2. 내용 추출 | ChatGPT/Codex + Excel | 연구설계, 대상, 핵심 결과, 제한점, 각 문구·수치의 원문 위치 | 담당 편집자가 원문 대조 |
| 3. 구성안 | ChatGPT/Codex + PowerPoint | 짧은 제목, 주요 결과 1–3개, 결론 1문장, 중앙 도식의 배치 | 메시지와 포함할 수치 확정 |
| 4. 제작 | PowerPoint + 필요 시 Inkscape | 공통 템플릿에 개별 요소로 조립; 차트는 검증된 숫자로 생성 | 해부·연결 관계 및 디자인 확인 |
| 5. 교정 | PowerPoint 댓글 + Excel | 원문 대조, 저자 수정, 담당자·일자·버전 기록 | 교신저자 확인 후 편집부 최종 승인 |
| 6. 출력 | PowerPoint/필요 시 변환 도구 | 출판사가 지정한 최종 이미지 또는 벡터 파일, 대체 텍스트 | 출력 파일 자체를 열어 글자·잘림·픽셀 규격 확인 |

원고 교정으로 숫자나 결론이 바뀌면 2단계 근거표부터 갱신한다. 이미지에서만 숫자를 고치지 않는다. 최종 PPTX는 한 곳에서 관리하고 수동 교정된 파일을 자동 생성으로 덮어쓰지 않는다.

## Fass2026 시험 적용

파일/작업 식별자는 fass2026, 표준 서지 표기는 Abdel-Jalil A, Koo TH, Fass R. J Neurogastroenterol Motil. 2026;32(2):217–227. DOI: 10.5056/jnm25058.

228명의 IEM 환자를 분석한 단일기관 후향 연구이며, 2010–2013년 검사 자료를 사용했다.[1]

구성 제안:
- 상단: Dysphagia in ineffective esophageal motility (편집용 단축 제목).
- 왼쪽: 연구설계, 228명, HRM + impedance.
- 중앙: 식도 도식에 식괴 통과 장애와 LES 이완 저하를 함께 표시. 인과적 기전을 입증한 것으로 묘사하지 않는다.
- 오른쪽: Table 4의 DBT + elevated IRP 동반 비율 비교를 검토한다. 연하곤란군 15/51, 비연하곤란군 20/155, 보고된 P=0.006.[1]
- 하단: In IEM, dysphagia was associated with combined bolus transit impairment and reduced LES relaxation. (제안 문구; 최종 편집 검수 필요).[1]

숫자 사용 시 주의할 실제 확인 사항:
1. 핵심 비교 분모는 전체 228명이 아닌 IRP 자료가 있는 206명이다. 막대그래프를 만들 경우 '각 증상군에서 두 이상 소견을 함께 가진 환자의 비율'로 표시한다. '두 이상 소견 환자 중 연하곤란 비율'로 바꾸지 않는다.[1]
2. Patient Selection 절은 Sandhill 기준 >22 mmHg를 제시하지만 Manometric Definitions 절은 IRP ≥15 mmHg를 제시한다. 제작자가 임의로 하나를 선택하지 않고 저자 확인 항목으로 남긴다.[1]
3. Table 4의 'Abnormal BT + Normal IRP' 행과 분모의 정의는 최종 수치 도식 제작 전에 저자 확인을 권한다. 해당 표를 제작 단계에서 임의로 재해석하거나 원자료 없이 새로운 효과크기를 계산하지 않는다.[1]

위 내용은 원문 대조를 마친 구성안이며, 저자 승인된 graphical abstract나 완성 시안은 아니다.

## 이후 자동화

시험본의 내용·디자인을 확정한 뒤, 검증된 내용표 → 구조화 데이터 → PPTX 템플릿 배치 → 렌더링 및 검수의 순서로 자동화한다. 첫 단계부터 유료 API나 서버를 구축할 필요는 없다. 반복 제작용 코드는 실제 사용한 생성 라이브러리와 버전을 함께 보관한다.

## 출처

[1] Abdel-Jalil A, Koo TH, Fass R. Dysphagia is Associated With the Combination of Defective Bolus Transit and Poorly Relaxing Lower Esophageal Sphincter in Patients With Ineffective Esophageal Motility. J Neurogastroenterol Motil. 2026;32(2):217–227. https://doi.org/10.5056/jnm25058 . 전문 HTML: https://pmc.ncbi.nlm.nih.gov/articles/PMC13071423/ . 전문 HTML과 서지·초록 전문 PDF를 reference 폴더에 보관했다. 출판사 원문 PDF 다운로드는 정상 완료되지 않았다.

프로그램 공식 문서:
- OpenAI: https://learn.chatgpt.com/docs/artifacts-viewer
- Microsoft SVG 편집: https://support.microsoft.com/en-us/office/graphics-visuals/edit-svg-images-in-microsoft-365
- Inkscape: https://inkscape.org/about/
- Bioicons: https://bioicons.com/
- BioRender 학술 라이선스: https://www.biorender.com/academic-license
