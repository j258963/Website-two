import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/Book a Consultation/g, 'Book a Free Consultation');

fs.writeFileSync('src/App.tsx', content);
