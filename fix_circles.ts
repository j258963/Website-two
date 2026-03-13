import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/bg-slate-900 w-16 h-16/g, 'bg-slate-800 w-16 h-16');

fs.writeFileSync('src/App.tsx', content);
