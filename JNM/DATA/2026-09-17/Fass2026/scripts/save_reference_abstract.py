from pathlib import Path
from html import escape
from bs4 import BeautifulSoup
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib import colors

root = Path(__file__).resolve().parents[1]
soup = BeautifulSoup((root / 'source/reference/fass2026_source.html').read_text(encoding='utf-8'), 'html.parser')
out = root / 'source/reference/01_Abdel-Jalil_Koo_Fass_2026_abstract.pdf'
styles = getSampleStyleSheet()
styles['Title'].fontSize = 14
styles['Title'].leading = 18
styles['BodyText'].fontSize = 10
styles['BodyText'].leading = 14
story = [Paragraph('REFERENCE 01 | SOURCE ABSTRACT', styles['Heading2'])]
title = soup.find('h1').get_text(' ', strip=True)
story.append(Paragraph(escape(title), styles['Title']))
for text in [
    "Abdel-Jalil A, Koo TH, Fass R. J Neurogastroenterol Motil. 2026;32(2):217-227.",
    'DOI: 10.5056/jnm25058 | PMID: 41952404 | PMCID: PMC13071423',
    'Source: https://pmc.ncbi.nlm.nih.gov/articles/PMC13071423/',
    'Retrieved: 2026-09-17. Reflowed bibliographic record and complete abstract; not the publisher PDF.',
    'Original article: Copyright 2026 The Korean Society of Neurogastroenterology and Motility. CC BY-NC 4.0.',
]:
    story.append(Paragraph(escape(text), styles['BodyText']))
story.append(Spacer(1, 12))
for sid in ['sec1', 'sec2', 'sec3', 'sec4']:
    section = soup.find(id=sid)
    heading = section.find(['h2', 'h3', 'h4'])
    story.append(Paragraph(escape(heading.get_text(' ', strip=True)), styles['Heading3']))
    for p in section.find_all('p', recursive=False):
        story.append(Paragraph(escape(p.get_text(' ', strip=True)), styles['BodyText']))
story.append(Spacer(1, 10))
story.append(Paragraph(escape(soup.find(id='kwd-group1').get_text(' ', strip=True)), styles['BodyText']))
SimpleDocTemplate(str(out), leftMargin=45, rightMargin=45, topMargin=36, bottomMargin=36).build(story)
bad = root / 'source/reference/01_Abdel-Jalil_Koo_Fass_2026_IEM_Dysphagia.pdf'
if bad.exists() and not bad.read_bytes().startswith(b'%PDF'):
    bad.unlink()
print(out)
