import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Accents
content = content.replace(/amber-500/g, 'emerald-600');
content = content.replace(/amber-600/g, 'emerald-700');
content = content.replace(/amber-700/g, 'emerald-800');
content = content.replace(/amber-100/g, 'emerald-100');
content = content.replace(/amber-50/g, 'emerald-50');

// Primary Text
content = content.replace(/text-slate-800/g, 'text-slate-900');
content = content.replace(/text-slate-700/g, 'text-slate-900');

// Secondary Text
content = content.replace(/text-slate-600/g, 'text-slate-500');

// Borders & Dividers
content = content.replace(/border-slate-300/g, 'border-slate-200');

// Dark Sections
content = content.replace(/bg-slate-800/g, 'bg-slate-900');

fs.writeFileSync('src/App.tsx', content);
