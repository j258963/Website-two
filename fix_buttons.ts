import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/bg-emerald-600 hover:bg-emerald-700 text-slate-900/g, 'bg-emerald-600 hover:bg-emerald-700 text-white');
content = content.replace(/bg-emerald-600 text-slate-900 hover:bg-emerald-700/g, 'bg-emerald-600 text-white hover:bg-emerald-700');

fs.writeFileSync('src/App.tsx', content);
