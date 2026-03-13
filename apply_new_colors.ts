import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Fix Nav Bar to include "Book Consultation" as a secondary button
content = content.replace(
  /<nav className="hidden md:flex space-x-8">[\s\S]*?<\/nav>/,
  `<nav className="hidden md:flex space-x-8 items-center">
              {['home', 'about', 'services'].map((page) => (
                <button
                  key={page}
                  onClick={() => navigate(page)}
                  className={\`text-sm font-medium uppercase tracking-wider transition-colors hover:text-slate-900 \${
                    currentPage === page ? 'text-slate-900 border-b-2 border-slate-900' : 'text-slate-500'
                  }\`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => navigate('contact')}
                className="bg-slate-900 text-white px-5 py-2.5 rounded-md font-medium hover:bg-slate-800 transition-colors"
              >
                Book Consultation
              </button>
            </nav>`
);

// 2. Fix Mobile Nav
content = content.replace(
  /currentPage === page \? 'text-emerald-600 bg-slate-50' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'/g,
  `currentPage === page ? 'text-slate-900 bg-slate-50 font-bold' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'`
);

// 3. Fix Hero Buttons
// Primary Button: Book a Consultation
content = content.replace(
  /className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors flex items-center justify-center shadow-lg"/g,
  `className="bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-md font-semibold text-lg transition-colors flex items-center justify-center shadow-lg"`
);
// Secondary Hero Button: Explore Our Services
content = content.replace(
  /className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors flex items-center justify-center"/g,
  `className="bg-slate-900 border-2 border-slate-700 hover:bg-slate-800 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors flex items-center justify-center"`
);

// 4. Fix CTA Button (Ready to resolve your legal issue?)
content = content.replace(
  /className="bg-emerald-600 text-white hover:bg-emerald-700 px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg"/g,
  `className="bg-white text-slate-900 hover:bg-slate-50 px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg"`
);

// 5. Fix Secondary Buttons (Get Help with LTB, Send Message)
content = content.replace(
  /className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-md font-medium transition-colors"/g,
  `className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-md font-medium transition-colors"`
);
content = content.replace(
  /className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-md transition-colors"/g,
  `className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-md transition-colors"`
);

// 6. Replace remaining emerald colors with slate
content = content.replace(/bg-emerald-600/g, 'bg-slate-900');
content = content.replace(/text-emerald-600/g, 'text-slate-900');
content = content.replace(/text-emerald-700/g, 'text-slate-900');
content = content.replace(/text-emerald-800/g, 'text-slate-900');
content = content.replace(/border-emerald-600/g, 'border-slate-900');
content = content.replace(/border-emerald-700/g, 'border-slate-900');
content = content.replace(/bg-emerald-50/g, 'bg-slate-100');
content = content.replace(/border-emerald-100/g, 'border-slate-200');
content = content.replace(/bg-emerald-100/g, 'bg-slate-200');

// 7. Fix focus rings on inputs
content = content.replace(/focus:ring-emerald-600/g, 'focus:ring-slate-900');
content = content.replace(/focus:border-emerald-600/g, 'focus:border-slate-900');

// 8. Fix hover text colors in footer
content = content.replace(/hover:text-emerald-700/g, 'hover:text-slate-400');

fs.writeFileSync('src/App.tsx', content);
