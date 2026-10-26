# Fass2026 — JNM graphical abstract

제작일: 2026-09-17. JNM용 첫 시안이며 저자·편집부 승인 전입니다.

- `source/`: 제작 기준 논문 PDF. `source/reference/`에는 참고 PDF와 원문 HTML을 보관합니다.
- `output/`: 편집용 PPTX와 최종 미리보기 JPEG.
- `assets/`: 식도 삽화 PNG 원본과 JPEG.
- `scripts/`: 제작 코드, 구조화 데이터, 검증 결과, 제작 메모.
- `scripts/archive/`: 초기 제작 코드와 중간 차트 패키지. 당시 상태를 보존한 기록입니다.

JNM 공통 제작 절차: [워크플로우](../../../JNM_graphical_abstract_workflow.md).

## 다시 제작할 때

아래 명령은 이 README가 있는 폴더에서 실행합니다. 산출물 재생성 전에 저자가 수정한 파일이 있는지 확인하고 보존합니다.

```powershell
python scripts/make_ga.py --pdf source/jnm-32-2-217.pdf --id fass2026 --out scripts/fass2026.json
node scripts/build.mjs
```

활성 제작 코드는 현재 파일 위치에서 입력·출력 경로를 계산합니다. Node 및 Python 패키지, Codex artifact-tool과 프레젠테이션 검수 도구는 기존 로컬 환경에 의존합니다. build.mjs의 미리보기와 최종 JPEG는 제작 경로가 다르므로, 최종 PPTX를 LibreOffice에서 렌더링하고 육안 검수하는 과정은 [제작 기록](scripts/production_notes.md)을 따릅니다.

이번 정리는 파일 이동과 경로 수정만 수행했으며 시안을 재생성하지 않았습니다.