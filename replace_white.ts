import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/text-slate-300/g, 'text-white');
content = content.replace(/text-slate-400/g, 'text-white/80');

fs.writeFileSync('src/App.tsx', content);
