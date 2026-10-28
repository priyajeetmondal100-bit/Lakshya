/* PrepSphere shared question bank. Used by mock-test.html.
   PYQ data below is copied from PYQ.html; add more Mock / Book rows to grow the bank. */
(function(){
/* [subject, chapter, question, options, answerIndex, explanation]  (source: Mock) */
const MOCK=[
["Physics","Kinematics","A body is dropped from rest. Distance fallen in 2 s (g = 10 m/s²)?",["5 m","10 m","20 m","40 m"],2,"s = ½gt² = ½ × 10 × 4 = 20 m."],
["Physics","Laws of Motion","A 10 N force acts on a 2 kg mass. Its acceleration is:",["2 m/s²","5 m/s²","10 m/s²","20 m/s²"],1,"a = F/m = 10/2 = 5 m/s²."],
["Physics","Work, Energy & Power","Kinetic energy of a 2 kg body moving at 3 m/s:",["3 J","6 J","9 J","18 J"],2,"KE = ½mv² = ½ × 2 × 9 = 9 J."],
["Physics","Rotational Motion","Moment of inertia of a thin ring about its central axis:",["MR²/2","MR²","2MR²/5","MR²/12"],1,"All mass sits at distance R, so I = MR²."],
["Chemistry","Atomic Structure","Atomic number of carbon is:",["4","6","8","12"],1,"Carbon has 6 protons."],
["Chemistry","Ionic Equilibrium","pH of 0.01 M HCl (strong acid):",["1","2","7","12"],1,"[H⁺] = 10⁻² M, so pH = 2."],
["Chemistry","Chemical Bonding","Hybridisation of carbon in methane:",["sp","sp²","sp³","sp³d"],2,"Four sigma bonds give sp³."],
["Chemistry","Organic Chemistry","General formula of alkenes:",["CₙH₂ₙ₊₂","CₙH₂ₙ","CₙH₂ₙ₋₂","CₙHₙ"],1,"One double bond gives CₙH₂ₙ."],
["Mathematics","Algebra","Sum of roots of x² − 5x + 6 = 0:",["1","5","6","−5"],1,"Sum of roots = −b/a = 5."],
["Mathematics","Calculus","d/dx of x³ at x = 2:",["6","8","12","16"],2,"3x² = 3 × 4 = 12."],
["Mathematics","Probability","Two fair coins are tossed. P(at least one head):",["1/4","1/2","3/4","1"],2,"1 − P(no heads) = 1 − 1/4 = 3/4."],
["Mathematics","Trigonometry","sin²θ + cos²θ equals:",["0","1","2","θ"],1,"Fundamental Pythagorean identity."],
["Biology","Cell Biology","The powerhouse of the cell is the:",["Nucleus","Mitochondria","Ribosome","Golgi body"],1,"Mitochondria produce most of the cell's ATP."],
["Biology","Genetics","Chromosomes in a human somatic cell:",["23","44","46","48"],2,"Humans have 23 pairs = 46."],
["Biology","Human Physiology","Hormone that lowers blood glucose:",["Thyroxine","Insulin","Adrenaline","Oxytocin"],1,"Insulin promotes glucose uptake by cells."],
["Biology","Plant Physiology","Photosynthesis takes place in the:",["Chloroplast","Mitochondria","Vacuole","Nucleus"],0,"Chloroplasts contain chlorophyll."],
["History","Modern India","The Revolt of 1857 began at:",["Meerut","Delhi","Kanpur","Lucknow"],0,"It began at Meerut on 10 May 1857."],
["History","Modern India","The Battle of Plassey was fought in:",["1757","1764","1857","1526"],0,"Plassey, 1757, won by the East India Company."],
["Polity","Fundamental Rights","Fundamental Rights are in which Part of the Constitution?",["Part II","Part III","Part IV","Part V"],1,"Part III (Articles 12–35)."],
["Polity","Fundamental Rights","Article 21 protects:",["Equality","Life and personal liberty","Religion","Property"],1,"Right to life and personal liberty."],
["Geography","Indian Geography","The Tropic of Cancer passes through which state?",["Kerala","Maharashtra","Madhya Pradesh","Tamil Nadu"],2,"It crosses eight states including Madhya Pradesh and West Bengal."],
["Geography","Indian Geography","Longest river flowing within India:",["Ganga","Godavari","Yamuna","Indus"],0,"The Ganga is the longest river within India."],
["Economics","Banking","The repo rate is the rate at which the RBI:",["Lends to banks","Borrows from banks","Lends to the public","Lends to foreign banks"],0,"Repo = repurchase rate for short-term loans to banks."],
["Economics","Macroeconomics","GDP stands for:",["Gross Domestic Product","General Domestic Price","Gross Direct Product","Global Domestic Profit"],0,"Total value of final goods and services produced in a year."],
["Quant","Percentages","20% of 150 is:",["20","25","30","35"],2,"0.2 × 150 = 30."],
["Quant","Number Series","Next term: 2, 4, 8, 16, ?",["24","32","30","64"],1,"Each term doubles."],
["Quant","Speed & Distance","A train at 60 km/h runs for 2.5 h. Distance:",["120 km","150 km","180 km","100 km"],1,"60 × 2.5 = 150 km."]
];
/* [subject, chapter, book, question, options, answerIndex, explanation]  (source: Study Books) */
const BOOK=[
["Physics","Current Electricity","NCERT Textbook","The SI unit of electric resistance is:",["Ohm","Volt","Ampere","Watt"],0,"Resistance is measured in ohms."],
["Physics","Optics","Concept Builder","The speed of light in vacuum is about:",["3 x 10^8 m/s","3 x 10^6 m/s","3 x 10^5 m/s","3 x 10^10 m/s"],0,"c is roughly 3 x 10^8 m/s."],
["Chemistry","Periodic Table","NCERT Textbook","Which element has the highest electronegativity?",["Oxygen","Chlorine","Fluorine","Nitrogen"],2,"Fluorine is the most electronegative element."],
["Chemistry","Mole Concept","Formula Handbook","Particles in one mole of a substance:",["6.022 x 10^23","6.022 x 10^22","3.011 x 10^23","1.6 x 10^-19"],0,"This is Avogadro's number."],
["Mathematics","Coordinate Geometry","NCERT Textbook","Distance between (0,0) and (3,4):",["5","7","1","12"],0,"sqrt(9 + 16) = 5."],
["Mathematics","Sets","Concept Builder","A set with 3 elements has how many subsets?",["6","8","9","3"],1,"2^3 = 8."],
["Biology","Photosynthesis","NCERT Textbook","The pigment that captures light in plants is:",["Chlorophyll","Haemoglobin","Melanin","Insulin"],0,"Chlorophyll absorbs light energy."],
["Biology","Digestion","Topic-wise Workbook","The enzyme in saliva that digests starch:",["Pepsin","Amylase","Lipase","Trypsin"],1,"Salivary amylase starts starch digestion."],
["History","Ancient India","NCERT Textbook","Mohenjo-daro is in present-day:",["Pakistan","Nepal","Bangladesh","Sri Lanka"],0,"It lies in Sindh, Pakistan."],
["History","Medieval India","Exam Guide","Who built the Red Fort in Delhi?",["Akbar","Shah Jahan","Humayun","Aurangzeb"],1,"Shah Jahan, completed in 1648."],
["Polity","Parliament","Reference Books","Houses of India's Parliament (besides the President):",["Two","One","Three","Four"],0,"Lok Sabha and Rajya Sabha."],
["Geography","Climate","NCERT Textbook","Most of India's rain comes from the:",["South-west monsoon","North-east monsoon only","Western disturbances only","Sea breeze"],0,"June to September south-west monsoon."],
["Economics","Basics","NCERT Textbook","Inflation is a sustained rise in the:",["General price level","Population","Exports only","Bank deposits"],0,"It means money buys less over time."],
["Quant","Arithmetic","Speed Practice Book","72 km/h in metres per second:",["20","18","25","72"],0,"72 x 5/18 = 20."],
["Quant","Algebra","Concept Builder","If x + y = 10 and x - y = 2, then x is:",["6","4","8","5"],0,"Adding gives 2x = 12."],
["Reasoning","Series","Speed Practice Book","Next term: 3, 6, 11, 18, ?",["27","25","26","28"],0,"Differences 3, 5, 7, 9, so 18 + 9 = 27."],
["English","Vocabulary","Exam Guide","Antonym of 'ancient':",["Modern","Old","Archaic","Aged"],0,"Modern is the opposite of ancient."]
];
/* ---- PYQ bank, copied from PYQ.html ---- */
const PCM=["Physics","Chemistry","Mathematics"],SSC=["Quant","Reasoning","English","General Awareness"],TET=["Child Pedagogy","Mathematics","EVS","English"];
const SUBJ={"JEE Main":PCM,"JEE Advanced":PCM,"WBJEE":PCM,"NEET":["Physics","Chemistry","Biology"],"UPSC":["History","Geography","Polity","Economics","Environment","Current Affairs"],"NDA":["Mathematics","General Ability","English"],"JENPAS-UG":PCM,"CAT":["Quant","Verbal Ability","DILR"],"SSC CGL":SSC,"SSC CHSL":SSC,"CTET":TET,"TET":TET,"GATE":["Engineering Mathematics","Core Engineering","General Aptitude"],"Other":["General Studies","Aptitude"]};
const MK={"JEE Main":[4,1],"JEE Advanced":[3,1],"WBJEE":[1,.25],"NEET":[4,1],"UPSC":[2,.67],"NDA":[2.5,.83],"JENPAS-UG":[1,.25],"CAT":[3,1],"SSC CGL":[2,.5],"SSC CHSL":[2,.5],"CTET":[1,0],"TET":[1,0],"GATE":[1,.33],"Other":[1,.25]};
const SB=(c,t,q,o,a,d,s)=>[c,t,q,o,a,d,s];
const BANK={
Physics:{tip:"Draw the diagram and write units before substituting.",mis:"Mixing up mass and weight, or skipping unit conversion.",qs:[SB("Laws of Motion","Newton's second law","A body of mass 2 kg is acted on by a net force of 10 N. Its acceleration is:",["2 m/s^2","5 m/s^2","10 m/s^2","20 m/s^2"],1,0,"Given: m = 2 kg, F = 10 N|Formula: a = F/m|Calculation: 10/2 = 5|Answer: 5 m/s^2"),SB("Laws of Motion","Impulse","The SI unit of impulse is:",["N","N s","J","W"],1,0,"Impulse = force x time|Units: N x s, same as kg m/s|Answer: N s")]},
Chemistry:{tip:"Count sigma bonds and lone pairs first.",mis:"Using pH = log[H+] without the negative sign.",qs:[SB("Chemical Bonding","Hybridisation","The hybridisation of carbon in methane is:",["sp","sp2","sp3","sp3d"],2,0,"Concept: steric number = sigma bonds + lone pairs|Methane: 4 + 0 = 4|Answer: sp3"),SB("Equilibrium","pH of strong acids","The pH of 0.01 M HCl is:",["1","2","7","12"],1,1,"Given: HCl is a strong acid, so [H+] = 0.01 = 10^-2|Formula: pH = -log[H+]|Answer: 2")]},
Mathematics:{tip:"Check the answer by differentiating or substituting back.",mis:"Forgetting the constant C, or using the wrong sign of b.",qs:[SB("Calculus","Integration","The integral of 2x dx is:",["x^2 + C","2x^2 + C","x + C","2 + C"],0,0,"Formula: integral of x^n = x^(n+1)/(n+1)|Calculation: 2 x x^2/2 = x^2|Answer: x^2 + C"),SB("Algebra","Quadratic equations","The sum of the roots of x^2 - 5x + 6 = 0 is:",["-5","5","6","-6"],1,0,"Formula: sum of roots = -b/a|Calculation: -(-5)/1 = 5|Check: roots are 2 and 3|Answer: 5")]},
Biology:{tip:"Link each structure to its one key function.",mis:"Confusing the F1 and F2 ratios.",qs:[SB("Cell Biology","Cell organelles","The powerhouse of the cell is the:",["Ribosome","Golgi body","Mitochondrion","Lysosome"],2,0,"Concept: mitochondria make ATP by respiration|Other options: ribosomes make proteins, Golgi packages, lysosomes digest|Answer: Mitochondrion"),SB("Genetics","Dihybrid cross","The phenotypic ratio in a Mendelian dihybrid F2 cross is:",["3:1","1:2:1","9:3:3:1","1:1"],2,1,"Concept: independent assortment|Two genes give 4 phenotypes|Answer: 9:3:3:1")]},
History:{tip:"Anchor each event to a century, then a ruler.",mis:"Mixing up the Non-Cooperation (1920) and Quit India (1942) movements.",qs:[SB("Ancient India","Mauryan Empire","Who founded the Maurya Empire?",["Ashoka","Bindusara","Chandragupta Maurya","Samudragupta"],2,0,"Concept: Mauryan dynasty, about 321 BCE|Ashoka was the third ruler, Samudragupta was a Gupta|Answer: Chandragupta Maurya"),SB("Modern History","Quit India Movement","The Quit India Movement was launched in:",["1930","1940","1942","1946"],2,0,"Concept: launched at the Bombay session, August 1942|Answer: 1942")]},
Geography:{tip:"Use a map sketch to place rivers and lines.",mis:"Mixing up west-flowing and east-flowing rivers.",qs:[SB("Indian Geography","Rivers","The longest river of peninsular India is the:",["Godavari","Krishna","Narmada","Kaveri"],0,1,"Concept: Godavari is about 1,465 km long|Answer: Godavari"),SB("Physical Geography","Latitudes","The Tropic of Cancer passes through how many Indian states?",["6","7","8","9"],2,1,"Concept: it crosses Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura and Mizoram|Answer: 8")]},
Polity:{tip:"Memorise key Articles with their one-line purpose.",mis:"Confusing Article 32 with Article 226.",qs:[SB("Constitution","Fundamental Rights","Article 21 of the Constitution deals with:",["Equality before law","Freedom of speech","Protection of life and personal liberty","Right to property"],2,0,"Concept: Article 21 is in Part III|Article 14 is equality, Article 19 is freedoms|Answer: life and personal liberty"),SB("Constitution","Writs","Who can issue writs for Fundamental Rights under Article 32?",["President","Parliament","Supreme Court","Attorney General"],2,1,"Concept: Article 32 is the right to constitutional remedies|Answer: Supreme Court")]},
Economics:{tip:"Separate monetary policy (RBI) from fiscal policy (Government).",mis:"Treating borrowings as receipts when computing fiscal deficit.",qs:[SB("Monetary Policy","RBI","Which body regulates monetary policy in India?",["SEBI","Reserve Bank of India","NITI Aayog","Finance Commission"],1,0,"Concept: the RBI Monetary Policy Committee sets the repo rate|Answer: Reserve Bank of India"),SB("Fiscal Policy","Fiscal deficit","Fiscal deficit equals total expenditure minus:",["Revenue receipts only","Total receipts excluding borrowings","Tax revenue","Capital receipts"],1,2,"Formula: fiscal deficit = total expenditure - (revenue receipts + non-debt capital receipts)|Answer: total receipts excluding borrowings")]},
Quant:{tip:"Turn percentages into fractions for faster mental maths.",mis:"Applying a percentage on the wrong base.",qs:[SB("Arithmetic","Percentage","15% of 240 is:",["24","32","36","40"],2,0,"Formula: 15/100 x 240|Calculation: 0.15 x 240 = 36|Answer: 36"),SB("Arithmetic","Averages","The average of 10, 20 and 30 is:",["15","20","25","60"],1,0,"Formula: sum / count|Calculation: 60/3 = 20|Answer: 20")]},
Reasoning:{tip:"Write differences between terms before guessing a rule.",mis:"Assuming the pattern after only two terms.",qs:[SB("Series","Number series","Find the next number: 2, 6, 12, 20, ?",["28","30","32","36"],1,1,"Differences: 4, 6, 8|Next difference: 10|Calculation: 20 + 10 = 30|Answer: 30"),SB("Direction Sense","Directions","A is east of B and B is east of C. C is to the ___ of A.",["East","West","North","South"],1,0,"Order west to east: C, B, A|Answer: West")]},
English:{tip:"Read the full sentence before choosing.",mis:"Ignoring the subject's number in verb questions.",qs:[SB("Vocabulary","Synonyms","Choose the synonym of 'abundant':",["Scarce","Plentiful","Rare","Tiny"],1,0,"Meaning: existing in large quantities|Answer: Plentiful"),SB("Grammar","Subject-verb agreement","Choose the correct word: She ___ to school every day.",["go","going","goes","gone"],2,0,"Rule: a singular subject takes 'goes' in the simple present|Answer: goes")]},
"General Awareness":{tip:"Revise static GK in small daily sets.",mis:"Mixing a state's capital with its largest city.",qs:[SB("Static GK","State capitals","The capital of Rajasthan is:",["Jodhpur","Udaipur","Jaipur","Ajmer"],2,0,"Fact: Jaipur is the capital|Answer: Jaipur"),SB("Static GK","National symbols","The national animal of India is the:",["Lion","Tiger","Elephant","Leopard"],1,0,"Fact: the Bengal tiger is the national animal|Answer: Tiger")]},
Environment:{tip:"Link each convention to its theme and year.",mis:"Mixing up Ramsar (wetlands) and CITES (trade in species).",qs:[SB("Climate Change","Greenhouse gases","Which gas contributes most to the enhanced greenhouse effect?",["Oxygen","Nitrogen","Carbon dioxide","Argon"],2,0,"Concept: burning fossil fuels adds CO2|Answer: Carbon dioxide"),SB("Biodiversity","Conventions","The Ramsar Convention is related to:",["Wetlands","Whales","Deserts","Glaciers"],0,1,"Concept: it protects wetlands of international importance|Answer: Wetlands")]}};
const bank=s=>BANK[s]||(/Math/.test(s)?BANK.Mathematics:/Quant/.test(s)?BANK.Quant:/Reason|DILR/.test(s)?BANK.Reasoning:/English|Verbal/.test(s)?BANK.English:BANK["General Awareness"]);
const YEARS=[2026,2025,2024,2023,2022];
const AL={Quant:["Aptitude","General Aptitude"],Aptitude:["Quant"],"General Aptitude":["Quant"],"Engineering Mathematics":["Mathematics"]};
const same=(q,s)=>q===s||(AL[q]||[]).includes(s);
const h=s=>{let x=7;for(const c of s)x=(x*31+c.charCodeAt(0))>>>0;return x};
const rnd=a=>()=>((a=(a*1664525+1013904223)>>>0)/4294967296);
const shuf=(l,r)=>l.map(x=>[r(),x]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]);
/* pick n questions, rotating through PYQ / Book / Mock so every test mixes sources */
function pick(list,n,r){const g={};list.forEach(q=>(g[q.src]=g[q.src]||[]).push(q));
 const ks=Object.keys(g).map(k=>shuf(g[k],r)),out=[];
 while(out.length<n&&ks.some(k=>k.length))ks.forEach(k=>{if(k.length&&out.length<n)out.push(k.shift())});
 return out}
function extra(ex,s){let P={};try{P=JSON.parse(localStorage.getItem("ps_pyq_papers")||"{}")}catch(e){}
 return (P[ex]||[]).flatMap(p=>(p.qs||[]).filter(x=>x.subject===s).map((x,i)=>({id:"PX|"+p.id+"|"+i,s,ch:x.chapter||"General",q:x.question,o:x.options,a:x.answer,
  sol:Array.isArray(x.solution)?x.solution.join(". "):(x.solution||""),src:"PYQ",d:Math.min(2,x.difficulty|0),ref:ex+" PYQ "+p.yr})))}
/* Practice-set templates: numbers change per question, so tests can be long. Source label: Mock */
const num=(c,r,u)=>{const st=c>20?Math.ceil(c/10):1,o=shuf([-3,-2,-1,1,2,3,4].map(d=>c+d*st).filter(v=>v>0),r).slice(0,3).concat(c),m=shuf(o,r);return[m.map(v=>v+u),m.indexOf(c)]};
const rr=(r,a,b)=>a+(r()*(b-a+1)|0);
const GEN=[
["Physics","Kinematics",r=>{const a=rr(r,2,9),t=rr(r,2,10);return["A car starts from rest with acceleration "+a+" m/s^2. Its speed after "+t+" s is (m/s):",a*t,"v = u + at = "+a+" x "+t+" = "+a*t+"."]}],
["Physics","Laws of Motion",r=>{const m=rr(r,2,11),a=rr(r,2,9);return["A "+m+" kg body accelerates at "+a+" m/s^2. The net force is (N):",m*a,"F = ma = "+m+" x "+a+" = "+m*a+"."]}],
["Physics","Work, Energy & Power",r=>{const m=2*rr(r,1,5),v=rr(r,2,9);return["Kinetic energy (J) of a "+m+" kg body moving at "+v+" m/s:",m*v*v/2,"KE = 0.5 x "+m+" x "+v*v+" = "+m*v*v/2+"."]}],
["Physics","Current Electricity",r=>{const i=rr(r,2,9),R=rr(r,2,11);return["A current of "+i+" A flows through a "+R+" ohm resistor. The potential difference (V) is:",i*R,"V = IR = "+i+" x "+R+" = "+i*R+"."]}],
["Chemistry","Mole Concept",r=>{const n=rr(r,2,12);return["Moles in "+18*n+" g of water (M = 18 g/mol):",n,"moles = "+18*n+" / 18 = "+n+"."]}],
["Chemistry","Ionic Equilibrium",r=>{const n=rr(r,1,6);return["pH of a 10^-"+n+" M strong monobasic acid:",n,"pH = -log[H+] = "+n+"."]}],
["Mathematics","Algebra",r=>{const a=rr(r,1,9),b=rr(r,1,9);return["Sum of the roots of x^2 - "+(a+b)+"x + "+a*b+" = 0 is:",a+b,"Sum of roots = -b/a = "+(a+b)+"."]}],
["Mathematics","Calculus",r=>{const n=rr(r,2,4),k=rr(r,2,4),v=n*Math.pow(k,n-1);return["Value of d/dx (x^"+n+") at x = "+k+":",v,"n x^(n-1) = "+n+" x "+k+"^"+(n-1)+" = "+v+"."]}],
["Quant","Percentages",r=>{const p=5*rr(r,1,9),N=20*rr(r,1,10);return[p+"% of "+N+" is:",p*N/100,"("+p+"/100) x "+N+" = "+p*N/100+"."]}],
["Quant","Speed & Distance",r=>{const s=10*rr(r,2,7),t=rr(r,2,6);return["A vehicle at "+s+" km/h travels for "+t+" h. Distance (km):",s*t,"Distance = speed x time = "+s*t+"."]}]
];
function pool(ex,s){const out=[],seen=new Set(),add=q=>{if(!seen.has(q.q)){seen.add(q.q);out.push(q)}};
 bank(s).qs.forEach((x,i)=>add({id:"PQ|"+s+"|"+i,s,ch:x[0],q:x[2],o:x[3],a:x[4],sol:x[6].split("|").join(". "),src:"PYQ",d:x[5]<1?0:x[5]<2?1:2,ref:"PYQ "+YEARS[i%5]}));
 extra(ex,s).forEach(add);
 BOOK.filter(b=>same(b[0],s)).forEach((b,i)=>add({id:"BK|"+b[0]+"|"+i,s,ch:b[1],q:b[3],o:b[4],a:b[5],sol:b[6],src:"Book",d:h(b[3])%3,ref:b[0]+" \u2014 "+b[2]}));
 MOCK.filter(b=>same(b[0],s)).forEach((b,i)=>add({id:"MK|"+b[0]+"|"+i,s,ch:b[1],q:b[2],o:b[3],a:b[4],sol:b[5],src:"Mock",d:h(b[2])%3,ref:"Mock bank"}));
 GEN.filter(g=>same(g[0],s)).forEach(g=>{for(let i=0;i<14;i++){const r=rnd(h(g[1]+i+s)),x=g[2](r),o=num(x[1],r,"");add({id:"GN|"+g[1]+"|"+i,s,ch:g[1],q:x[0],o:o[0],a:o[1],sol:x[2],src:"Mock",d:i%3,ref:"Practice set"})}});
 return out}
window.PS={SUBJ,MK,pool,pick,rnd,h,shuf};
})();
