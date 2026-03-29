
// ─── Storage helpers ───
const defaultData = {
  goals: [
    {
      id: "g1", title: "World-Class Materials Analyst", category: "career",
      deadline: "2027-12-31", progress: 25,
      milestones: [
        { id: "m1", text: "1 investment memo per week", done: false, target: "2026-06-30" },
        { id: "m2", text: "Define investment philosophy", done: false, target: "2026-09-30" },
        { id: "m3", text: "Published track record (6 months)", done: false, target: "2027-03-31" },
      ],
    },
    {
      id: "g2", title: "USCPA 全科目合格", category: "certification",
      deadline: "2026-12-31", progress: 10,
      milestones: [
        { id: "m4", text: "FAR 合格", done: false, target: "2026-06-30" },
        { id: "m5", text: "AUD 合格", done: false, target: "2026-08-31" },
        { id: "m6", text: "REG 合格", done: false, target: "2026-10-31" },
        { id: "m7", text: "BAR 合格", done: false, target: "2026-12-31" },
      ],
    },
    {
      id: "g3", title: "簿記2級 合格", category: "certification",
      deadline: "2026-12-31", progress: 15,
      milestones: [
        { id: "m8", text: "商業簿記 完了", done: false, target: "2026-07-31" },
        { id: "m9", text: "工業簿記 完了", done: false, target: "2026-09-30" },
        { id: "m10", text: "模試 80点以上", done: false, target: "2026-11-30" },
      ],
    },
    {
      id: "g4", title: "Python + Bloomberg 分析基盤", category: "skill",
      deadline: "2026-12-31", progress: 30,
      milestones: [
        { id: "m11", text: "会社PC Python環境構築", done: false, target: "2026-06-30" },
        { id: "m12", text: "blpapi 自動レポート稼働", done: false, target: "2026-09-30" },
        { id: "m13", text: "Research Portal v1 完成", done: false, target: "2026-12-31" },
      ],
    },
  ],
  checkins: [],
  journals: [],
  skillMap: {
    center: "World-Class Analyst",
    branches: [
      { id: "b1", label: "Financial Modeling", children: [
        { id: "b1c1", label: "3-Statement Model", children: [] }, { id: "b1c2", label: "DCF / NAV", children: [] }, { id: "b1c3", label: "SOTP Valuation", children: [] }, { id: "b1c4", label: "Scenario Analysis", children: [] }
      ]},
      { id: "b2", label: "Sector Knowledge", children: [
        { id: "b2c1", label: "Chemicals", children: [] }, { id: "b2c2", label: "Steel", children: [] }, { id: "b2c3", label: "Nonferrous Metals", children: [] }, { id: "b2c4", label: "Supply-Demand", children: [] }
      ]},
      { id: "b3", label: "Data & Tools", children: [
        { id: "b3c1", label: "Bloomberg", children: [] }, { id: "b3c2", label: "LSEG / Refinitiv", children: [] }, { id: "b3c3", label: "Python", children: [] }, { id: "b3c4", label: "Excel VBA", children: [] }
      ]},
      { id: "b4", label: "Communication", children: [
        { id: "b4c1", label: "Investment Memo", children: [] }, { id: "b4c2", label: "Presentation", children: [] }, { id: "b4c3", label: "FM Discussion", children: [] }, { id: "b4c4", label: "English", children: [] }
      ]},
      { id: "b5", label: "Accounting", children: [
        { id: "b5c1", label: "USCPA", children: [] }, { id: "b5c2", label: "簿記2級", children: [] }, { id: "b5c3", label: "IFRS vs JGAAP", children: [] }, { id: "b5c4", label: "Tax Basics", children: [] }
      ]},
      { id: "b6", label: "Market Sense", children: [
        { id: "b6c1", label: "Macro Indicators", children: [] }, { id: "b6c2", label: "Commodity Cycles", children: [] }, { id: "b6c3", label: "FX Impact", children: [] }, { id: "b6c4", label: "Sentiment", children: [] }
      ]},
      { id: "b7", label: "Portfolio Mgmt", children: [
        { id: "b7c1", label: "Risk Management", children: [] }, { id: "b7c2", label: "Position Sizing", children: [] }, { id: "b7c3", label: "Attribution", children: [] }, { id: "b7c4", label: "Track Record", children: [] }
      ]},
      { id: "b8", label: "Mindset", children: [
        { id: "b8c1", label: "Behavioral Bias", children: [] }, { id: "b8c2", label: "Discipline", children: [] }, { id: "b8c3", label: "Continuous Learning", children: [] }, { id: "b8c4", label: "Contrarian Thinking", children: [] }
      ]},
    ]
  },
};


// ─── Icons (inline SVG) ───
const Icons = {
  Goals: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  Milestones: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
    </svg>
  ),
  Checkin: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  ),
  Journal: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>
  ),
  Plus: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
  ),
  Trash: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
    </svg>
  ),
  ChevronDown: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
  ),
  Edit: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
  ),
  Skills: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/><path d="M12 2v4m0 12v4m10-10h-4M6 12H2m15.07-7.07l-2.83 2.83M9.76 14.24l-2.83 2.83m11.14 0l-2.83-2.83M9.76 9.76L6.93 6.93"/>
    </svg>
  ),
};

const CATEGORY_LABELS = { career: "Career", certification: "資格", skill: "Skill" };
const CATEGORY_COLORS = { career: "#1d1d1f", certification: "#0071e3", skill: "#34c759" };

const uid = () => Math.random().toString(36).slice(2, 10);
const fmtDate = (d) => { if (!d) return ""; const dt = new Date(d); return `${dt.getMonth()+1}/${dt.getDate()}`; };
const daysUntil = (d) => { if (!d) return null; return Math.ceil((new Date(d) - new Date()) / 86400000); };
const today = () => new Date().toISOString().slice(0, 10);

// ─── Pinch Zoom Hook ───
const usePinchZoom = (minScale = 0.3, maxScale = 3) => {
  const containerRef = useRef(null);
  const scaleRef = useRef(0.7);
  const transRef = useRef({ x: 0, y: 0 });
  const [, forceRender] = useState(0);
  const pinchRef = useRef({ startDist: 0, startScale: 1, startTx: 0, startTy: 0, midX: 0, midY: 0 });
  const panRef = useRef({ startX: 0, startY: 0, startTx: 0, startTy: 0, panning: false });

  const getDist = (t1, t2) => Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
  const getMid = (t1, t2) => ({ x: (t1.clientX + t2.clientX) / 2, y: (t1.clientY + t2.clientY) / 2 });

  const handlers = {
    onTouchStart: (e) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const mid = getMid(e.touches[0], e.touches[1]);
        const rect = containerRef.current?.getBoundingClientRect();
        // Pinch midpoint relative to container
        const cx = mid.x - (rect?.left || 0);
        const cy = mid.y - (rect?.top || 0);
        pinchRef.current = {
          startDist: getDist(e.touches[0], e.touches[1]),
          startScale: scaleRef.current,
          startTx: transRef.current.x,
          startTy: transRef.current.y,
          midX: cx,
          midY: cy,
        };
        panRef.current.panning = false;
      } else if (e.touches.length === 1) {
        panRef.current = { startX: e.touches[0].clientX, startY: e.touches[0].clientY,
          startTx: transRef.current.x, startTy: transRef.current.y, panning: true };
      }
    },
    onTouchMove: (e) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const dist = getDist(e.touches[0], e.touches[1]);
        const p = pinchRef.current;
        const newScale = Math.min(maxScale, Math.max(minScale, p.startScale * (dist / p.startDist)));
        // Zoom toward the pinch midpoint:
        // The point under the fingers (in content coords) should stay under the fingers
        // contentX = (midX - tx) / scale  →  tx = midX - contentX * scale
        const contentX = (p.midX - p.startTx) / p.startScale;
        const contentY = (p.midY - p.startTy) / p.startScale;
        const newTx = p.midX - contentX * newScale;
        const newTy = p.midY - contentY * newScale;
        scaleRef.current = newScale;
        transRef.current = { x: newTx, y: newTy };
        forceRender(n => n + 1);
      } else if (e.touches.length === 1 && panRef.current.panning) {
        const dx = e.touches[0].clientX - panRef.current.startX;
        const dy = e.touches[0].clientY - panRef.current.startY;
        transRef.current = { x: panRef.current.startTx + dx, y: panRef.current.startTy + dy };
        forceRender(n => n + 1);
      }
    },
    onTouchEnd: (e) => {
      if (e.touches.length < 2) panRef.current.panning = false;
    },
  };

  const reset = () => { scaleRef.current = 0.7; transRef.current = { x: 0, y: 0 }; forceRender(n => n + 1); };

  const style = {
    transform: `translate(${transRef.current.x}px, ${transRef.current.y}px) scale(${scaleRef.current})`,
    transformOrigin: "0 0",
    transition: "none",
    touchAction: "none",
  };

  return { containerRef, handlers, style, scale: scaleRef.current, reset };
};

// ─── Progress Ring ───
const ProgressRing = ({ pct, size = 52, stroke = 4, color = "#1d1d1f" }) => {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#f0f0f0" strokeWidth={stroke} />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 0.6s ease" }} />
      <text x={size/2} y={size/2} textAnchor="middle" dominantBaseline="central"
        style={{ transform: "rotate(90deg)", transformOrigin: "center", fontSize: 12, fontWeight: 600, fill: "#1d1d1f", fontFamily: "'DM Sans'" }}>
        {pct}%
      </text>
    </svg>
  );
};

// ─── Linear Progress ───
const ProgressBar = ({ pct, color = "#1d1d1f", height = 6 }) => (
  <div style={{ width: "100%", height, borderRadius: height, background: "#f0f0f0", overflow: "hidden" }}>
    <div style={{ width: `${Math.min(pct, 100)}%`, height: "100%", borderRadius: height, background: color, transition: "width 0.5s ease" }} />
  </div>
);

// ─── Modal ───
const Modal = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 100, display: "flex", alignItems: "flex-end", justifyContent: "center" }}
      onClick={onClose}>
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.25)", backdropFilter: "blur(4px)" }} />
      <div onClick={(e) => e.stopPropagation()}
        style={{ position: "relative", width: "100%", maxWidth: 480, background: "#fff", borderRadius: "20px 20px 0 0",
          padding: "28px 24px 40px", maxHeight: "85vh", overflowY: "auto",
          animation: "slideUp 0.3s ease" }}>
        <div style={{ width: 36, height: 4, borderRadius: 2, background: "#d1d1d6", margin: "0 auto 20px" }} />
        <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 20px", color: "#1d1d1f" }}>{title}</h3>
        {children}
      </div>
    </div>
  );
};

// ─── Input ───
const Input = ({ label, ...props }) => (
  <div style={{ marginBottom: 16 }}>
    {label && <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#86868b", marginBottom: 6, letterSpacing: 0.3 }}>{label}</label>}
    <input {...props} style={{ width: "100%", padding: "10px 14px", border: "1px solid #e5e5ea", borderRadius: 12,
      fontSize: 15, fontFamily: "'DM Sans'", outline: "none", background: "#fafafa", boxSizing: "border-box",
      ...props.style }} />
  </div>
);

const TextArea = ({ label, ...props }) => (
  <div style={{ marginBottom: 16 }}>
    {label && <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#86868b", marginBottom: 6, letterSpacing: 0.3 }}>{label}</label>}
    <textarea {...props} style={{ width: "100%", padding: "10px 14px", border: "1px solid #e5e5ea", borderRadius: 12,
      fontSize: 15, fontFamily: "'DM Sans'", outline: "none", background: "#fafafa", resize: "vertical",
      minHeight: 80, boxSizing: "border-box", ...props.style }} />
  </div>
);

const Btn = ({ children, variant = "primary", ...props }) => {
  const styles = variant === "primary"
    ? { background: "#1d1d1f", color: "#fff" }
    : { background: "#f5f5f7", color: "#1d1d1f" };
  return (
    <button {...props} style={{ padding: "10px 20px", borderRadius: 12, border: "none", fontSize: 15,
      fontWeight: 600, fontFamily: "'DM Sans'", cursor: "pointer", ...styles, ...props.style }}>
      {children}
    </button>
  );
};

const Select = ({ label, options, ...props }) => (
  <div style={{ marginBottom: 16 }}>
    {label && <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#86868b", marginBottom: 6, letterSpacing: 0.3 }}>{label}</label>}
    <select {...props} style={{ width: "100%", padding: "10px 14px", border: "1px solid #e5e5ea", borderRadius: 12,
      fontSize: 15, fontFamily: "'DM Sans'", outline: "none", background: "#fafafa", boxSizing: "border-box", appearance: "none" }}>
      {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
  </div>
);

// ────────────────────────────────────────────────
// TAB 1: GOALS
// ────────────────────────────────────────────────
const GoalsTab = ({ data, setData }) => {
  const [expanded, setExpanded] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ title: "", category: "career", deadline: "", progress: 0 });

  const addGoal = () => {
    if (!form.title) return;
    const g = { id: uid(), ...form, progress: Number(form.progress), milestones: [] };
    setData(d => ({ ...d, goals: [...d.goals, g] }));
    setShowAdd(false);
    setForm({ title: "", category: "career", deadline: "", progress: 0 });
  };

  const removeGoal = (id) => setData(d => ({ ...d, goals: d.goals.filter(g => g.id !== id) }));

  const updateProgress = (id, val) => {
    setData(d => ({ ...d, goals: d.goals.map(g => g.id === id ? { ...g, progress: Number(val) } : g) }));
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div>
          <h2 style={{ fontSize: 28, fontWeight: 800, margin: 0, color: "#1d1d1f", letterSpacing: -0.5 }}>Goals</h2>
          <p style={{ fontSize: 13, color: "#86868b", margin: "4px 0 0" }}>{data.goals.length} active goals</p>
        </div>
        <button onClick={() => setShowAdd(true)}
          style={{ width: 40, height: 40, borderRadius: 20, background: "#1d1d1f", color: "#fff",
            border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <Icons.Plus />
        </button>
      </div>

      {/* Summary Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 24 }}>
        {Object.entries(CATEGORY_LABELS).map(([key, label]) => {
          const goals = data.goals.filter(g => g.category === key);
          const avg = goals.length ? Math.round(goals.reduce((s, g) => s + g.progress, 0) / goals.length) : 0;
          return (
            <div key={key} style={{ background: "#f5f5f7", borderRadius: 16, padding: "14px 12px", textAlign: "center" }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: CATEGORY_COLORS[key], letterSpacing: 0.5, textTransform: "uppercase", marginBottom: 6 }}>{label}</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: "#1d1d1f" }}>{avg}%</div>
            </div>
          );
        })}
      </div>

      {/* Goal Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {data.goals.map(g => {
          const isOpen = expanded === g.id;
          const days = daysUntil(g.deadline);
          const doneMilestones = g.milestones.filter(m => m.done).length;
          return (
            <div key={g.id} style={{ background: "#fff", borderRadius: 16, border: "1px solid #e5e5ea",
              overflow: "hidden", transition: "all 0.2s" }}>
              <div style={{ padding: "16px 18px", display: "flex", alignItems: "center", gap: 14, cursor: "pointer" }}
                onClick={() => setExpanded(isOpen ? null : g.id)}>
                <ProgressRing pct={g.progress} color={CATEGORY_COLORS[g.category]} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#1d1d1f", marginBottom: 3 }}>{g.title}</div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                    <span style={{ fontSize: 11, fontWeight: 600, color: CATEGORY_COLORS[g.category],
                      background: `${CATEGORY_COLORS[g.category]}12`, padding: "2px 8px", borderRadius: 6 }}>
                      {CATEGORY_LABELS[g.category]}
                    </span>
                    {days !== null && (
                      <span style={{ fontSize: 11, color: days < 30 ? "#ff3b30" : "#86868b" }}>
                        {days > 0 ? `${days}d left` : "Overdue"}
                      </span>
                    )}
                    {g.milestones.length > 0 && (
                      <span style={{ fontSize: 11, color: "#86868b" }}>{doneMilestones}/{g.milestones.length} milestones</span>
                    )}
                  </div>
                </div>
                <span style={{ transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s", color: "#86868b" }}>
                  <Icons.ChevronDown />
                </span>
              </div>

              {isOpen && (
                <div style={{ padding: "0 18px 16px", borderTop: "1px solid #f0f0f0" }}>
                  <div style={{ padding: "14px 0 8px" }}>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "#86868b", marginBottom: 8, display: "block" }}>
                      Progress: {g.progress}%
                    </label>
                    <input type="range" min="0" max="100" value={g.progress}
                      onChange={(e) => updateProgress(g.id, e.target.value)}
                      style={{ width: "100%", accentColor: CATEGORY_COLORS[g.category] }} />
                  </div>
                  {g.milestones.length > 0 && (
                    <div style={{ marginTop: 8 }}>
                      <div style={{ fontSize: 12, fontWeight: 600, color: "#86868b", marginBottom: 8 }}>Milestones</div>
                      {g.milestones.map(m => (
                        <div key={m.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 0" }}>
                          <input type="checkbox" checked={m.done}
                            onChange={() => {
                              setData(d => ({
                                ...d, goals: d.goals.map(gg => gg.id !== g.id ? gg : {
                                  ...gg, milestones: gg.milestones.map(mm => mm.id === m.id ? { ...mm, done: !mm.done } : mm)
                                })
                              }));
                            }}
                            style={{ accentColor: CATEGORY_COLORS[g.category], width: 18, height: 18 }} />
                          <span style={{ flex: 1, fontSize: 14, color: m.done ? "#86868b" : "#1d1d1f",
                            textDecoration: m.done ? "line-through" : "none" }}>{m.text}</span>
                          <span style={{ fontSize: 11, color: "#86868b" }}>{fmtDate(m.target)}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <div style={{ marginTop: 12, display: "flex", justifyContent: "flex-end" }}>
                    <button onClick={() => removeGoal(g.id)}
                      style={{ background: "none", border: "none", color: "#ff3b30", fontSize: 13, cursor: "pointer",
                        display: "flex", alignItems: "center", gap: 4, fontFamily: "'DM Sans'" }}>
                      <Icons.Trash /> Remove
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Add Goal Modal */}
      <Modal open={showAdd} onClose={() => setShowAdd(false)} title="New Goal">
        <Input label="TITLE" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} placeholder="Goal title" />
        <Select label="CATEGORY" value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
          options={[{ value: "career", label: "Career" }, { value: "certification", label: "資格" }, { value: "skill", label: "Skill" }]} />
        <Input label="DEADLINE" type="date" value={form.deadline} onChange={e => setForm(f => ({ ...f, deadline: e.target.value }))} />
        <Input label="INITIAL PROGRESS (%)" type="number" min="0" max="100" value={form.progress}
          onChange={e => setForm(f => ({ ...f, progress: e.target.value }))} />
        <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
          <Btn variant="secondary" onClick={() => setShowAdd(false)} style={{ flex: 1 }}>Cancel</Btn>
          <Btn onClick={addGoal} style={{ flex: 1 }}>Add Goal</Btn>
        </div>
      </Modal>
    </div>
  );
};

// ────────────────────────────────────────────────
// TAB 2: MILESTONES (Timeline view)
// ────────────────────────────────────────────────
const MilestonesTab = ({ data, setData }) => {
  const allMilestones = data.goals.flatMap(g =>
    g.milestones.map(m => ({ ...m, goalTitle: g.title, goalId: g.id, color: CATEGORY_COLORS[g.category] }))
  ).sort((a, b) => new Date(a.target) - new Date(b.target));

  const [showAdd, setShowAdd] = useState(false);
  const [addForm, setAddForm] = useState({ goalId: data.goals[0]?.id || "", text: "", target: "" });

  const toggleMilestone = (goalId, mId) => {
    setData(d => ({
      ...d, goals: d.goals.map(g => g.id !== goalId ? g : {
        ...g, milestones: g.milestones.map(m => m.id === mId ? { ...m, done: !m.done } : m)
      })
    }));
  };

  const addMilestone = () => {
    if (!addForm.text || !addForm.goalId) return;
    const m = { id: uid(), text: addForm.text, target: addForm.target, done: false };
    setData(d => ({
      ...d, goals: d.goals.map(g => g.id === addForm.goalId ? { ...g, milestones: [...g.milestones, m] } : g)
    }));
    setShowAdd(false);
    setAddForm({ goalId: data.goals[0]?.id || "", text: "", target: "" });
  };

  const upcoming = allMilestones.filter(m => !m.done);
  const completed = allMilestones.filter(m => m.done);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div>
          <h2 style={{ fontSize: 28, fontWeight: 800, margin: 0, color: "#1d1d1f", letterSpacing: -0.5 }}>Milestones</h2>
          <p style={{ fontSize: 13, color: "#86868b", margin: "4px 0 0" }}>
            {completed.length}/{allMilestones.length} completed
          </p>
        </div>
        <button onClick={() => setShowAdd(true)}
          style={{ width: 40, height: 40, borderRadius: 20, background: "#1d1d1f", color: "#fff",
            border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <Icons.Plus />
        </button>
      </div>

      {/* Progress overview */}
      <div style={{ background: "#f5f5f7", borderRadius: 16, padding: 18, marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#1d1d1f" }}>Overall Progress</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#1d1d1f" }}>
            {allMilestones.length ? Math.round((completed.length / allMilestones.length) * 100) : 0}%
          </span>
        </div>
        <ProgressBar pct={allMilestones.length ? (completed.length / allMilestones.length) * 100 : 0} />
      </div>

      {/* Upcoming */}
      {upcoming.length > 0 && (
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#86868b", letterSpacing: 0.5, textTransform: "uppercase", marginBottom: 12 }}>
            Upcoming
          </div>
          {upcoming.map((m, i) => {
            const days = daysUntil(m.target);
            return (
              <div key={m.id} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 2 }}>
                {/* Timeline line */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 20, flexShrink: 0 }}>
                  <div style={{ width: 10, height: 10, borderRadius: 5, background: m.color, border: "2px solid #fff",
                    boxShadow: `0 0 0 2px ${m.color}30`, flexShrink: 0 }} />
                  {i < upcoming.length - 1 && <div style={{ width: 1, flex: 1, background: "#e5e5ea", minHeight: 40 }} />}
                </div>
                <div style={{ flex: 1, paddingBottom: 16 }}>
                  <div onClick={() => toggleMilestone(m.goalId, m.id)}
                    style={{ fontSize: 14, fontWeight: 600, color: "#1d1d1f", cursor: "pointer", marginBottom: 2 }}>
                    {m.text}
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <span style={{ fontSize: 11, color: "#86868b" }}>{m.goalTitle}</span>
                    {days !== null && (
                      <span style={{ fontSize: 11, color: days < 14 ? "#ff3b30" : days < 60 ? "#ff9500" : "#34c759",
                        fontWeight: 600 }}>
                        {days > 0 ? `${days}d` : "Overdue"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Completed */}
      {completed.length > 0 && (
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#86868b", letterSpacing: 0.5, textTransform: "uppercase", marginBottom: 12 }}>
            Completed
          </div>
          {completed.map(m => (
            <div key={m.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0",
              borderBottom: "1px solid #f5f5f7" }}>
              <div style={{ width: 20, height: 20, borderRadius: 10, background: "#34c759", display: "flex",
                alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <span style={{ fontSize: 14, color: "#86868b", textDecoration: "line-through", flex: 1,
                cursor: "pointer" }} onClick={() => toggleMilestone(m.goalId, m.id)}>{m.text}</span>
            </div>
          ))}
        </div>
      )}

      <Modal open={showAdd} onClose={() => setShowAdd(false)} title="New Milestone">
        <Select label="GOAL" value={addForm.goalId} onChange={e => setAddForm(f => ({ ...f, goalId: e.target.value }))}
          options={data.goals.map(g => ({ value: g.id, label: g.title }))} />
        <Input label="MILESTONE" value={addForm.text} onChange={e => setAddForm(f => ({ ...f, text: e.target.value }))}
          placeholder="What to achieve" />
        <Input label="TARGET DATE" type="date" value={addForm.target}
          onChange={e => setAddForm(f => ({ ...f, target: e.target.value }))} />
        <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
          <Btn variant="secondary" onClick={() => setShowAdd(false)} style={{ flex: 1 }}>Cancel</Btn>
          <Btn onClick={addMilestone} style={{ flex: 1 }}>Add</Btn>
        </div>
      </Modal>
    </div>
  );
};

// ────────────────────────────────────────────────
// TAB 3: CHECK-IN
// ────────────────────────────────────────────────
const CheckinTab = ({ data, setData }) => {
  const [mood, setMood] = useState(3);
  const [wins, setWins] = useState("");
  const [blockers, setBlockers] = useState("");
  const [focus, setFocus] = useState("");
  const todayStr = today();
  const todayCheckin = data.checkins.find(c => c.date === todayStr);

  const submitCheckin = () => {
    const entry = { id: uid(), date: todayStr, mood, wins, blockers, focus };
    setData(d => ({
      ...d,
      checkins: [entry, ...d.checkins.filter(c => c.date !== todayStr)]
    }));
    setWins(""); setBlockers(""); setFocus("");
  };

  const moods = ["😫", "😔", "😐", "😊", "🔥"];
  const streak = (() => {
    let count = 0;
    const d = new Date();
    for (let i = 0; i < 60; i++) {
      const ds = d.toISOString().slice(0, 10);
      if (data.checkins.find(c => c.date === ds)) { count++; d.setDate(d.getDate() - 1); }
      else if (i === 0) { d.setDate(d.getDate() - 1); continue; }
      else break;
    }
    return count;
  })();

  return (
    <div>
      <h2 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 4px", color: "#1d1d1f", letterSpacing: -0.5 }}>Check-in</h2>
      <p style={{ fontSize: 13, color: "#86868b", margin: "0 0 20px" }}>
        {todayCheckin ? "✅ Done today" : "How's today going?"} · {streak} day streak
      </p>

      {/* Mood heatmap (last 14 days) */}
      <div style={{ background: "#f5f5f7", borderRadius: 16, padding: 16, marginBottom: 20 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: "#86868b", marginBottom: 10 }}>Last 14 Days</div>
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
          {Array.from({ length: 14 }).map((_, i) => {
            const d = new Date(); d.setDate(d.getDate() - (13 - i));
            const ds = d.toISOString().slice(0, 10);
            const c = data.checkins.find(cc => cc.date === ds);
            const colors = ["#ff3b30", "#ff9500", "#d1d1d6", "#34c759", "#007aff"];
            return (
              <div key={i} style={{ width: 28, height: 28, borderRadius: 8,
                background: c ? colors[c.mood - 1] + "40" : "#e5e5ea",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14 }} title={ds}>
                {c ? moods[c.mood - 1] : ""}
              </div>
            );
          })}
        </div>
      </div>

      {!todayCheckin ? (
        <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e5e5ea", padding: 20 }}>
          {/* Mood */}
          <div style={{ marginBottom: 20 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: "#86868b", display: "block", marginBottom: 10, letterSpacing: 0.3 }}>
              MOOD
            </label>
            <div style={{ display: "flex", gap: 8 }}>
              {moods.map((emoji, i) => (
                <button key={i} onClick={() => setMood(i + 1)}
                  style={{ width: 44, height: 44, borderRadius: 12, border: mood === i + 1 ? "2px solid #1d1d1f" : "1px solid #e5e5ea",
                    background: mood === i + 1 ? "#f5f5f7" : "#fff", fontSize: 22, cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.15s" }}>
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          <TextArea label="WINS" value={wins} onChange={e => setWins(e.target.value)} placeholder="What went well today?" />
          <TextArea label="BLOCKERS" value={blockers} onChange={e => setBlockers(e.target.value)} placeholder="Any obstacles?" />
          <Input label="TOMORROW'S FOCUS" value={focus} onChange={e => setFocus(e.target.value)} placeholder="Top priority for tomorrow" />

          <Btn onClick={submitCheckin} style={{ width: "100%", marginTop: 8 }}>Submit Check-in</Btn>
        </div>
      ) : (
        <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e5e5ea", padding: 20 }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>{moods[todayCheckin.mood - 1]}</div>
          {todayCheckin.wins && <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#86868b", marginBottom: 4 }}>WINS</div>
            <div style={{ fontSize: 14, color: "#1d1d1f", lineHeight: 1.5 }}>{todayCheckin.wins}</div>
          </div>}
          {todayCheckin.blockers && <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#86868b", marginBottom: 4 }}>BLOCKERS</div>
            <div style={{ fontSize: 14, color: "#1d1d1f", lineHeight: 1.5 }}>{todayCheckin.blockers}</div>
          </div>}
          {todayCheckin.focus && <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#86868b", marginBottom: 4 }}>TOMORROW'S FOCUS</div>
            <div style={{ fontSize: 14, color: "#1d1d1f", lineHeight: 1.5 }}>{todayCheckin.focus}</div>
          </div>}
        </div>
      )}

      {/* History */}
      {data.checkins.filter(c => c.date !== todayStr).length > 0 && (
        <div style={{ marginTop: 24 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#86868b", letterSpacing: 0.5, textTransform: "uppercase", marginBottom: 12 }}>History</div>
          {data.checkins.filter(c => c.date !== todayStr).slice(0, 7).map(c => (
            <div key={c.id} style={{ padding: "12px 0", borderBottom: "1px solid #f5f5f7", display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontSize: 22 }}>{moods[c.mood - 1]}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#1d1d1f", marginBottom: 2 }}>{c.date}</div>
                {c.wins && <div style={{ fontSize: 12, color: "#86868b", marginBottom: 1 }}>✓ {c.wins}</div>}
                {c.focus && <div style={{ fontSize: 12, color: "#0071e3" }}>→ {c.focus}</div>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ────────────────────────────────────────────────
// TAB 4: JOURNAL
// ────────────────────────────────────────────────
const JournalTab = ({ data, setData }) => {
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ title: "", body: "", type: "reflection" });

  const addEntry = () => {
    if (!form.body) return;
    const entry = { id: uid(), date: today(), ...form };
    setData(d => ({ ...d, journals: [entry, ...d.journals] }));
    setShowAdd(false);
    setForm({ title: "", body: "", type: "reflection" });
  };

  const removeEntry = (id) => setData(d => ({ ...d, journals: d.journals.filter(j => j.id !== id) }));

  const typeLabels = { reflection: "Reflection", lesson: "Lesson", idea: "Idea", frustration: "Frustration" };
  const typeColors = { reflection: "#0071e3", lesson: "#34c759", idea: "#ff9500", frustration: "#ff3b30" };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div>
          <h2 style={{ fontSize: 28, fontWeight: 800, margin: 0, color: "#1d1d1f", letterSpacing: -0.5 }}>Journal</h2>
          <p style={{ fontSize: 13, color: "#86868b", margin: "4px 0 0" }}>{data.journals.length} entries</p>
        </div>
        <button onClick={() => setShowAdd(true)}
          style={{ width: 40, height: 40, borderRadius: 20, background: "#1d1d1f", color: "#fff",
            border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <Icons.Plus />
        </button>
      </div>

      {/* Prompt Card */}
      {!showAdd && data.journals.length === 0 && (
        <div style={{ background: "#f5f5f7", borderRadius: 16, padding: 24, textAlign: "center" }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>📝</div>
          <div style={{ fontSize: 15, fontWeight: 600, color: "#1d1d1f", marginBottom: 4 }}>Start reflecting</div>
          <div style={{ fontSize: 13, color: "#86868b" }}>Record lessons, ideas, and growth moments</div>
        </div>
      )}

      {/* Entries */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {data.journals.map(j => (
          <div key={j.id} style={{ background: "#fff", borderRadius: 16, border: "1px solid #e5e5ea",
            padding: "16px 18px", borderLeft: `3px solid ${typeColors[j.type]}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: typeColors[j.type],
                  background: `${typeColors[j.type]}12`, padding: "2px 8px", borderRadius: 6 }}>
                  {typeLabels[j.type]}
                </span>
                <span style={{ fontSize: 12, color: "#86868b" }}>{j.date}</span>
              </div>
              <button onClick={() => removeEntry(j.id)}
                style={{ background: "none", border: "none", color: "#d1d1d6", cursor: "pointer", padding: 4 }}>
                <Icons.Trash />
              </button>
            </div>
            {j.title && <div style={{ fontSize: 15, fontWeight: 700, color: "#1d1d1f", marginBottom: 4 }}>{j.title}</div>}
            <div style={{ fontSize: 14, color: "#3a3a3c", lineHeight: 1.6, whiteSpace: "pre-wrap" }}>{j.body}</div>
          </div>
        ))}
      </div>

      <Modal open={showAdd} onClose={() => setShowAdd(false)} title="New Entry">
        <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
          {Object.entries(typeLabels).map(([key, label]) => (
            <button key={key} onClick={() => setForm(f => ({ ...f, type: key }))}
              style={{ padding: "6px 12px", borderRadius: 10, border: form.type === key ? "none" : "1px solid #e5e5ea",
                background: form.type === key ? typeColors[key] : "#fff",
                color: form.type === key ? "#fff" : "#1d1d1f",
                fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans'" }}>
              {label}
            </button>
          ))}
        </div>
        <Input label="TITLE (optional)" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} placeholder="Entry title" />
        <TextArea label="BODY" value={form.body} onChange={e => setForm(f => ({ ...f, body: e.target.value }))} placeholder="Write your thoughts..." />
        <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
          <Btn variant="secondary" onClick={() => setShowAdd(false)} style={{ flex: 1 }}>Cancel</Btn>
          <Btn onClick={addEntry} style={{ flex: 1 }}>Save</Btn>
        </div>
      </Modal>
    </div>
  );
};

// ────────────────────────────────────────────────
// TAB 5: SKILLS (Mind Map + Mandala)
// ────────────────────────────────────────────────
const BRANCH_COLORS = ["#1d1d1f", "#0071e3", "#34c759", "#ff9500", "#ff3b30", "#af52de", "#5ac8fa", "#ff2d55"];

const MindMapView = ({ data, setData }) => {
  const { containerRef, handlers, style: zoomStyle, scale, reset } = usePinchZoom(0.25, 3);
  const [editNode, setEditNode] = useState(null);
  const [editText, setEditText] = useState("");
  const [showAddBranch, setShowAddBranch] = useState(false);
  const [newBranchLabel, setNewBranchLabel] = useState("");
  const [addChildTo, setAddChildTo] = useState(null); // { path }
  const [newChildLabel, setNewChildLabel] = useState("");
  const [editCenter, setEditCenter] = useState(false);
  const [centerText, setCenterText] = useState("");
  const [collapsed, setCollapsed] = useState({});

  const sm = data.skillMap;
  const branches = sm.branches;

  const toggleCollapse = (id) => setCollapsed(c => ({ ...c, [id]: !c[id] }));

  // Deep helpers to update nested tree
  const updateNodeInTree = (nodes, nodeId, updater) =>
    nodes.map(n => {
      if (n.id === nodeId) return updater(n);
      if (n.children?.length) return { ...n, children: updateNodeInTree(n.children, nodeId, updater) };
      return n;
    });

  const removeNodeFromTree = (nodes, nodeId) =>
    nodes.filter(n => n.id !== nodeId).map(n =>
      n.children?.length ? { ...n, children: removeNodeFromTree(n.children, nodeId) } : n
    );

  const addChildToNode = (nodes, parentId, child) =>
    nodes.map(n => {
      if (n.id === parentId) return { ...n, children: [...(n.children || []), child] };
      if (n.children?.length) return { ...n, children: addChildToNode(n.children, parentId, child) };
      return n;
    });

  const startEdit = (nodeId, label) => { setEditNode(nodeId); setEditText(label); };

  const saveEdit = () => {
    if (!editNode || !editText.trim()) { setEditNode(null); return; }
    setData(d => ({
      ...d, skillMap: { ...d.skillMap, branches: updateNodeInTree(d.skillMap.branches, editNode, n => ({ ...n, label: editText.trim() })) }
    }));
    setEditNode(null);
  };

  const removeNode = (nodeId) => {
    setData(d => ({ ...d, skillMap: { ...d.skillMap, branches: removeNodeFromTree(d.skillMap.branches, nodeId) } }));
    setEditNode(null);
  };

  const addBranch = () => {
    if (!newBranchLabel.trim()) return;
    const b = { id: uid(), label: newBranchLabel.trim(), children: [] };
    setData(d => ({ ...d, skillMap: { ...d.skillMap, branches: [...d.skillMap.branches, b] } }));
    setNewBranchLabel(""); setShowAddBranch(false);
  };

  const addChild = () => {
    if (!newChildLabel.trim() || !addChildTo) return;
    const c = { id: uid(), label: newChildLabel.trim(), children: [] };
    setData(d => ({
      ...d, skillMap: { ...d.skillMap, branches: addChildToNode(d.skillMap.branches, addChildTo, c) }
    }));
    setNewChildLabel(""); setAddChildTo(null);
  };

  const saveCenterEdit = () => {
    if (!centerText.trim()) { setEditCenter(false); return; }
    setData(d => ({ ...d, skillMap: { ...d.skillMap, center: centerText.trim() } }));
    setEditCenter(false);
  };

  // ─── Recursive layout calculation ───
  // Each node gets a Y span based on its visible descendants
  const getNodeHeight = (node, depth) => {
    if (collapsed[node.id] || !node.children?.length) return 36;
    const childrenH = node.children.reduce((sum, c) => sum + getNodeHeight(c, depth + 1), 0);
    const gaps = (node.children.length - 1) * 6;
    return Math.max(36, childrenH + gaps);
  };

  const centerX = 140;
  const branchTotalH = branches.reduce((sum, b) => sum + getNodeHeight(b, 0), 0) + (branches.length - 1) * 14;
  const totalHeight = Math.max(500, branchTotalH + 100);
  const centerY = totalHeight / 2;

  // Collect all positioned nodes for rendering
  const elements = [];
  let currentY = centerY - branchTotalH / 2;

  const renderNode = (node, depth, parentX, parentY, color, startY) => {
    const nodeH = getNodeHeight(node, depth);
    const ny = startY + nodeH / 2;
    const nx = centerX + 180 + depth * 160;
    const nodeW = depth === 0 ? 120 : 100;
    const nodeHt = depth === 0 ? 32 : 28;
    const hasChildren = node.children?.length > 0;
    const isCollapsed = collapsed[node.id];

    // Bezier from parent
    if (parentX != null) {
      const px2 = parentX + (depth === 1 ? 60 : 50);
      elements.push(
        <path key={`line-${node.id}`}
          d={`M${px2},${parentY} C${px2 + 40},${parentY} ${nx - nodeW/2 - 20},${ny} ${nx - nodeW/2},${ny}`}
          fill="none" stroke={color} strokeWidth={depth === 0 ? 2 : 1.5} opacity={0.35} />
      );
    }

    // Node rect
    const fillBg = depth === 0 ? `${color}14` : "#fff";
    const strokeC = depth === 0 ? color : "#e5e5ea";
    elements.push(
      <g key={`node-${node.id}`} style={{ cursor: "pointer" }}
        onClick={(e) => { e.stopPropagation(); startEdit(node.id, node.label); }}>
        <rect x={nx - nodeW/2} y={ny - nodeHt/2} width={nodeW} height={nodeHt} rx={depth === 0 ? 10 : 8}
          fill={fillBg} stroke={strokeC} strokeWidth={depth === 0 ? 1.5 : 1} />
        <text x={nx} y={ny + 1} textAnchor="middle" dominantBaseline="central"
          fill={depth === 0 ? color : "#3a3a3c"} fontSize={depth === 0 ? 10 : 9}
          fontWeight={depth === 0 ? 600 : 500} fontFamily="'DM Sans'">
          {node.label.length > 14 ? node.label.slice(0, 13) + "…" : node.label}
        </text>
      </g>
    );

    // Collapse/expand toggle
    if (hasChildren) {
      const tx = nx + nodeW/2 + 10;
      elements.push(
        <g key={`toggle-${node.id}`} onClick={(e) => { e.stopPropagation(); toggleCollapse(node.id); }}
          style={{ cursor: "pointer" }}>
          <circle cx={tx} cy={ny - 8} r={7} fill={isCollapsed ? color : "#f0f0f0"} stroke={isCollapsed ? color : "#d1d1d6"} strokeWidth={1} />
          <text x={tx} y={ny - 7} textAnchor="middle" dominantBaseline="central"
            fontSize={9} fill={isCollapsed ? "#fff" : "#86868b"} fontWeight={600}>
            {isCollapsed ? node.children.length : "−"}
          </text>
        </g>
      );
    }

    // Add child button
    const addX = nx + nodeW/2 + (hasChildren ? 24 : 10);
    elements.push(
      <g key={`add-${node.id}`} onClick={(e) => { e.stopPropagation(); setAddChildTo(node.id); setNewChildLabel(""); }}
        style={{ cursor: "pointer" }}>
        <circle cx={addX} cy={ny + (hasChildren ? -8 : 0)} r={7} fill="#f0f0f0" stroke="#d1d1d6" strokeWidth={1} />
        <text x={addX} y={ny + (hasChildren ? -7 : 1)} textAnchor="middle" dominantBaseline="central"
          fontSize={10} fill="#86868b" fontWeight={600}>+</text>
      </g>
    );

    // Recurse children
    if (hasChildren && !isCollapsed) {
      let childStartY = startY;
      node.children.forEach(child => {
        const ch = getNodeHeight(child, depth + 1);
        renderNode(child, depth + 1, nx, ny, color, childStartY);
        childStartY += ch + 6;
      });
    }
  };

  branches.forEach((branch, bi) => {
    const bh = getNodeHeight(branch, 0);
    const color = BRANCH_COLORS[bi % BRANCH_COLORS.length];

    // Line from center to branch
    const by = currentY + bh / 2;
    elements.push(
      <path key={`center-line-${branch.id}`}
        d={`M${centerX + 70},${centerY} C${centerX + 120},${centerY} ${centerX + 130},${by} ${centerX + 180 - 60},${by}`}
        fill="none" stroke={color} strokeWidth={2} opacity={0.4} />
    );

    renderNode(branch, 0, null, null, color, currentY);
    currentY += bh + 14;
  });

  // Calculate total width from deepest node
  const getMaxDepth = (node, d) => {
    if (collapsed[node.id] || !node.children?.length) return d;
    return Math.max(...node.children.map(c => getMaxDepth(c, d + 1)));
  };
  const maxDepth = branches.length ? Math.max(...branches.map(b => getMaxDepth(b, 0))) : 0;
  const totalWidth = Math.max(600, centerX + 180 + (maxDepth + 1) * 160 + 80);

  return (
    <div>
      <div ref={containerRef} {...handlers}
        style={{ overflow: "hidden", borderRadius: 16, border: "1px solid #e5e5ea",
          background: "#fafafa", height: 420, position: "relative", touchAction: "none" }}>
        <svg width={totalWidth} height={totalHeight} style={{ display: "block", ...zoomStyle }}>
          {/* Center node */}
          <g onClick={() => { setEditCenter(true); setCenterText(sm.center); }} style={{ cursor: "pointer" }}>
            <rect x={centerX - 70} y={centerY - 22} width={140} height={44} rx={12} fill="#1d1d1f" />
            <text x={centerX} y={centerY + 1} textAnchor="middle" dominantBaseline="central"
              fill="#fff" fontSize={11} fontWeight={700} fontFamily="'DM Sans'">{sm.center}</text>
          </g>
          {elements}
        </svg>
      </div>

      {/* Add branch + zoom controls */}
      <div style={{ marginTop: 12, display: "flex", justifyContent: "center", gap: 8 }}>
        <button onClick={() => setShowAddBranch(true)}
          style={{ padding: "8px 16px", borderRadius: 10, border: "1px solid #e5e5ea",
            background: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer",
            fontFamily: "'DM Sans'", color: "#1d1d1f", display: "flex", alignItems: "center", gap: 6 }}>
          <Icons.Plus /> Add Branch
        </button>
        <button onClick={reset}
          style={{ padding: "8px 14px", borderRadius: 10, border: "1px solid #e5e5ea",
            background: "#fff", fontSize: 12, fontWeight: 600, cursor: "pointer",
            fontFamily: "'DM Sans'", color: "#86868b" }}>
          Reset Zoom
        </button>
      </div>

      {/* Edit center modal */}
      <Modal open={editCenter} onClose={() => setEditCenter(false)} title="Edit Center Theme">
        <Input label="CENTER THEME" value={centerText} onChange={e => setCenterText(e.target.value)} />
        <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
          <Btn variant="secondary" onClick={() => setEditCenter(false)} style={{ flex: 1 }}>Cancel</Btn>
          <Btn onClick={saveCenterEdit} style={{ flex: 1 }}>Save</Btn>
        </div>
      </Modal>

      {/* Edit node modal */}
      <Modal open={!!editNode} onClose={() => setEditNode(null)} title="Edit Node">
        <Input label="LABEL" value={editText} onChange={e => setEditText(e.target.value)} />
        <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
          <Btn variant="secondary" onClick={() => removeNode(editNode)}
            style={{ flex: 1, background: "#fff0f0", color: "#ff3b30" }}>Delete</Btn>
          <Btn onClick={saveEdit} style={{ flex: 1 }}>Save</Btn>
        </div>
      </Modal>

      {/* Add branch modal */}
      <Modal open={showAddBranch} onClose={() => setShowAddBranch(false)} title="New Branch">
        <Input label="BRANCH NAME" value={newBranchLabel} onChange={e => setNewBranchLabel(e.target.value)}
          placeholder="e.g. Leadership" />
        <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
          <Btn variant="secondary" onClick={() => setShowAddBranch(false)} style={{ flex: 1 }}>Cancel</Btn>
          <Btn onClick={addBranch} style={{ flex: 1 }}>Add</Btn>
        </div>
      </Modal>

      {/* Add child modal */}
      <Modal open={!!addChildTo} onClose={() => setAddChildTo(null)} title="New Sub-node">
        <Input label="NAME" value={newChildLabel} onChange={e => setNewChildLabel(e.target.value)}
          placeholder="e.g. blpapi" />
        <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
          <Btn variant="secondary" onClick={() => setAddChildTo(null)} style={{ flex: 1 }}>Cancel</Btn>
          <Btn onClick={addChild} style={{ flex: 1 }}>Add</Btn>
        </div>
      </Modal>
    </div>
  );
};

const MandalaView = ({ data, setData }) => {
  const { containerRef, handlers, style: zoomStyle, scale, reset } = usePinchZoom(0.2, 2.5);
  const [editCell, setEditCell] = useState(null);
  const [editText, setEditText] = useState("");
  const [editCenter, setEditCenter] = useState(false);
  const [centerText, setCenterText] = useState("");

  const sm = data.skillMap;
  const branches = sm.branches.slice(0, 8);
  while (branches.length < 8) branches.push({ id: uid(), label: "", children: [] });

  // 3x3 grid positions for surrounding cells (clockwise from top-left)
  const positions = [
    [0, 0], [1, 0], [2, 0],
    [0, 1],         [2, 1],
    [0, 2], [1, 2], [2, 2],
  ];

  const saveCellEdit = () => {
    if (!editCell) return;
    const { branchIdx, childIdx } = editCell;
    if (childIdx === null) {
      // Editing branch label
      setData(d => {
        const newBranches = [...d.skillMap.branches];
        if (newBranches[branchIdx]) {
          newBranches[branchIdx] = { ...newBranches[branchIdx], label: editText.trim() };
        } else {
          while (newBranches.length <= branchIdx) newBranches.push({ id: uid(), label: "", children: [] });
          newBranches[branchIdx] = { ...newBranches[branchIdx], label: editText.trim() };
        }
        return { ...d, skillMap: { ...d.skillMap, branches: newBranches } };
      });
    } else {
      // Editing child
      setData(d => {
        const newBranches = [...d.skillMap.branches];
        const b = { ...newBranches[branchIdx] };
        const newChildren = [...b.children];
        if (newChildren[childIdx]) {
          newChildren[childIdx] = { ...newChildren[childIdx], label: editText.trim() };
        } else {
          while (newChildren.length <= childIdx) newChildren.push({ id: uid(), label: "" });
          newChildren[childIdx] = { ...newChildren[childIdx], label: editText.trim() };
        }
        b.children = newChildren;
        newBranches[branchIdx] = b;
        return { ...d, skillMap: { ...d.skillMap, branches: newBranches } };
      });
    }
    setEditCell(null);
  };

  const saveCenterMandala = () => {
    if (!centerText.trim()) { setEditCenter(false); return; }
    setData(d => ({ ...d, skillMap: { ...d.skillMap, center: centerText.trim() } }));
    setEditCenter(false);
  };

  const cellSize = 88;
  const gap = 3;
  const blockSize = cellSize * 3 + gap * 2;
  const blockGap = 6;
  const totalSize = blockSize * 3 + blockGap * 2;

  const renderCell = (text, color, onClick, isCenter) => (
    <div onClick={onClick} style={{
      width: cellSize, height: cellSize, borderRadius: 10,
      background: isCenter ? color : `${color}10`,
      border: isCenter ? "none" : `1px solid ${color}30`,
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: 4, cursor: "pointer", transition: "all 0.15s",
    }}>
      <span style={{
        fontSize: text && text.length > 8 ? 8 : 9, fontWeight: isCenter ? 700 : 500,
        color: isCenter ? "#fff" : "#3a3a3c", textAlign: "center", lineHeight: 1.3,
        wordBreak: "break-word",
      }}>{text || "+"}</span>
    </div>
  );

  const renderBlock = (branchIdx, bx, by) => {
    const branch = branches[branchIdx] || { id: uid(), label: "", children: [] };
    const color = BRANCH_COLORS[branchIdx % BRANCH_COLORS.length];
    const children = [...branch.children];
    while (children.length < 8) children.push({ id: uid(), label: "" });

    return (
      <div key={branchIdx} style={{
        position: "absolute", left: bx, top: by,
        display: "grid", gridTemplateColumns: `repeat(3, ${cellSize}px)`,
        gridTemplateRows: `repeat(3, ${cellSize}px)`, gap: gap,
      }}>
        {positions.map((_, pi) => renderCell(
          children[pi]?.label || "",
          color,
          () => { setEditCell({ branchIdx, childIdx: pi }); setEditText(children[pi]?.label || ""); },
          false
        ))}
        {/* Inject center at grid position [1,1] — we render 9 cells total */}
      </div>
    );
  };

  // The mandala: 3x3 blocks, center block is special
  const blockPositions = [
    [0, 0], [1, 0], [2, 0],
    [0, 1], [1, 1], [2, 1],
    [0, 2], [1, 2], [2, 2],
  ];
  const branchOrder = [0, 1, 2, 3, -1, 4, 5, 6, 7]; // -1 = center

  return (
    <div>
      <div ref={containerRef} {...handlers}
        style={{ overflow: "hidden", borderRadius: 16, border: "1px solid #e5e5ea",
          background: "#fafafa", height: 420, position: "relative", touchAction: "none" }}>
        <div style={{ position: "relative", width: totalSize, height: totalSize, padding: 12, ...zoomStyle }}>
          {blockPositions.map(([bCol, bRow], idx) => {
            const bx = bCol * (blockSize + blockGap);
            const by = bRow * (blockSize + blockGap);
            const branchIdx = branchOrder[idx];

            if (branchIdx === -1) {
              // Center block: 3x3 grid with 8 branch labels + center theme in middle
              return (
                <div key="center-block" style={{
                  position: "absolute", left: bx, top: by,
                  display: "grid", gridTemplateColumns: `repeat(3, ${cellSize}px)`,
                  gridTemplateRows: `repeat(3, ${cellSize}px)`, gap: gap,
                }}>
                  {[0, 1, 2, 3, -1, 4, 5, 6, 7].map((bi2, gi) => {
                    if (bi2 === -1) {
                      // Center cell: main theme
                      return <div key="main-center">{renderCell(sm.center, "#1d1d1f", () => {
                        setEditCenter(true); setCenterText(sm.center);
                      }, true)}</div>;
                    }
                    return <div key={bi2}>{renderCell(
                      branches[bi2]?.label || "",
                      BRANCH_COLORS[bi2 % BRANCH_COLORS.length],
                      () => { setEditCell({ branchIdx: bi2, childIdx: null }); setEditText(branches[bi2]?.label || ""); },
                      false
                    )}</div>;
                  })}
                </div>
              );
            }

            const branch = branches[branchIdx] || { id: uid(), label: "", children: [] };
            const color = BRANCH_COLORS[branchIdx % BRANCH_COLORS.length];
            const children = [...branch.children];
            while (children.length < 8) children.push({ id: uid(), label: "" });

            return (
              <div key={branchIdx} style={{
                position: "absolute", left: bx, top: by,
                display: "grid", gridTemplateColumns: `repeat(3, ${cellSize}px)`,
                gridTemplateRows: `repeat(3, ${cellSize}px)`, gap: gap,
              }}>
                {/* 3x3 grid: 8 children around the edges, branch label in center */}
                {[0, 1, 2, 3, -1, 4, 5, 6, 7].map((ci, gi) => {
                  if (ci === -1) {
                    return <div key="branch-center">{renderCell(branch.label, color, () => {
                      setEditCell({ branchIdx, childIdx: null }); setEditText(branch.label);
                    }, true)}</div>;
                  }
                  return <div key={ci}>{renderCell(
                    children[ci]?.label || "",
                    color,
                    () => { setEditCell({ branchIdx, childIdx: ci }); setEditText(children[ci]?.label || ""); },
                    false
                  )}</div>;
                })}
              </div>
            );
          })}
        </div>
      </div>

      {/* Zoom control */}
      <div style={{ marginTop: 12, display: "flex", justifyContent: "center" }}>
        <button onClick={reset}
          style={{ padding: "8px 14px", borderRadius: 10, border: "1px solid #e5e5ea",
            background: "#fff", fontSize: 12, fontWeight: 600, cursor: "pointer",
            fontFamily: "'DM Sans'", color: "#86868b" }}>
          Reset Zoom
        </button>
      </div>

      {/* Edit cell modal */}
      <Modal open={!!editCell} onClose={() => setEditCell(null)} title={editCell?.childIdx === null ? "Edit Category" : "Edit Skill"}>
        <Input label="LABEL" value={editText} onChange={e => setEditText(e.target.value)} placeholder="Enter text" />
        <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
          <Btn variant="secondary" onClick={() => setEditCell(null)} style={{ flex: 1 }}>Cancel</Btn>
          <Btn onClick={saveCellEdit} style={{ flex: 1 }}>Save</Btn>
        </div>
      </Modal>

      {/* Edit center modal */}
      <Modal open={editCenter} onClose={() => setEditCenter(false)} title="Edit Center Theme">
        <Input label="CENTER THEME" value={centerText} onChange={e => setCenterText(e.target.value)} />
        <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
          <Btn variant="secondary" onClick={() => setEditCenter(false)} style={{ flex: 1 }}>Cancel</Btn>
          <Btn onClick={saveCenterMandala} style={{ flex: 1 }}>Save</Btn>
        </div>
      </Modal>
    </div>
  );
};

const SkillsTab = ({ data, setData }) => {
  const [view, setView] = useState("mindmap");

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <div>
          <h2 style={{ fontSize: 28, fontWeight: 800, margin: 0, color: "#1d1d1f", letterSpacing: -0.5 }}>Skills</h2>
          <p style={{ fontSize: 13, color: "#86868b", margin: "4px 0 0" }}>
            {data.skillMap.branches.length} categories · {data.skillMap.branches.reduce((s, b) => s + b.children.length, 0)} skills
          </p>
        </div>
      </div>

      {/* View toggle */}
      <div style={{ display: "flex", gap: 4, marginBottom: 16, background: "#f5f5f7", borderRadius: 10, padding: 3 }}>
        {[{ key: "mindmap", label: "Mind Map" }, { key: "mandala", label: "Mandala" }].map(v => (
          <button key={v.key} onClick={() => setView(v.key)}
            style={{
              flex: 1, padding: "8px 0", borderRadius: 8, border: "none",
              background: view === v.key ? "#fff" : "transparent",
              color: view === v.key ? "#1d1d1f" : "#86868b",
              fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans'",
              boxShadow: view === v.key ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
              transition: "all 0.2s",
            }}>
            {v.label}
          </button>
        ))}
      </div>

      {view === "mindmap" ? <MindMapView data={data} setData={setData} /> : <MandalaView data={data} setData={setData} />}

      <div style={{ marginTop: 16, padding: 14, background: "#f5f5f7", borderRadius: 12 }}>
        <div style={{ fontSize: 11, color: "#86868b", lineHeight: 1.5 }}>
          💡 Tap node to edit · Pinch to zoom · Drag to pan
        </div>
      </div>
    </div>
  );
};

// ─── Quotes ───
const QUOTES = [
  { text: "The stock market is a device for transferring money from the impatient to the patient.", ja: "株式市場は、忍耐のない者から忍耐のある者へ資金を移す装置である。", author: "Warren Buffett" },
  { text: "In the middle of difficulty lies opportunity.", ja: "困難の中にこそ、機会がある。", author: "Albert Einstein" },
  { text: "The only way to do great work is to love what you do.", ja: "偉大な仕事をする唯一の方法は、自分のやることを愛することだ。", author: "Steve Jobs" },
  { text: "Risk comes from not knowing what you're doing.", ja: "リスクとは、自分が何をしているか分かっていないことから生まれる。", author: "Warren Buffett" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", ja: "木を植える最良の時期は20年前だった。次に良い時期は今だ。", author: "Chinese Proverb" },
  { text: "It is not the strongest that survive, but the most adaptable.", ja: "生き残るのは最も強い者ではなく、最も適応力のある者だ。", author: "Charles Darwin" },
  { text: "Price is what you pay. Value is what you get.", ja: "価格はあなたが払うもの。価値はあなたが得るもの。", author: "Warren Buffett" },
  { text: "Stay hungry, stay foolish.", ja: "ハングリーであれ、愚かであれ。", author: "Steve Jobs" },
  { text: "Knowing is not enough; we must apply.", ja: "知るだけでは十分ではない。実行しなければならない。", author: "Leonardo da Vinci" },
  { text: "The market can stay irrational longer than you can stay solvent.", ja: "市場は、あなたが支払い能力を維持できるよりも長く、非合理でいられる。", author: "John Maynard Keynes" },
  { text: "Simplicity is the ultimate sophistication.", ja: "シンプルさは究極の洗練である。", author: "Leonardo da Vinci" },
  { text: "Someone is sitting in the shade today because someone planted a tree a long time ago.", ja: "今日誰かが木陰で休めるのは、昔誰かが木を植えたからだ。", author: "Warren Buffett" },
  { text: "The impediment to action advances action. What stands in the way becomes the way.", ja: "行動の障害が行動を前進させる。立ちはだかるものが道となる。", author: "Marcus Aurelius" },
  { text: "Compound interest is the eighth wonder of the world.", ja: "複利は世界の第八の不思議である。", author: "Albert Einstein" },
  { text: "Be fearful when others are greedy, and greedy when others are fearful.", ja: "他人が貪欲な時に恐れ、他人が恐れている時に貪欲であれ。", author: "Warren Buffett" },
  { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", ja: "生きる上での最大の栄光は、倒れないことではなく、倒れるたびに立ち上がることにある。", author: "Nelson Mandela" },
  { text: "Opportunities come infrequently. When it rains gold, put out the bucket, not the thimble.", ja: "機会はめったに来ない。金の雨が降ったら、指ぬきではなくバケツを出せ。", author: "Warren Buffett" },
  { text: "First, have a definite, clear practical ideal; a goal, an objective.", ja: "まず、明確で実践的な理想を持て。目標を、目的を。", author: "Aristotle" },
  { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", ja: "人は繰り返し行うことの集大成である。優秀さとは行為ではなく、習慣である。", author: "Aristotle" },
  { text: "The best investment you can make is in yourself.", ja: "最高の投資は、自分自身への投資だ。", author: "Warren Buffett" },
  { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", ja: "道のあるところに行くな。道のないところに行き、足跡を残せ。", author: "Ralph Waldo Emerson" },
  { text: "Wide diversification is only required when investors do not understand what they are doing.", ja: "幅広い分散が必要なのは、投資家が自分のやっていることを理解していない時だけだ。", author: "Warren Buffett" },
  { text: "A journey of a thousand miles begins with a single step.", ja: "千里の道も一歩から。", author: "Lao Tzu" },
  { text: "Discipline is the bridge between goals and accomplishment.", ja: "規律は目標と達成をつなぐ橋である。", author: "Jim Rohn" },
  { text: "The intelligent investor is a realist who sells to optimists and buys from pessimists.", ja: "賢明な投資家は、楽観主義者に売り、悲観主義者から買う現実主義者である。", author: "Benjamin Graham" },
  { text: "It does not matter how slowly you go as long as you do not stop.", ja: "止まりさえしなければ、どんなにゆっくりでも構わない。", author: "Confucius" },
  { text: "You can never cross the ocean until you have the courage to lose sight of the shore.", ja: "岸が見えなくなる勇気がなければ、海を渡ることはできない。", author: "Christopher Columbus" },
  { text: "An investment in knowledge pays the best interest.", ja: "知識への投資は、最高の利息を生む。", author: "Benjamin Franklin" },
  { text: "What we fear doing most is usually what we most need to do.", ja: "最も恐れていることこそ、最もやるべきことである。", author: "Tim Ferriss" },
  { text: "The harder I work, the luckier I get.", ja: "努力すればするほど、運は味方する。", author: "Gary Player" },
];

const QuoteCard = () => {
  const [quote] = useState(() => QUOTES[Math.floor(Math.random() * QUOTES.length)]);
  return (
    <div style={{ margin: "0 20px 8px", padding: "14px 18px", background: "#f5f5f7", borderRadius: 14 }}>
      <div style={{ fontSize: 12, fontWeight: 500, color: "#3a3a3c", lineHeight: 1.55, fontStyle: "italic",
        marginBottom: 4 }}>
        "{quote.text}"
      </div>
      <div style={{ fontSize: 10, fontWeight: 500, color: "#6e6e73", lineHeight: 1.5, marginBottom: 6 }}>
        {quote.ja}
      </div>
      <div style={{ fontSize: 11, fontWeight: 600, color: "#86868b", letterSpacing: 0.3 }}>
        — {quote.author}
      </div>
    </div>
  );
};

// ────────────────────────────────────────────────
// MAIN APP
// ────────────────────────────────────────────────
const TABS = [
  { key: "goals", label: "Goals", Icon: Icons.Goals },
  { key: "milestones", label: "Milestones", Icon: Icons.Milestones },
  { key: "skills", label: "Skills", Icon: Icons.Skills },
  { key: "checkin", label: "Check-in", Icon: Icons.Checkin },
  { key: "journal", label: "Journal", Icon: Icons.Journal },
];

function GoalManager() {
  const [tab, setTab] = useState("goals");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load().then(d => {
      setData(d || defaultData);
      setLoading(false);
    });
  }, []);

  const updateData = useCallback((updater) => {
    setData(prev => {
      const next = typeof updater === "function" ? updater(prev) : updater;
      save(next);
      return next;
    });
  }, []);

  if (loading || !data) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh",
        fontFamily: "'DM Sans', sans-serif", color: "#86868b" }}>
        Loading...
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#fff", minHeight: "100vh",
      maxWidth: 480, margin: "0 auto", position: "relative", paddingBottom: 90 }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800&display=swap');
        @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
        * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
        input[type="range"] { height: 4px; }
        ::-webkit-scrollbar { display: none; }
      `}</style>

      {/* Header */}
      <div style={{ padding: "16px 20px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: "#86868b", letterSpacing: 1, textTransform: "uppercase" }}>
          Goal Manager
        </div>
        <div style={{ fontSize: 13, color: "#86868b", fontWeight: 500 }}>
          {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
        </div>
      </div>

      {/* Quote */}
      <QuoteCard />

      {/* Content */}
      <div style={{ padding: "12px 20px 20px" }}>
        {tab === "goals" && <GoalsTab data={data} setData={updateData} />}
        {tab === "milestones" && <MilestonesTab data={data} setData={updateData} />}
        {tab === "skills" && <SkillsTab data={data} setData={updateData} />}
        {tab === "checkin" && <CheckinTab data={data} setData={updateData} />}
        {tab === "journal" && <JournalTab data={data} setData={updateData} />}
      </div>

      {/* Tab Bar */}
      <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%",
        maxWidth: 480, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(20px)",
        borderTop: "1px solid #e5e5ea", display: "flex", justifyContent: "space-around",
        padding: "8px 0 max(8px, env(safe-area-inset-bottom))", zIndex: 50 }}>
        {TABS.map(({ key, label, Icon }) => {
          const active = tab === key;
          return (
            <button key={key} onClick={() => setTab(key)}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
                background: "none", border: "none", cursor: "pointer", padding: "4px 6px",
                color: active ? "#1d1d1f" : "#86868b", transition: "color 0.2s",
                fontFamily: "'DM Sans'" }}>
              <Icon />
              <span style={{ fontSize: 10, fontWeight: active ? 700 : 500, letterSpacing: 0.2 }}>{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
