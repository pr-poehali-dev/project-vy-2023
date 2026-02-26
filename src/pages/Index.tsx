import { useState } from "react";
import Icon from "@/components/ui/icon";

const navItems = ["Матчи", "Команды", "Рейтинги", "Новости", "Форум"];

const liveMatches = [
  { id: 1, t1: "NAVI", t2: "Astralis", s1: 14, s2: 9, map: "Mirage", event: "IEM Katowice 2025", live: true },
  { id: 2, t1: "G2", t2: "FaZe", s1: 7, s2: 12, map: "Inferno", event: "ESL Pro League S21", live: true },
  { id: 3, t1: "Vitality", t2: "Heroic", s1: 0, s2: 0, map: "Overpass", event: "BLAST Premier", live: false, time: "18:00" },
  { id: 4, t1: "Cloud9", t2: "NIP", s1: 0, s2: 0, map: "Ancient", event: "IEM Katowice 2025", live: false, time: "20:30" },
];

const teamRankings = [
  { rank: 1,  name: "Vanity Team",     pts: 1000, wl: "34/8",  wr: "81%", change: 0  },
  { rank: 2,  name: "MV Team",         pts: 840,  wl: "31/10", wr: "76%", change: 1  },
  { rank: 3,  name: "XTREME Gaming",   pts: 828,  wl: "29/12", wr: "71%", change: 0  },
  { rank: 4,  name: "Evo Team",        pts: 820,  wl: "27/14", wr: "66%", change: -1 },
  { rank: 5,  name: "Steel Curtain",   pts: 762,  wl: "26/15", wr: "63%", change: 2  },
  { rank: 6,  name: "Void Runners",    pts: 703,  wl: "25/16", wr: "61%", change: -1 },
  { rank: 7,  name: "Blaze Squad",     pts: 645,  wl: "24/17", wr: "59%", change: 0  },
  { rank: 8,  name: "Arctic Force",    pts: 587,  wl: "22/19", wr: "54%", change: 1  },
  { rank: 9,  name: "Shadow Protocol", pts: 529,  wl: "21/20", wr: "51%", change: 0  },
  { rank: 10, name: "Tungsten Edge",   pts: 470,  wl: "20/21", wr: "49%", change: -1 },
  { rank: 11, name: "Red Faction",     pts: 412,  wl: "19/22", wr: "46%", change: 0  },
  { rank: 12, name: "Quantum Rush",    pts: null, wl: "—",     wr: "—",   change: 0  },
  { rank: 13, name: "Night Owls",      pts: null, wl: "—",     wr: "—",   change: 0  },
  { rank: 14, name: "Titan Forge",     pts: null, wl: "—",     wr: "—",   change: 0  },
  { rank: 15, name: "Last Stand",      pts: null, wl: "—",     wr: "—",   change: 0  },
];

const playerRankings = [
  { rank: 1, name: "s1mple", team: "NAVI", rating: 1.38, kd: 1.45, country: "🇺🇦" },
  { rank: 2, name: "ZywOo", team: "Vitality", rating: 1.35, kd: 1.41, country: "🇫🇷" },
  { rank: 3, name: "NiKo", team: "G2", rating: 1.31, kd: 1.38, country: "🇧🇦" },
  { rank: 4, name: "sh1ro", team: "Cloud9", rating: 1.28, kd: 1.34, country: "🇷🇺" },
  { rank: 5, name: "device", team: "Astralis", rating: 1.26, kd: 1.30, country: "🇩🇰" },
];

const news = [
  {
    id: 1,
    tag: "ТРАНСФЕР",
    title: "s1mple вернулся в NAVI после 8 месяцев перерыва",
    desc: "Легендарный украинский снайпер официально подписал контракт с Natus Vincere на сезон 2025 года.",
    time: "2 часа назад",
    hot: true,
  },
  {
    id: 2,
    tag: "ТРАНСФЕР",
    title: "NiKo покидает G2 Esports — переход в FaZe Clan подтверждён",
    desc: "Боснийский про-игрок возвращается в FaZe Clan спустя три года после первого ухода.",
    time: "5 часов назад",
    hot: true,
  },
  {
    id: 3,
    tag: "НОВОСТЬ",
    title: "Valve анонсировала обновление античита CS2 — VAC Live",
    desc: "Новая система обнаружения читов использует машинное обучение в реальном времени.",
    time: "Вчера",
    hot: false,
  },
  {
    id: 4,
    tag: "ТРАНСФЕР",
    title: "Команда Cloud9 подписала трёх новых игроков из Европы",
    desc: "Российская организация усиливает состав перед майором — в команду приходят три опытных европейца.",
    time: "Вчера",
    hot: false,
  },
  {
    id: 5,
    tag: "ТУРНИР",
    title: "IEM Katowice 2025 — расписание группового этапа опубликовано",
    desc: "16 команд разыграют 1 000 000$ на крупнейшем турнире первого квартала.",
    time: "2 дня назад",
    hot: false,
  },
];

const chatMessages = [
  { user: "kratonFan", msg: "NAVI точно возьмут катовице!", time: "14:32" },
  { user: "ESL_watcher", msg: "s1mple топ, без вопросов", time: "14:33" },
  { user: "RU_pride", msg: "Cloud9 в этом году огонь 🔥", time: "14:35" },
  { user: "NiKo_goat", msg: "FaZe тоже не сдастся, посмотрим", time: "14:36" },
  { user: "aimstar99", msg: "Кто смотрит G2 vs FaZe?", time: "14:37" },
];

export default function Index() {
  const [activeNav, setActiveNav] = useState("Матчи");
  const [rankTab, setRankTab] = useState<"teams" | "players">("teams");
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState(chatMessages);

  const handleSend = () => {
    if (!chatInput.trim()) return;
    setMessages(prev => [...prev, { user: "Вы", msg: chatInput.trim(), time: new Date().toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit" }) }]);
    setChatInput("");
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white font-body">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-dark-bg/95 backdrop-blur border-b border-dark-border">
        <div className="max-w-[1400px] mx-auto px-4 flex items-center h-14 gap-8">
          <div className="flex items-center gap-2 shrink-0">
            <span className="font-display text-2xl font-bold tracking-wider text-neon">BBHY</span>
            <span className="text-[10px] font-body text-white/30 tracking-widest uppercase mt-1">ESPORTS</span>
          </div>

          <nav className="flex items-center gap-1 flex-1">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => setActiveNav(item)}
                className={`px-4 py-1.5 font-display text-sm tracking-wider uppercase transition-all duration-200 rounded-sm ${
                  activeNav === item
                    ? "text-neon bg-neon/10 border border-neon/30"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="text-white/50 hover:text-white transition-colors">
              <Icon name="Search" size={18} />
            </button>
            <button className="px-4 py-1.5 bg-neon text-black font-display text-sm font-semibold tracking-wider uppercase rounded-sm hover:bg-neon-dim transition-colors">
              Войти
            </button>
          </div>
        </div>
      </header>

      {/* TICKER */}
      <div className="bg-neon/10 border-b border-neon/20 overflow-hidden py-1">
        <div className="flex gap-12 animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {[...liveMatches, ...liveMatches].map((m, i) => (
            <span key={i} className="text-xs font-body text-white/70 flex items-center gap-2">
              {m.live && <span className="w-1.5 h-1.5 rounded-full bg-live-red animate-pulse-dot inline-block" />}
              <span className="text-white font-medium">{m.t1}</span>
              <span className="text-neon font-display font-bold">{m.live ? `${m.s1} : ${m.s2}` : "vs"}</span>
              <span className="text-white font-medium">{m.t2}</span>
              <span className="text-white/40">— {m.event}</span>
            </span>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-[1400px] mx-auto px-4 py-6 grid grid-cols-12 gap-5">

        {/* LEFT — MATCHES */}
        <div className="col-span-3 space-y-4 animate-fade-in" style={{ animationDelay: "0ms" }}>
          <SectionHeader title="Матчи" icon="Swords" accent="LIVE" />
          <div className="space-y-2">
            {liveMatches.map((m, i) => (
              <div
                key={m.id}
                className="bg-dark-card border border-dark-border hover:border-neon/30 hover:bg-dark-hover transition-all duration-200 rounded cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="px-3 py-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-body text-white/40 uppercase tracking-wider truncate">{m.event}</span>
                    {m.live ? (
                      <span className="flex items-center gap-1 text-[10px] font-display text-live-red uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-live-red animate-pulse-dot" />LIVE
                      </span>
                    ) : (
                      <span className="text-[10px] text-white/30 font-body">{m.time}</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-display font-semibold text-sm tracking-wide group-hover:text-neon transition-colors">{m.t1}</span>
                    <div className="flex items-center gap-2">
                      {m.live ? (
                        <span className="font-display font-bold text-base text-neon">{m.s1}:{m.s2}</span>
                      ) : (
                        <span className="font-display text-xs text-white/30">vs</span>
                      )}
                    </div>
                    <span className="font-display font-semibold text-sm tracking-wide group-hover:text-neon transition-colors">{m.t2}</span>
                  </div>
                  <div className="mt-1 text-[10px] text-white/30 font-body text-center">{m.map}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CENTER — NEWS */}
        <div className="col-span-6 space-y-4 animate-fade-in" style={{ animationDelay: "80ms" }}>
          <SectionHeader title="Новости и трансферы" icon="Newspaper" />

          {/* Featured */}
          {news.filter(n => n.hot).map((n, i) => (
            <div
              key={n.id}
              className="bg-dark-card border border-dark-border hover:border-neon/30 hover:bg-dark-hover transition-all duration-200 rounded cursor-pointer group relative overflow-hidden animate-fade-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-neon" />
              <div className="px-4 py-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[10px] font-display font-semibold tracking-widest uppercase px-2 py-0.5 rounded-sm ${
                    n.tag === "ТРАНСФЕР" ? "bg-rank-gold/20 text-rank-gold" : "bg-neon/20 text-neon"
                  }`}>{n.tag}</span>
                  <span className="text-[10px] text-white/30 font-body">{n.time}</span>
                  {i === 0 && <span className="text-[10px] font-display text-live-red uppercase tracking-wider">🔥 Горячее</span>}
                </div>
                <h3 className="font-display font-semibold text-base tracking-wide leading-tight group-hover:text-neon transition-colors mb-1">{n.title}</h3>
                <p className="text-sm text-white/50 font-body leading-relaxed">{n.desc}</p>
              </div>
            </div>
          ))}

          {/* Regular */}
          <div className="space-y-1">
            {news.filter(n => !n.hot).map((n, i) => (
              <div
                key={n.id}
                className="flex items-start gap-3 px-4 py-3 bg-dark-card border border-dark-border hover:border-neon/20 hover:bg-dark-hover transition-all duration-200 rounded cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${(i + 2) * 80}ms` }}
              >
                <span className={`shrink-0 text-[9px] font-display font-bold tracking-widest uppercase px-1.5 py-0.5 rounded-sm mt-0.5 ${
                  n.tag === "ТРАНСФЕР" ? "bg-rank-gold/15 text-rank-gold" :
                  n.tag === "ТУРНИР" ? "bg-blue-500/15 text-blue-400" :
                  "bg-white/10 text-white/50"
                }`}>{n.tag}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-body text-sm text-white/80 group-hover:text-white transition-colors leading-snug">{n.title}</p>
                </div>
                <span className="shrink-0 text-[10px] text-white/25 font-body">{n.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — RANKINGS + CHAT */}
        <div className="col-span-3 space-y-4 animate-fade-in" style={{ animationDelay: "160ms" }}>

          {/* Rankings */}
          <div className="bg-dark-card border border-dark-border rounded overflow-hidden">
            <div className="flex border-b border-dark-border">
              {(["teams", "players"] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setRankTab(tab)}
                  className={`flex-1 py-2.5 font-display text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                    rankTab === tab ? "text-neon bg-neon/10 border-b-2 border-neon" : "text-white/40 hover:text-white"
                  }`}
                >
                  {tab === "teams" ? "Команды" : "Игроки"}
                </button>
              ))}
            </div>

            {rankTab === "teams" ? (
              <div>
                {/* Header row */}
                <div className="flex items-center gap-2 px-3 py-1.5 border-b border-dark-border bg-dark-bg/60">
                  <span className="w-5 text-center text-[9px] text-white/25 font-display uppercase">#</span>
                  <span className="flex-1 text-[9px] text-white/25 font-display uppercase tracking-wider">Команда</span>
                  <span className="w-10 text-right text-[9px] text-white/25 font-display uppercase">Очки</span>
                  <span className="w-10 text-right text-[9px] text-white/25 font-display uppercase">W/L</span>
                  <span className="w-8 text-right text-[9px] text-white/25 font-display uppercase">%</span>
                </div>
                <div className="max-h-80 overflow-y-auto divide-y divide-dark-border">
                  {teamRankings.map((t, i) => (
                    <div
                      key={t.rank}
                      className="flex items-center gap-2 px-3 py-2 hover:bg-dark-hover transition-colors cursor-pointer group animate-slide-right"
                      style={{ animationDelay: `${i * 30}ms` }}
                    >
                      <span className={`w-5 text-center font-display font-bold text-xs shrink-0 ${t.rank <= 3 ? "text-rank-gold" : t.rank <= 11 ? "text-white/40" : "text-white/20"}`}>
                        {t.rank}
                      </span>
                      <span className="flex-1 font-body text-xs text-white/80 group-hover:text-white transition-colors truncate">{t.name}</span>
                      <span className="w-10 text-right font-display text-xs text-neon font-bold shrink-0">
                        {t.pts ?? <span className="text-white/20">—</span>}
                      </span>
                      <span className="w-10 text-right font-body text-[10px] text-white/40 shrink-0">{t.wl}</span>
                      <span className={`w-8 text-right font-display text-[10px] font-semibold shrink-0 ${
                        t.wr === "—" ? "text-white/20" :
                        parseInt(t.wr) >= 70 ? "text-win-green" :
                        parseInt(t.wr) >= 55 ? "text-rank-gold" : "text-live-red"
                      }`}>{t.wr}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="divide-y divide-dark-border">
                {playerRankings.map((p, i) => (
                  <div
                    key={p.rank}
                    className="flex items-center gap-2 px-3 py-2.5 hover:bg-dark-hover transition-colors cursor-pointer group animate-slide-right"
                    style={{ animationDelay: `${i * 40}ms` }}
                  >
                    <span className={`w-5 text-center font-display font-bold text-xs ${p.rank <= 3 ? "text-rank-gold" : "text-white/30"}`}>
                      {p.rank}
                    </span>
                    <span className="text-sm">{p.country}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-display text-sm font-semibold text-white/90 group-hover:text-neon transition-colors">{p.name}</div>
                      <div className="text-[10px] text-white/30 font-body">{p.team}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-display text-xs text-neon font-bold">{p.rating}</div>
                      <div className="text-[10px] text-white/30 font-body">K/D {p.kd}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Chat */}
          <div className="bg-dark-card border border-dark-border rounded overflow-hidden">
            <div className="px-3 py-2.5 border-b border-dark-border flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-win-green animate-pulse-dot" />
              <span className="font-display text-xs font-semibold tracking-wider uppercase text-white/70">Чат онлайн</span>
              <span className="ml-auto text-[10px] text-win-green font-body">247 онлайн</span>
            </div>
            <div className="h-48 overflow-y-auto px-3 py-2 space-y-2 scrollbar-thin">
              {messages.map((msg, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[10px] text-white/25 font-body shrink-0 mt-0.5">{msg.time}</span>
                  <span className={`text-xs font-display font-semibold shrink-0 ${msg.user === "Вы" ? "text-neon" : "text-rank-gold"}`}>{msg.user}:</span>
                  <span className="text-xs text-white/60 font-body leading-tight">{msg.msg}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-2 px-2 pb-2">
              <input
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSend()}
                placeholder="Написать..."
                className="flex-1 bg-dark-bg border border-dark-border rounded-sm px-2 py-1.5 text-xs font-body text-white placeholder-white/25 focus:outline-none focus:border-neon/50 transition-colors"
              />
              <button
                onClick={handleSend}
                className="px-3 bg-neon text-black rounded-sm hover:bg-neon-dim transition-colors"
              >
                <Icon name="Send" size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-dark-border mt-8 py-6">
        <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between">
          <span className="font-display text-lg font-bold text-neon tracking-wider">BBHY <span className="text-white/20 font-body text-xs font-normal">ESPORTS</span></span>
          <div className="flex gap-6 text-xs text-white/30 font-body">
            <a href="#" className="hover:text-white transition-colors">О нас</a>
            <a href="#" className="hover:text-white transition-colors">Реклама</a>
            <a href="#" className="hover:text-white transition-colors">Правила</a>
            <a href="#" className="hover:text-white transition-colors">Контакты</a>
          </div>
          <span className="text-xs text-white/20 font-body">© 2025 BBHY Esports Portal</span>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

function SectionHeader({ title, icon, accent }: { title: string; icon: string; accent?: string }) {
  return (
    <div className="flex items-center gap-2 pb-1 border-b border-dark-border">
      <Icon name={icon} size={14} className="text-neon" />
      <span className="font-display font-semibold text-sm tracking-wider uppercase text-white">{title}</span>
      {accent && (
        <span className="ml-auto text-[10px] font-display text-live-red tracking-widest flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-live-red animate-pulse-dot" />{accent}
        </span>
      )}
    </div>
  );
}