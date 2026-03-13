import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/bg-slate-900 hover:bg-slate-900/g, 'bg-slate-900 hover:bg-slate-800');

fs.writeFileSync('src/App.tsx', content);
