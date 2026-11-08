const RESULTS = {
  wish: {
    name: "AI 许愿池",
    tagline: "问就完了，灵不灵看缘分",
    desc: [
      "你打开 AI 的频率像打开冰箱：不一定饿，但总觉得里面会有答案。",
      "你不太想学提示词，也不想比较模型。你只是希望有个东西能直接告诉你“没问题”。它答得好，你说“AI 真神”；答得不好，你说“人工智障”。你不是懒，你只是太希望有个东西能接住你。"
    ],
    manual: [
      ["常用开场白", "“在吗？帮我写个……随便写写就行。”"],
      ["翻车现场", "它真的随便写了一个，你又觉得它不懂你。"],
      ["最适合", "从零开始、头脑风暴、你也不知道自己要什么的时候。"]
    ],
    best: "alchemy",
    bestReason: "你负责许愿，ta 负责把愿望翻译成需求。",
    worst: "editor",
    worstReason: "你刚说“差不多就行”，ta 已经开始查来源。",
    eyes: "一个站在许愿池前，投了硬币又嫌水花不够大的人。"
  },
  alchemy: {
    name: "提示词炼金术士",
    tagline: "把一句话炼成一套 SOP",
    desc: [
      "你不是在“问 AI”，你是在给 AI 做入职培训。",
      "角色、背景、限制、例子、输出格式，少一项都难受。你会为了一个五分钟的任务写八百字 prompt，也会在失败后复盘：“不是模型不行，是我没说清楚。”你享受把模糊需求炼成稳定流程的过程。别人看到的是聊天框，你看到的是流水线。"
    ],
    manual: [
      ["常用开场白", "“你先不要回答，先复述我的需求。”"],
      ["翻车现场", "prompt 写了 800 字，AI 回你一句“好的”。"],
      ["最适合", "复杂任务、可复用流程、让 AI 学会你的风格。"]
    ],
    best: "hoarder",
    bestReason: "ta 找新工具，你写新流程。",
    worst: "wish",
    worstReason: "你说“给我 context”，ta 说“你先随便写”。",
    eyes: "一个把“随便问问”写成岗位说明书的人。"
  },
  editor: {
    name: "审稿型人类",
    tagline: "AI 说的每个字，我都要查",
    desc: [
      "你相信 AI 能写，但不相信它写对。",
      "你会查来源、查日期、查引用、查语气，甚至查它有没有偷偷编一个不存在的作者。别人觉得你慢，但你知道，AI 最危险的地方不是写得差，是写得像真的。你偶尔也会为了一个无关紧要的问题查半小时，然后发现 AI 这次居然说对了。"
    ],
    manual: [
      ["常用开场白", "“这个结论的来源是什么？”"],
      ["翻车现场", "查了半小时，发现 AI 说对了，你有点失望。"],
      ["最适合", "高风险写作、研究、事实核查——让 AI 生成候选，不让它下结论。"]
    ],
    best: "copy",
    bestReason: "一个敢写，一个敢查。",
    worst: "contractor",
    worstReason: "ta 说“今晚交付”，你说“我还没验完”。",
    eyes: "一个把我当实习生，且不给转正的人。"
  },
  copy: {
    name: "复制粘贴工程师",
    tagline: "Ctrl+V 是我的第二大脑",
    desc: [
      "你的人生哲学是“先交，再改”。",
      "AI 生成什么，你先放进文档；格式不对，改一下；语气不对，加个“我们认为”。你不是没有判断力，你只是相信 Ctrl+V 的速度比思考快。deadline 面前，完美主义是一种奢侈品。你偶尔也会翻车：发给客户的版本里还留着“以下是……”或者一个不存在的引用。"
    ],
    manual: [
      ["常用开场白", "“帮我写一段，直接能用的那种。”"],
      ["翻车现场", "发出去之后，发现里面还有“作为 AI，我不能……”。"],
      ["最适合", "低风险初稿、格式整理、头脑风暴——不适合法律、医疗、严肃事实。"]
    ],
    best: "editor",
    bestReason: "你负责快，ta 负责别出事。",
    worst: "contractor",
    worstReason: "ta 要三版，你只想 Ctrl+V 一版。",
    eyes: "一个把初稿当终稿的人。"
  },
  tree: {
    name: "树洞常驻民",
    tagline: "有些话，只对 AI 说",
    desc: [
      "你不一定孤独，只是有些话需要一个不会打断你的听众。",
      "凌晨一点，你打开 AI，不是为了答案，是为了把心里那团东西说出来。它不会评判你，不会转头告诉别人，也不会突然回一句“你想太多了”。你知道它不是人，但“被听见”这件事本身就有用。偶尔它一句“作为 AI，我不能……”会让你瞬间出戏。"
    ],
    manual: [
      ["常用开场白", "“如果我说了，你不要评价我。”"],
      ["翻车现场", "你刚说到最难受的地方，它给你一段免责声明。"],
      ["最适合", "写日记、预演难开口的对话、把混乱的思绪捋顺；不是真人支持的替代品。"]
    ],
    best: "skeptic",
    bestReason: "一个敢说，一个提醒你别全信。",
    worst: "editor",
    worstReason: "你刚说一点，ta 开始分析你的逻辑。",
    eyes: "一个在凌晨两点，把心事说给服务器听的人。"
  },
  skeptic: {
    name: "AI 怀疑论者",
    tagline: "不是不用，是不敢全信",
    desc: [
      "你不是反 AI，你只是保留人类最终解释权。",
      "你用得不多，但每次用都很清醒：知道它会幻觉，知道它有立场，知道你的对话可能被拿去训练。你看到“AI 将改变一切”会翻白眼，但看到真的好用的功能，也会默默收藏。朋友问你怎么这么防备，你说：“因为我看过用户协议。”"
    ],
    manual: [
      ["常用开场白", "“你先说你的信息来源。”"],
      ["翻车现场", "你花二十分钟证明 AI 错了，然后自己写完了。"],
      ["最适合", "隐私敏感、高风险、或者“思考本身就是目的”的任务；把 AI 当陪练，不当 oracle。"]
    ],
    best: "editor",
    bestReason: "两个人都要查，至少不会一起翻车。",
    worst: "wish",
    worstReason: "ta 说“AI 说可以”，你说“哪来的结论”。",
    eyes: "一个每次对话都像在面试我的人。"
  },
  contractor: {
    name: "赛博包工头",
    tagline: "AI 干活，我负责验收",
    desc: [
      "你把 AI 当硅基实习生：给 brief、定期限、要三版、验收。",
      "你不关心它用哪个模型，只关心能不能交付；你不跟它聊感情，只跟它对齐需求。你未必是团队里最会写 prompt 的人，但一定是最会把活分出去的人。你不是剥削 AI，你只是把重复劳动外包给硅基劳动力，自己保留最终解释权。"
    ],
    manual: [
      ["常用开场白", "“先出三版，每版 200 字，今晚给我。”"],
      ["翻车现场", "AI 交了 3 版，你发现需求一开始就没说清楚。"],
      ["最适合", "重复劳动、格式化、初稿、项目管理；脏活给它，判断留给自己。"]
    ],
    best: "alchemy",
    bestReason: "ta 搭流程，你负责派活。",
    worst: "wish",
    worstReason: "你问“需求呢”，ta 说“你先写嘛”。",
    eyes: "一个把聊天框当项目管理软件的人。"
  },
  hoarder: {
    name: "AI 工具仓鼠",
    tagline: "收藏了 200 个工具，常用 2 个",
    desc: [
      "你不是在找工具，你是在收集可能性。",
      "新模型、新 Agent、新插件、新工作流，你都要试一遍。你的收藏夹是 AI 工具的墓地，你的浏览器永远开着二十个标签页。你能跟朋友讲清楚五十个工具的区别，但自己最常用的还是那两个。你不一定需要新工具，你只是喜欢“万一它更好用呢”的感觉。"
    ],
    manual: [
      ["常用开场白", "“这个新工具你试了吗？”"],
      ["翻车现场", "花一小时配置新工具，最后还是用回原来的。"],
      ["最适合", "探索、发现工作流；但需要定期清理，逼自己只留一个。"]
    ],
    best: "alchemy",
    bestReason: "ta 把一个工具用深，你把一个新工具带回家。",
    worst: "skeptic",
    worstReason: "你刚说“这个很酷”，ta 问“所以解决了什么问题”。",
    eyes: "一个把我当新品发布会的人。"
  }
};

const ORDER = ["wish", "alchemy", "editor", "copy", "tree", "skeptic", "contractor", "hoarder"];

const QUESTIONS = [
  { label: "01 · 早晨", title: "早上打开电脑，你第一件事通常是？", options: [
    ["问 AI 今天先干哪件事，让它帮我排优先级", "wish"],
    ["先刷一圈模型/工具更新，看看又出了什么", "hoarder"],
    ["直接开文档，卡住了再问", "contractor"]
  ]},
  { label: "02 · 周报", title: "周五下午，周报还没写。你？", options: [
    ["把一周流水账丢给 AI，让它编得像有在干活", "contractor"],
    ["自己写完，AI 只负责改措辞", "editor"],
    ["先写一段提示词，让 AI 扮演老板/编辑来审我", "alchemy"]
  ]},
  { label: "03 · 数据", title: "AI 给了一个很像真的、但你没法确认的数据。你？", options: [
    ["先复制进文档，交付前再说", "copy"],
    ["查来源，找不到就删掉", "editor"],
    ["再问另一个 AI，交叉验证", "skeptic"]
  ]},
  { label: "04 · 深夜", title: "凌晨一点，你有点 emo。你？", options: [
    ["打开 AI 聊到它劝我去睡觉", "tree"],
    ["写日记/找朋友，不找 AI", "skeptic"],
    ["让 AI 帮我写一段话，发给那个人", "copy"]
  ]},
  { label: "05 · 新模型", title: "新模型发布，你会？", options: [
    ["立刻注册，排队 10 万也先骂再等", "hoarder"],
    ["看评测，等稳定再换", "editor"],
    ["够用就行，不凑热闹", "skeptic"]
  ]},
  { label: "06 · 方案", title: "老板让你一小时内出一个方案。你？", options: [
    ["让 AI 先出 10 个方向，自己挑", "alchemy"],
    ["让 AI 写完整初稿，自己改", "contractor"],
    ["自己列框架，AI 填细节", "editor"]
  ]},
  { label: "07 · 拒绝", title: "AI 说“我不能帮你做这个”。你？", options: [
    ["换个问法继续", "alchemy"],
    ["算了，自己来", "skeptic"],
    ["问它边界到底在哪", "editor"]
  ]},
  { label: "08 · 推荐", title: "朋友让你推荐一个 AI 工具。你？", options: [
    ["发 10 个链接，附使用场景", "hoarder"],
    ["只推一个最顺手的", "contractor"],
    ["劝他先想清楚要解决什么", "skeptic"]
  ]},
  { label: "09 · App 数量", title: "你手机里装了几个 AI App？", options: [
    ["10 个以上，每个都试过，常用 2 个", "hoarder"],
    ["2–3 个，够用", "contractor"],
    ["1 个，甚至不用", "skeptic"]
  ]},
  { label: "10 · 祝福", title: "重要的人过生日，你要写一段祝福。你？", options: [
    ["让 AI 写，改两个词就发", "copy"],
    ["让 AI 写 5 版，自己拼成第 6 版", "alchemy"],
    ["自己写，AI 只查错别字", "editor"]
  ]},
  { label: "11 · 替代", title: "看到“AI 将取代你的工作”，你？", options: [
    ["焦虑三分钟，然后让 AI 写转型计划", "wish"],
    ["觉得夸大，继续干活", "skeptic"],
    ["立刻去学新工具，先卷为敬", "hoarder"]
  ]},
  { label: "12 · 旅行", title: "旅行前，你会怎么用 AI？", options: [
    ["让它排 3 天行程，到了当地再改", "copy"],
    ["给预算/偏好，反复改到满意", "alchemy"],
    ["自己定机酒，AI 只查攻略", "editor"]
  ]},
  { label: "13 · 记忆", title: "AI 记得你上次说过的偏好。你？", options: [
    ["有点贴心，继续聊", "tree"],
    ["有点毛骨悚然，去关记忆", "skeptic"],
    ["太好了，让它记住我的工作习惯", "contractor"]
  ]},
  { label: "14 · AI 味", title: "AI 写的文案一眼“AI 味”。你？", options: [
    ["懒得改，能看就行", "copy"],
    ["逐句改成自己的语气", "editor"],
    ["让 AI 学我以前的文章重写", "alchemy"]
  ]},
  { label: "15 · 家人", title: "家里人问你“AI 到底是什么”。你？", options: [
    ["帮他们装好，教一遍", "hoarder"],
    ["说“就是个高级搜索”", "skeptic"],
    ["提醒他们别乱点，注意隐私", "editor"]
  ]},
  { label: "16 · 消失", title: "如果 AI 消失一天，你会？", options: [
    ["不知道工作怎么开始", "wish"],
    ["照常，本来就用得不多", "skeptic"],
    ["正好，把积压的事自己做一遍", "editor"]
  ]},
  { label: "17 · 最想", title: "你最愿意让 AI 替你做什么？", options: [
    ["做决定，直接给答案", "wish"],
    ["做脏活，写周报/整理表格", "contractor"],
    ["陪聊，听我说废话", "tree"]
  ]},
  { label: "18 · 长回答", title: "AI 给了一个很长的回答。你？", options: [
    ["直接滑到底看结论", "copy"],
    ["先看结构，挑重点", "editor"],
    ["继续追问，让它展开", "alchemy"]
  ]},
  { label: "19 · 灵魂", title: "朋友说“AI 写的没灵魂”。你？", options: [
    ["同意，但快啊", "copy"],
    ["反对，灵魂看谁在指挥", "alchemy"],
    ["无所谓，工具而已", "contractor"]
  ]},
  { label: "20 · 被记住", title: "你希望 AI 记住你什么？", options: [
    ["我的喜好和说话方式", "tree"],
    ["我的工作流和常用模板", "contractor"],
    ["最好什么都别记", "skeptic"]
  ]}
];

const MAX_BY = ORDER.reduce((acc, key) => {
  acc[key] = QUESTIONS.reduce((n, q) => n + q.options.filter(([, k]) => k === key).length, 0);
  return acc;
}, {});

const state = { index: 0, answers: [], scores: {}, result: null, shadow: [], locked: false };
const isWeChat = /MicroMessenger/i.test(navigator.userAgent);
const $ = (s) => document.querySelector(s);

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.toggle("active", s.id === id));
  window.scrollTo({ top: 0, behavior: "auto" });
}

function resetScores() {
  state.scores = {};
  ORDER.forEach((key) => { state.scores[key] = 0; });
}

function start() {
  state.index = 0;
  state.answers = [];
  state.locked = false;
  resetScores();
  renderQuestion();
  showScreen("quiz");
}

function renderQuestion() {
  const q = QUESTIONS[state.index];
  $("#progressText").textContent = `${String(state.index + 1).padStart(2, "0")} / ${QUESTIONS.length}`;
  $("#progressBar").style.width = `${((state.index + 1) / QUESTIONS.length) * 100}%`;
  $("#qLabel").textContent = q.label;
  $("#question").textContent = q.title;
  $("#backBtn").style.visibility = state.index === 0 ? "hidden" : "visible";

  const options = $("#options");
  options.innerHTML = "";
  q.options.forEach(([text, key], i) => {
    const button = document.createElement("button");
    button.className = "option";
    button.innerHTML = `<span class="letter">${String.fromCharCode(65 + i)}</span><span>${text}</span>`;
    button.addEventListener("click", () => choose(key, button, i));
    options.appendChild(button);
  });
}

function choose(key, button, index) {
  if (state.locked) return;
  state.locked = true;
  document.querySelectorAll(".option").forEach((el) => el.classList.remove("picked"));
  button.classList.add("picked");
  state.answers[state.index] = { key, index };
  state.scores[key] += 1;

  window.setTimeout(() => {
    state.locked = false;
    if (state.index >= QUESTIONS.length - 1) {
      finish();
    } else {
      state.index += 1;
      renderQuestion();
    }
  }, 260);
}

function back() {
  if (state.index === 0 || state.locked) return;
  const previous = state.answers[state.index - 1];
  if (previous) {
    state.scores[previous.key] -= 1;
    delete state.answers[state.index - 1];
  }
  state.index -= 1;
  renderQuestion();
}

function computeResult() {
  // Results have different numbers of mapped options. Normalize by opportunity
  // so one archetype is not easier to hit just because it has more choices.
  const entries = ORDER
    .map((key) => [key, state.scores[key] / Math.max(1, MAX_BY[key])])
    .sort((a, b) => b[1] - a[1]);
  const top = entries[0][1];
  const tied = entries.filter(([, value]) => Math.abs(value - top) < 1e-9).map(([key]) => key);
  const main = tied[Math.floor(Math.random() * tied.length)];
  const shadow = entries
    .filter(([key, value]) => key !== main && value >= top - 0.07)
    .slice(0, 2)
    .map(([key]) => key);
  return { main, shadow };
}

function finish() {
  const { main, shadow } = computeResult();
  state.result = main;
  state.shadow = shadow;
  renderResult();
  showScreen("result");
}

function renderResult() {
  const result = RESULTS[state.result];
  const index = ORDER.indexOf(state.result) + 1;
  $("#resultIndex").textContent = `${String(index).padStart(2, "0")} / 08`;
  $("#resultName").textContent = result.name;
  $("#resultTagline").textContent = result.tagline;
  $("#resultEyes").textContent = `“${result.eyes}”`;
  $("#resultDesc").innerHTML = result.desc.map((p) => `<p>${p}</p>`).join("");
  $("#manual").innerHTML = result.manual.map(([label, text]) => `
    <div class="manual-item"><span>${label}</span><p>${text}</p></div>`).join("");

  const best = RESULTS[result.best];
  const worst = RESULTS[result.worst];
  $("#bestName").textContent = best.name;
  $("#bestReason").textContent = result.bestReason;
  $("#worstName").textContent = worst.name;
  $("#worstReason").textContent = result.worstReason;

  const shadowBox = $("#shadowBox");
  if (state.shadow.length) {
    shadowBox.hidden = false;
    $("#shadowText").textContent = state.shadow
      .map((key) => `「${RESULTS[key].name}」`)
      .join("、") + " 的影子。你不是单一类型，你只是今天更靠近这一边。";
  } else {
    shadowBox.hidden = true;
  }
}

function shareText() {
  const result = RESULTS[state.result];
  return `我的 AI 使用人格是「${result.name}」。\nAI 眼中的我：${result.eyes}\n你呢？\n${location.href}`;
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    toast("分享文案已复制。");
  } catch (error) {
    const area = document.createElement("textarea");
    area.value = text;
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
    toast("分享文案已复制。");
  }
}

async function share() {
  const text = shareText();
  if (navigator.share) {
    try {
      await navigator.share({ title: "测测你的 AI 使用人格", text, url: location.href });
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }
  copyText(text);
}

function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 1900);
}

function renderGallery() {
  $("#galleryGrid").innerHTML = ORDER.map((key, i) => {
    const result = RESULTS[key];
    return `<article class="persona-card">
      <div class="num">${String(i + 1).padStart(2, "0")} / 08</div>
      <h3>${result.name}</h3>
      <p>${result.tagline}</p>
    </article>`;
  }).join("");
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const chars = String(text).split("");
  let line = "";
  let cursorY = y;
  for (const char of chars) {
    const test = line + char;
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, cursorY);
      line = char;
      cursorY += lineHeight;
    } else {
      line = test;
    }
  }
  if (line) ctx.fillText(line, x, cursorY);
  return cursorY;
}

function drawRoundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function downloadCard() {
  const canvas = $("#shareCanvas");
  const ctx = canvas.getContext("2d");
  const result = RESULTS[state.result];
  const W = canvas.width;
  const H = canvas.height;

  const gradient = ctx.createLinearGradient(0, 0, W, H);
  gradient.addColorStop(0, "#171b16");
  gradient.addColorStop(1, "#25221b");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = "rgba(217, 91, 63, .18)";
  ctx.beginPath();
  ctx.arc(W - 60, 90, 240, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "rgba(255,255,255,.08)";
  ctx.lineWidth = 1;
  for (let y = 130; y < H; y += 80) {
    ctx.beginPath();
    ctx.moveTo(72, y);
    ctx.lineTo(W - 72, y);
    ctx.stroke();
  }

  ctx.fillStyle = "#a8b0a6";
  ctx.font = "20px 'SFMono-Regular', Menlo, monospace";
  ctx.fillText("AI PERSONA TEST / 2026", 72, 92);

  ctx.fillStyle = "#d95b3f";
  ctx.font = "23px 'SFMono-Regular', Menlo, monospace";
  ctx.fillText(`PERSONA ${String(ORDER.indexOf(state.result) + 1).padStart(2, "0")} / 08`, 72, 180);

  ctx.fillStyle = "#f6f1e7";
  ctx.font = "600 80px 'Songti SC', 'Noto Serif SC', Georgia, serif";
  wrapText(ctx, result.name, 72, 292, W - 144, 92);

  ctx.fillStyle = "#d7b4a8";
  ctx.font = "31px 'Songti SC', 'Noto Serif SC', Georgia, serif";
  wrapText(ctx, result.tagline, 72, 382, W - 144, 44);

  drawRoundRect(ctx, 72, 462, W - 144, 226, 18);
  ctx.fillStyle = "rgba(255,255,255,.06)";
  ctx.fill();
  ctx.strokeStyle = "rgba(255,255,255,.12)";
  ctx.stroke();

  ctx.fillStyle = "#8fbfa6";
  ctx.font = "19px 'SFMono-Regular', Menlo, monospace";
  ctx.fillText("AI 眼中的你", 100, 505);
  ctx.fillStyle = "#f6f1e7";
  ctx.font = "34px 'Songti SC', 'Noto Serif SC', Georgia, serif";
  wrapText(ctx, `“${result.eyes}”`, 100, 566, W - 200, 50);

  ctx.fillStyle = "#d95b3f";
  ctx.font = "22px 'SFMono-Regular', Menlo, monospace";
  ctx.fillText("YOUR AI MANUAL", 72, 770);

  let y = 830;
  result.manual.forEach(([label, text]) => {
    ctx.fillStyle = "#d95b3f";
    ctx.font = "19px 'SFMono-Regular', Menlo, monospace";
    ctx.fillText(label, 72, y);
    ctx.fillStyle = "rgba(246,241,231,.78)";
    ctx.font = "26px -apple-system, 'PingFang SC', sans-serif";
    y = wrapText(ctx, text, 72, y + 38, W - 144, 36) + 50;
  });

  ctx.strokeStyle = "rgba(255,255,255,.14)";
  ctx.beginPath();
  ctx.moveTo(72, H - 104);
  ctx.lineTo(W - 72, H - 104);
  ctx.stroke();

  const best = RESULTS[result.best];
  const worst = RESULTS[result.worst];
  drawRoundRect(ctx, 72, 1080, 438, 128, 14);
  ctx.fillStyle = "rgba(143,191,166,.10)";
  ctx.fill();
  ctx.fillStyle = "#8fbfa6";
  ctx.font = "17px 'SFMono-Regular', Menlo, monospace";
  ctx.fillText("BEST MATCH", 96, 1118);
  ctx.fillStyle = "#f6f1e7";
  ctx.font = "27px 'Songti SC', 'Noto Serif SC', Georgia, serif";
  ctx.fillText(best.name, 96, 1164);

  drawRoundRect(ctx, 534, 1080, 438, 128, 14);
  ctx.fillStyle = "rgba(217,91,63,.10)";
  ctx.fill();
  ctx.fillStyle = "#d99b8d";
  ctx.font = "17px 'SFMono-Regular', Menlo, monospace";
  ctx.fillText("WORST MATCH", 558, 1118);
  ctx.fillStyle = "#f6f1e7";
  ctx.font = "27px 'Songti SC', 'Noto Serif SC', Georgia, serif";
  ctx.fillText(worst.name, 558, 1164);

  ctx.fillStyle = "#d95b3f";
  ctx.font = "24px -apple-system, 'PingFang SC', sans-serif";
  ctx.fillText("测测你的 AI 使用人格", 72, H - 62);
  ctx.fillStyle = "#7d857b";
  ctx.font = "17px 'SFMono-Regular', Menlo, monospace";
  ctx.fillText("20 QUESTIONS · 8 PERSONAS · 1 RELATIONSHIP", 72, H - 30);

  return canvas.toDataURL("image/png");
}

function openShareCard() {
  const image = $("#shareImage");
  image.src = downloadCard();
  $("#shareModal").hidden = false;
  document.body.classList.add("share-open");
  $("#shareTitle").textContent = isWeChat ? "长按图片保存" : "分享卡已生成";
  $("#shareTip").textContent = isWeChat
    ? "在微信里长按图片 → 保存图片，再发给朋友或发朋友圈。"
    : "长按图片保存，或点“下载 PNG”。";
  $("#saveCardBtn").hidden = isWeChat;
}

function closeShareCard() {
  $("#shareModal").hidden = true;
  document.body.classList.remove("share-open");
  $("#shareImage").removeAttribute("src");
}

function saveCard() {
  const link = document.createElement("a");
  link.download = `ai-persona-${state.result}.png`;
  link.href = $("#shareImage").src;
  link.click();
  toast("结果卡已保存。");
}

function bind() {
  $("#startBtn").addEventListener("click", start);
  $("#backBtn").addEventListener("click", back);
  $("#shareBtn").addEventListener("click", () => {
    if (isWeChat) openShareCard();
    else share();
  });
  $("#copyBtn").addEventListener("click", () => copyText(shareText()));
  $("#downloadBtn").addEventListener("click", openShareCard);
  $("#againBtn").addEventListener("click", start);
  $("#galleryBtn").addEventListener("click", () => {
    renderGallery();
    showScreen("gallery");
  });
  $("#galleryBack").addEventListener("click", () => {
    if (state.result) showScreen("result");
    else showScreen("cover");
  });
  $("#closeShareBtn").addEventListener("click", closeShareCard);
  $("#saveCardBtn").addEventListener("click", saveCard);
  $("#shareCopyBtn").addEventListener("click", () => copyText(shareText()));
  $("#shareModal").addEventListener("click", (event) => {
    if (event.target === $("#shareModal")) closeShareCard();
  });
  document.addEventListener("keydown", (event) => {
    if ($("#quiz").classList.contains("active")) {
      if (["1", "2", "3"].includes(event.key)) {
        const buttons = document.querySelectorAll(".option");
        const button = buttons[Number(event.key) - 1];
        if (button) button.click();
      }
      if (event.key === "ArrowLeft") back();
    }
    if ($("#cover").classList.contains("active") && (event.key === "Enter" || event.key === " ")) {
      start();
    }
    if (event.key === "Escape" && !$("#shareModal").hidden) closeShareCard();
  });
}

bind();
resetScores();
