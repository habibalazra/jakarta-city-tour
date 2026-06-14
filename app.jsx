const { useState, useEffect } = React;

// --- ICONS ---
const MapPinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);
const ClockIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
const NavigationIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
);
const WalletIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>
);
const CalendarIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
);
const MoonIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
);
const SunIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
);
const CheckCircleIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);

// --- DATA ---
const dataDay1 = [
  { time: "09.00 - 11.30", title: "Museum Nasional Indonesia", desc: "Eksplorasi Sejarah", isNight: false },
  { time: "11.45 - 13.00", title: "Kopitagram Tomang", desc: "Makan Siang & Ngopi Siang", isNight: false },
  { time: "13.15 - 15.30", title: "Jakarta AQuarium Safari - Neo Soho", desc: "Wisata Satwa Indoor", isNight: false },
  { time: "16.00 - 18.00", title: "Kawasan Komplek GBK", desc: "Jalan Sore & Foto Stadion", isNight: false },
  { time: "18.00 - 20.00", title: "Toko Kopi Tuku GBK", desc: "Ngopi Estetik Malam", isNight: true },
];

const dataDay2 = [
  { time: "10.00 - 12.30", title: "Museum Seni Rupa dan Keramik", desc: "Eksplorasi Seni Kota Tua", isNight: false },
  { time: "12.30 - 14.30", title: "Kedai Seni Djakarte", desc: "Makan Siang Nuansa Vintage", isNight: false },
  { time: "14.30 - 16.30", title: "Alun-alun Kota Tua", desc: "Santai Sore di Pelataran", isNight: false },
  { time: "16.30 - 17.30", title: "Night Riding", desc: "Menyusuri Arteri ke Thamrin", isNight: true },
  { time: "17.30 - 19.30", title: "Anjungan Mal Sarinah", desc: "Berburu City Lights Pencakar Langit", isNight: true },
  { time: "19.30 - Selesai", title: "Jalan Sabang", desc: "Makan Malam Street Food Legendaris", isNight: true },
];

// --- COMPONENTS ---

const TimelineItem = ({ item, index, totalLength }) => {
  const { time, title, desc, isNight } = item;
  const isLast = index === totalLength - 1;
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(title + " Jakarta")}`;

  return (
    <div className={`relative flex gap-4 p-4 rounded-2xl mb-6 shadow-sm transition-all duration-300 ${
      isNight 
      ? 'bg-slate-900 border border-slate-800 shadow-[0_0_15px_rgba(6,182,212,0.15)] text-slate-100' 
      : 'bg-white border border-slate-100 text-slate-800'
    }`}>
      
      {/* Decorative Glow for Night Mode */}
      {isNight && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-neon-cyan/5 to-neon-indigo/5 pointer-events-none"></div>
      )}
      {isNight && (
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-neon-cyan/20 to-neon-indigo/20 blur-sm pointer-events-none opacity-50"></div>
      )}

      {/* Timeline Line & Dot */}
      <div className="flex flex-col items-center mt-1 z-10">
        <div className={`w-3 h-3 rounded-full flex-shrink-0 shadow-sm ${
          isNight ? 'bg-neon-cyan shadow-[0_0_8px_#06b6d4]' : 'bg-indigo-500'
        }`} />
        {!isLast && (
          <div className={`w-0.5 h-full mt-2 rounded-full opacity-30 ${
            isNight ? 'bg-gradient-to-b from-neon-cyan to-neon-indigo' : 'bg-slate-300'
          }`} />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-2 z-10">
        <div className="flex items-center gap-2 mb-1.5 opacity-80">
          <ClockIcon className="w-3.5 h-3.5" />
          <span className={`text-xs font-semibold tracking-wider ${isNight ? 'text-neon-cyan' : 'text-indigo-600'}`}>
            {time}
          </span>
          {isNight ? <MoonIcon className="w-3.5 h-3.5 ml-auto text-slate-400" /> : <SunIcon className="w-3.5 h-3.5 ml-auto text-amber-500" />}
        </div>
        
        <h3 className={`text-lg font-bold leading-tight mb-1 ${isNight ? 'text-white' : 'text-slate-800'}`}>
          {title}
        </h3>
        
        <p className={`text-sm mb-4 leading-relaxed ${isNight ? 'text-slate-300' : 'text-slate-500'}`}>
          {desc}
        </p>

        <a 
          href={mapsUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-transform active:scale-95 ${
            isNight 
            ? 'bg-slate-800 text-slate-200 border border-slate-700 hover:border-neon-cyan/50 hover:text-neon-cyan' 
            : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-indigo-600'
          }`}
        >
          <NavigationIcon className="w-3.5 h-3.5" />
          Arahkan Lokasi
        </a>
      </div>
    </div>
  );
};

const BudgetDashboard = () => {
  const budgets = [
    { label: "Tiket Wisata", items: "Museum Nasional, Aquarium Safari, Museum Keramik", amount: "Rp 215.000" },
    { label: "Konsumsi Hari 1", items: "Kopitagram, Tuku", amount: "Rp 95.000" },
    { label: "Konsumsi Hari 2", items: "Kedai Djakarte, Jalan Sabang", amount: "Rp 125.000" },
    { label: "Operasional Motor", items: "Bensin 2 Hari & Parkir", amount: "Rp 65.000" },
  ];

  return (
    <div className="mt-8 mb-12 p-6 rounded-3xl bg-gradient-to-br from-indigo-900 to-slate-900 text-white shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-neon-pink/10 rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-neon-cyan/10 rounded-full blur-3xl transform -translate-x-10 translate-y-10"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-white/10 rounded-lg backdrop-blur-md">
            <WalletIcon className="w-5 h-5 text-neon-cyan" />
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight">Estimasi Biaya</h2>
            <p className="text-sm text-slate-300">Total Budget: <span className="font-semibold text-neon-cyan">Rp 500.000</span></p>
          </div>
        </div>

        <div className="space-y-4">
          {budgets.map((b, i) => (
            <div key={i} className="flex justify-between items-start pb-3 border-b border-white/10 last:border-0 last:pb-0">
              <div className="pr-4">
                <p className="text-sm font-medium text-slate-100">{b.label}</p>
                <p className="text-xs text-slate-400 mt-0.5 leading-snug">{b.items}</p>
              </div>
              <div className="text-sm font-semibold whitespace-nowrap text-right bg-white/5 px-2 py-1 rounded-md">
                {b.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [activeDay, setActiveDay] = useState(1);
  const currentData = activeDay === 1 ? dataDay1 : dataDay2;

  // Apply dark mode to root container based on active day to enhance immersion slightly,
  // but timeline items have their own styles anyway. We'll keep main container neutral, 
  // so the contrast of day/night cards is visible.
  
  return (
    <div className="min-h-screen bg-slate-50 relative">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNlN2U1ZTQiLz48L3N2Zz4=')] opacity-50 z-0"></div>
      
      {/* Header */}
      <div className="relative z-10 pt-10 pb-6 px-6 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0">
        <div className="flex items-center gap-2 mb-2">
          <MapPinIcon className="w-5 h-5 text-indigo-500" />
          <span className="text-xs font-bold tracking-widest text-indigo-500 uppercase">Jakarta City Tour</span>
        </div>
        <h1 className="text-2xl font-black text-slate-800 leading-tight">
          Jalan Jalan di Jakarta<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">Bersama Elsa</span>
        </h1>
      </div>

      <div className="px-5 py-6 relative z-10">
        {/* Tab Control */}
        <div className="flex p-1 mb-8 bg-slate-200/60 backdrop-blur-md rounded-2xl">
          <button 
            onClick={() => setActiveDay(1)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
              activeDay === 1 
              ? 'bg-white text-indigo-600 shadow-sm' 
              : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <CalendarIcon className="w-4 h-4" />
            Hari 1
          </button>
          <button 
            onClick={() => setActiveDay(2)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
              activeDay === 2 
              ? 'bg-slate-800 text-white shadow-md' 
              : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <CalendarIcon className="w-4 h-4" />
            Hari 2
          </button>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Subtle line behind timeline */}
          <div className="absolute left-[21px] top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent -z-10"></div>
          
          <div className="space-y-2">
            {currentData.map((item, index) => (
              <TimelineItem 
                key={index} 
                item={item} 
                index={index} 
                totalLength={currentData.length} 
              />
            ))}
          </div>
        </div>

        {/* Budget Section */}
        <BudgetDashboard />
        
        {/* Footer */}
        <div className="text-center mt-10 mb-6">
          <p className="text-xs text-slate-400 font-medium flex items-center justify-center gap-1.5">
            <CheckCircleIcon className="w-4 h-4 text-emerald-500" />
            Ready for the trip
          </p>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
