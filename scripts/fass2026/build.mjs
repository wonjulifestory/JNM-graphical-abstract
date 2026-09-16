import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { Presentation, PresentationFile } from 'file:///C:/Users/user/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs';
import { createRequire } from 'node:module';
const runtimeRequire=createRequire('C:/Users/user/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/package.json');
const sharp=runtimeRequire('sharp');

const root='D:/vibe_coding/Graphic abstract';
const data=JSON.parse(await fs.readFile(path.join(root,'scripts/fass2026/fass2026.json'),'utf8'));
process.env.RUNTIME_NODE_MODULES='C:/Users/user/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules';
process.env.RUNTIME_NODE='C:/Users/user/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe';
const skill='C:/Users/user/.codex/plugins/cache/openai-primary-runtime/presentations/26.904.11930/skills/presentations';
const temp=path.join(root,'tmp/fass2026');
const out=path.join(root,'figures/fass2026');
const {applyPresentationChartFont,finalizePresentation}=await import(pathToFileURL(path.join(skill,'container_tools/artifact_tool_utils.mjs')));
const p=Presentation.create({slideSize:{width:1600,height:900}});
const s=p.slides.add(); s.background.fill='#FFFFFF';
const navy='#173C54', teal='#237F86', coral='#D17852', ink='#193D50', muted='#526975';
function box(name,x,y,w,h,fill){return s.shapes.add({name,geometry:'rect',position:{left:x,top:y,width:w,height:h},fill,line:{fill:'none',width:0}});}
function text(name,txt,x,y,w,h,size=26,color=ink,bold=false,align='left') {
 const a=s.shapes.add({name,geometry:'textbox',position:{left:x,top:y,width:w,height:h},fill:'none',line:{fill:'none',width:0}});
 a.text=txt;a.text.style={typeface:'Arial',fontSize:size,bold,color,alignment:align,autoFit:'none'};return a;
}
function line(name,x,y,w,h,color='#C7D4D9',width=1.5){return s.shapes.add({name,geometry:'line',position:{left:x,top:y,width:w,height:h},fill:'none',line:{fill:color,width,style:'solid'}});}
box('Title background',0,0,1600,181,navy);
text('Journal','JNM',54,21,100,35,30,'#FFFFFF',true);
text('Journal name','Journal of Neurogastroenterology and Motility',151,28,940,30,21,'#DCE9ED');
text('Draft identifier','EDITORIAL SAMPLE',1262,28,280,29,18,'#DCE9ED',false,'right');
text('Title',data.title,54,83,1490,68,49,'#FFFFFF',true);

text('Cohort size',String(data.cohort_n),56,201,153,78,68,teal,true);
text('Cohort descriptor','patients with IEM',221,211,410,42,30,navy,true);
text('Study design',`${data.study_design.replaceAll('-', '–')} [1]`,222,254,620,30,23,muted);
text('Assessment','High-resolution manometry\nwith impedance',1045,208,500,76,27,navy,true,'right');
line('Study separator',56,305,1488,0);

text('Physiology heading','COMBINED FINDINGS',56,329,730,37,24,teal,true);
const png=path.join(root,'figures/assets/01_esophagus_bolus_LES_illustration.png');
const jpg=path.join(root,'figures/assets/01_esophagus_bolus_LES_illustration.jpg');
await sharp(png).jpeg({quality:90}).toFile(jpg);
s.images.add({name:'Esophagus illustration',blob:new Uint8Array(await fs.readFile(jpg)),contentType:'image/jpeg',alt:'Conceptual illustration of retained bolus and reduced relaxation at the lower esophageal sphincter. Not a patient image.',fit:'contain',position:{left:406,top:377,width:255,height:359}});
text('Bolus transit label','Defective bolus transit',56,424,327,38,27,navy,true);
text('Bolus transit detail','Liquid and viscous swallows',56,465,342,32,21,muted);
line('Bolus callout',386,482,122,0,teal,2);
text('Combination sign','+',67,518,50,50,42,coral,true);
text('LES label','Poor LES relaxation',56,580,327,38,27,navy,true);
text('IRP label','Elevated integrated\nrelaxation pressure (IRP)',56,621,342,60,21,muted);
line('LES callout horizontal',365,611,75,0,coral,2);
s.shapes.add({name:'LES callout diagonal',geometry:'line',position:{left:440,top:557,width:81,height:54,verticalFlip:true},fill:'none',line:{fill:coral,width:2,style:'solid'}});
text('Schematic qualifier','Conceptual illustration',438,732,300,23,15,muted);
line('Content separator',793,335,0,375);

text('Result heading','ASSOCIATION WITH DYSPHAGIA',846,329,700,37,24,teal,true);
text('Chart subtitle','Patients with both findings [1]',846,375,620,39,28,navy,true);
text('P value',`P = ${data.p_value}`,1290,422,250,35,25,coral,true,'right');
const chart=s.charts.add('bar',{
 position:{left:850,top:450,width:694,height:235},
 categories:data.comparison.map(x=>x.group),
 series:[{name:'Abnormal bolus transit + elevated IRP (%)',values:data.comparison.map(x=>x.percent),fill:teal,points:[{idx:0,fill:coral},{idx:1,fill:teal}],dataLabelOverrides:data.comparison.map((x,i)=>({idx:i,text:`${x.percent}%`,position:'outEnd',showValue:false,textStyle:{fontSize:32,bold:true,typeface:'Arial',fill:i===0?coral:teal}}))}],
 barOptions:{direction:'column',grouping:'clustered',gapWidth:150,varyColors:true},hasLegend:false,
 xAxis:{visible:true,textStyle:{typeface:'Arial',fontSize:23,fill:navy},line:{fill:'#AFC0C6',width:1},majorGridlines:null},
 yAxis:{visible:true,min:0,max:40,majorUnit:20,numberFormatCode:'0"%"',textStyle:{typeface:'Arial',fontSize:17,fill:muted},line:{fill:'none',width:0},majorGridlines:{fill:'#E1E8EA',width:1}},
 dataLabels:{showValue:false,position:'outEnd',textStyle:{typeface:'Arial',fontSize:30,bold:true}},
 chartFill:'#FFFFFF',chartLine:{fill:'none',width:0},plotAreaFill:'#FFFFFF',plotAreaLine:{fill:'none',width:0}
});
applyPresentationChartFont(chart,{fontFamily:'Arial'});
text('Dysphagia denominator',`${data.comparison[0].numerator}/${data.comparison[0].denominator} patients`,922,686,254,30,22,muted,false,'center');
text('No dysphagia denominator',`${data.comparison[1].numerator}/${data.comparison[1].denominator} patients`,1240,686,275,30,22,muted,false,'center');
text('Available IRP sample',`IRP data available for ${data.irpdata_n} of ${data.cohort_n} patients`,846,728,696,28,19,muted);

box('Conclusion band',0,778,1600,80,'#E8F2F2');
text('Conclusion',`${data.conclusion} [1]`,56,787,1488,65,27,navy,true);
text('Citation','[1] Abdel-Jalil A, Koo TH, Fass R. J Neurogastroenterol Motil. 2026;32(2):217–227.',56,868,1105,24,16,muted);
text('DOI','doi:10.5056/jnm25058',1162,868,382,24,16,muted,false,'right');

s.speakerNotes.textFrame.setText(`Source: Abdel-Jalil A, Koo TH, Fass R. J Neurogastroenterol Motil. 2026;32(2):217–227. DOI 10.5056/jnm25058. Supplied source: JNM sample/jnm-32-2-217.pdf. Cohort and study design: p.217 and Methods. Main comparison: p.223, Table 4. Percentages are as reported (29 and 13), denominators 51 and 155, reported P=0.006. This is the prevalence of coexisting abnormal bolus transit and elevated IRP within each symptom group, not dysphagia prevalence within physiological subgroups. Original article CC BY-NC 4.0. The anatomical illustration was created with OpenAI image generation on 2026-09-17 and is conceptual; it is not measured patient anatomy. Text and chart are native editable PowerPoint elements. LES: lower esophageal sphincter. IEM: ineffective esophageal motility.`);
await (await PresentationFile.exportPptx(p)).save(path.join(temp,'candidate.pptx'));
const preview=await p.export({slide:s,format:'png',scale:1.5});
await fs.writeFile(path.join(temp,'preview.png'),new Uint8Array(await preview.arrayBuffer()));
await fs.writeFile(path.join(temp,'layout.json'),await (await s.export({format:'layout'})).text());
await fs.writeFile(path.join(temp,'presentation.json'),JSON.stringify(p.toProto()));
await sharp(path.join(temp,'preview.png')).jpeg({quality:90}).withMetadata({density:300}).toFile(path.join(out,'fass2026_JNM_graphical_abstract_v1.jpg'));
console.log('Draft and preview created');
try {
 const r=await finalizePresentation({workspaceDir:root,candidatePath:path.join(temp,'candidate.pptx'),finalPath:path.join(out,'fass2026_JNM_graphical_abstract_v1.pptx'),pythonExecutable:'C:/Users/user/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/python.exe',integrityValidatorPath:path.join(skill,'container_tools/inspect_presentation_package_integrity.py'),layoutValidatorPath:path.join(skill,'container_tools/inspect_presentation_layout_geometry.py'),layoutArgs:['--expected-slide-size-emu','15240000,8572500','--validate-heading-fit'],explicitTotalSlideCount:1,requiredNativeChartOwnerSlides:[1],materializeLiteralChartWorkbooks:true,fontPolicy:{basis:'design',families:['Arial']},verifyArtifactToolImport:true,receiptPath:path.join(temp,'validation.json')});
 console.log(JSON.stringify(r));
} catch(e) {console.error('FINALIZE_ERROR',e.stack);process.exitCode=2;}
