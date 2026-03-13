import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/text-emerald-700/g, 'text-emerald-600');
content = content.replace(/hover:text-emerald-600/g, 'hover:text-emerald-700'); // restore hover states to be slightly darker

fs.writeFileSync('src/App.tsx', content);
