import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/border-slate-100/g, 'border-slate-200');

fs.writeFileSync('src/App.tsx', content);
