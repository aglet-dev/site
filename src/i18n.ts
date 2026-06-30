// 站点多语言内容单源。每个 locale 一份结构化文案;页面路由 /(en)、/zh/、/ja/
// 各渲染一份,绝不在同一页堆叠多语言。新增语言只需在此加一项 + 建对应 pages 入口。
//
// 定位(2026-06):Aglet 是 **Agent 优先的开发平台** —— 任何人用 AI 即可构建出
// 原生质感的小工具(aglet),自己用或分享出去。文案准确、贴实际。

export const DEFAULT_LOCALE = "en";
export const LOCALES = ["en", "zh", "ja"] as const;
export type Locale = (typeof LOCALES)[number];

export const localeName: Record<Locale, string> = {
  en: "English",
  zh: "中文",
  ja: "日本語",
};

// 各 locale 的根路径(en 不带前缀)。语言切换器与 hreflang 都用它。
export const localePath: Record<Locale, string> = {
  en: "/",
  zh: "/zh/",
  ja: "/ja/",
};

export const htmlLang: Record<Locale, string> = {
  en: "en",
  zh: "zh-CN",
  ja: "ja",
};

export const DMG = "https://cdn.aglet.dev/dist/Aglet.dmg";
export const BREW = "brew install aglet-dev/tap/aglet";
export const CATALOG = "https://registry.aglet.dev";
export const FEEDBACK = "https://github.com/aglet-dev/feedback";

// 复制到 Claude / Codex 即可:装好 CLI + 自学 + 产出一个 hello-world aglet。
// 用英文(对编码 Agent 最稳);命令普适。步骤 2 的 `aglet agents-md` 让 Agent
// 自学全部组件/指令,步骤 6 的 validate 保证产物正确 —— 整段真能跑通。
export const AGENT_PROMPT = `Install Aglet and build me a hello-world tool.

1. Install the CLI:  brew install aglet-dev/tap/aglet
2. Load the authoring guide — run \`aglet agents-md\` and read it in full.
3. Check the setup:  aglet doctor
4. Scaffold a new tool:  aglet new hello
5. Rewrite hello/ui.tsx as a minimal "Hello, world" screen: a Page with a
   heading and a button that shows a toast.
6. Validate it:  aglet validate hello
7. Install the app (it hosts the live dev window):
     curl -fsSL https://cdn.aglet.dev/dist/Aglet.dmg -o /tmp/Aglet.dmg
     hdiutil attach /tmp/Aglet.dmg -nobrowse -quiet
     ditto "/Volumes/Aglet/Aglet.app" /Applications/Aglet.app
     hdiutil detach "/Volumes/Aglet" -quiet
     open -a Aglet
8. Run it live:  aglet dev hello

Keep it minimal and idiomatic. If a step fails, run \`aglet doctor\` and fix
what it reports.`;

type Pillar = { h: string; p: string };
type Strings = {
  title: string;
  description: string;
  tag: string;
  badges: string[];
  cta: { download: string; agent: string; catalog: string };
  how: { title: string; steps: Pillar[] };
  aglets: { title: string; lede: string; items: [string, string][] };
  why: { title: string; pillars: Pillar[] };
  quickstart: {
    title: string;
    agentLede: string;
    copy: string;
    copied: string;
    manualTitle: string;
    manualLede: string;
    c1: string;
    c2: string;
    c3: string;
    docsNote: string;
  };
  get: {
    title: string;
    lede: string;
    appComment: string;
    cliComment: string;
    note: string;
  };
  footer: { catalog: string; privacy: string; registry: string; builtins: string; feedback: string };
};

export const strings: Record<Locale, Strings> = {
  en: {
    title: "Aglet — native tools your AI agent builds",
    description:
      "Aglet turns what your AI coding agent writes into small, native-quality desktop tools — no native code, no account, all on your machine. Keep them private, or share them.",
    tag: "Your AI agent writes it. Aglet renders it natively. You keep it — or share it.",
    badges: ["macOS", "iOS (coming)", "Android (coming)", "Web (coming)"],
    cta: { download: "Download for macOS", agent: "Build with your agent ↓", catalog: "Browse the catalog →" },
    how: {
      title: "How it works",
      steps: [
        { h: "Describe it", p: "Tell your AI coding agent — Claude Code or Codex — what tool you want." },
        { h: "The agent writes it", p: "It generates the declarative UI plus optional sandboxed JavaScript. No Swift, no Kotlin, no native code." },
        { h: "Aglet renders it natively", p: "SwiftUI on macOS, the web elsewhere — it looks and feels like a real app, not a web page." },
        { h: "Keep it, or share it", p: "Run it privately on your machine, or publish it to the public catalog through a human-reviewed pull request." },
      ],
    },
    aglets: {
      title: "Built with Aglet",
      lede: "A few tools already in the catalog — each built this way, shared in public.",
      items: [
        ["HN Reader", "Hacker News, AI-translated"],
        ["GitHub PRs", "your review queue + open PRs"],
        ["GitHub Actions", "watch and run CI"],
        ["AI Token Usage", "Claude + Codex, in the menu bar"],
        ["…and more", "growing in public"],
      ],
    },
    why: {
      title: "Why Aglet",
      pillars: [
        { h: "No native code", p: "Describe the UI as data, plus optional sandboxed JavaScript. Aglet renders it natively — SwiftUI on macOS — so it feels like an Apple app without a line of Swift." },
        { h: "Agent-first", p: "Aglets are small and declarative — exactly what an AI agent can author end to end. Most aglets are AI-written and human-reviewed." },
        { h: "Yours, or shared", p: "Run an aglet privately, or publish it. Public aglets join the catalog via GitHub PR — author, source, and reviewer all visible." },
        { h: "Local-first & sandboxed", p: "Everything runs on your device in local SQLite. Logic runs in a sandboxed interpreter; any network or system access is declared and visible before install." },
      ],
    },
    quickstart: {
      title: "Build your first tool",
      agentLede: "Paste this into Claude or Codex. It installs Aglet, learns the framework, and builds you a working hello-world tool:",
      copy: "Copy",
      copied: "Copied!",
      manualTitle: "Prefer to do it by hand?",
      manualLede: "Install the CLI (and grab the app above), then:",
      c1: "# Scaffold a new aglet (aglet.json + ui.tsx + locales)",
      c2: "# Edit ui.tsx, then validate offline",
      c3: "# Run it live in the app, with hot reload",
      docsNote: `Full authoring reference: run <code>aglet agents-md</code>.`,
    },
    get: {
      title: "Get it",
      lede: "Run aglets with the app, or build your own with the CLI:",
      appComment: "# App — download the signed .dmg, drag to Applications:",
      cliComment: "# CLI — author, install and test your own aglets:",
      note: `The app self-updates via Sparkle. iOS / Android coming.`,
    },
    footer: { catalog: "Catalog", privacy: "Privacy", registry: "Registry", builtins: "Built-in aglets", feedback: "Feedback" },
  },

  zh: {
    title: "Aglet —— 你的 AI agent 造的原生小工具",
    description: "Aglet 把你的 AI coding agent 写出来的东西,变成小而原生质感的桌面小工具 —— 不写原生代码、无账号、全在你本机。自己用,也能分享。",
    tag: "你的 AI agent 写,Aglet 原生渲染,归你 —— 也能分享。",
    badges: ["macOS", "iOS(即将)", "Android(即将)", "Web(即将)"],
    cta: { download: "下载 macOS 版", agent: "用你的 agent 构建 ↓", catalog: "浏览 catalog →" },
    how: {
      title: "怎么用",
      steps: [
        { h: "描述它", p: "把你想要的小工具告诉你的 AI coding agent —— Claude Code 或 Codex。" },
        { h: "agent 写出来", p: "它生成声明式 UI 加可选的沙盒 JavaScript。不写 Swift、不写 Kotlin、不碰原生代码。" },
        { h: "Aglet 原生渲染", p: "macOS 上是 SwiftUI,其它平台走网页 —— 看着、用着像真应用,不是网页。" },
        { h: "自用,或分享", p: "在本机私下运行,或经人类审核的 PR 发布到公开 catalog。" },
      ],
    },
    aglets: {
      title: "用 Aglet 构建的",
      lede: "catalog 里已有的一些工具 —— 每个都是这样构建、公开分享的。",
      items: [
        ["HN 阅读器", "Hacker News,AI 翻译"],
        ["GitHub PR", "我的 review 队列 + 待处理 PR"],
        ["GitHub Actions", "查看并运行 CI"],
        ["AI 用量", "Claude + Codex,菜单栏"],
        ["更多……", "在公开中持续增加"],
      ],
    },
    why: {
      title: "为什么选 Aglet",
      pillars: [
        { h: "不写原生代码", p: "把 UI 写成数据,再加可选的沙盒 JS。Aglet 原生渲染 —— macOS 上是 SwiftUI —— 不写一行 Swift,也有 Apple 应用般的质感。" },
        { h: "Agent 优先", p: "小工具小巧、声明式 —— 正适合 AI agent 端到端编写。绝大多数小工具由 AI 编写、人类审核。" },
        { h: "自用,或分享", p: "小工具可以私下运行,也可以发布。公开小工具经 GitHub PR 进入 catalog —— 作者、源码、审核者全程可见。" },
        { h: "本地优先 + 沙盒", p: "一切在你设备上运行,数据存本地 SQLite。逻辑跑在沙盒解释器里;任何联网或系统访问,都在安装前声明、可见。" },
      ],
    },
    quickstart: {
      title: "构建你的第一个工具",
      agentLede: "把下面这段复制到 Claude 或 Codex。它会装好 Aglet、自学框架,并给你产出一个能跑的 hello-world 工具:",
      copy: "复制",
      copied: "已复制!",
      manualTitle: "想自己手动来?",
      manualLede: "装好 CLI(应用见上方),然后:",
      c1: "# 脚手架生成一个小工具(aglet.json + ui.tsx + locales)",
      c2: "# 改 ui.tsx,然后离线校验",
      c3: "# 在应用里实时运行,热重载",
      docsNote: `完整编写参考:运行 <code>aglet agents-md</code>。`,
    },
    get: {
      title: "获取",
      lede: "用应用运行小工具,或用 CLI 构建你自己的:",
      appComment: "# 应用 —— 下载已签名公证的 .dmg,拖入「应用程序」:",
      cliComment: "# CLI —— 编写、安装、测试你自己的小工具:",
      note: `应用经 Sparkle 自动更新。iOS / Android 即将支持。`,
    },
    footer: { catalog: "Catalog", privacy: "隐私", registry: "Registry", builtins: "内置小工具", feedback: "反馈" },
  },

  ja: {
    title: "Aglet —— AI エージェントが作る、ネイティブ品質のミニアプリ",
    description: "Aglet は、あなたの AI コーディングエージェントが書いたものを、小さくネイティブ品質のデスクトップミニアプリに変えます —— ネイティブコード不要、アカウント不要、すべて自分のマシン上。自分用にも、共有にも。",
    tag: "AI エージェントが書き、Aglet がネイティブに描画。あなたのもの —— 共有も自由。",
    badges: ["macOS", "iOS(近日)", "Android(近日)", "Web(近日)"],
    cta: { download: "macOS 版をダウンロード", agent: "エージェントで作る ↓", catalog: "カタログを見る →" },
    how: {
      title: "使い方",
      steps: [
        { h: "伝える", p: "欲しいミニアプリを、AI コーディングエージェント(Claude Code または Codex)に伝える。" },
        { h: "エージェントが書く", p: "宣言的 UI と任意のサンドボックス JavaScript を生成。Swift も Kotlin も、ネイティブコードも不要。" },
        { h: "Aglet がネイティブ描画", p: "macOS では SwiftUI、他は Web —— 見た目も操作感も本物のアプリ。Web ページではない。" },
        { h: "自分用、または共有", p: "自分のマシンで非公開で動かすか、人間のレビューを経た PR で公開カタログへ。" },
      ],
    },
    aglets: {
      title: "Aglet で作られたもの",
      lede: "すでにカタログにあるツールの一部 —— どれもこの方法で作り、公開で共有。",
      items: [
        ["HN リーダー", "Hacker News、AI 翻訳"],
        ["GitHub PR", "レビュー待ち + 自分の PR"],
        ["GitHub Actions", "CI の確認と実行"],
        ["AI 利用量", "Claude + Codex、メニューバー"],
        ["…さらに", "公開の場で増加中"],
      ],
    },
    why: {
      title: "なぜ Aglet か",
      pillars: [
        { h: "ネイティブコード不要", p: "UI をデータとして書き、任意でサンドボックス JS を添える。Aglet がネイティブに描画 —— macOS では SwiftUI —— Swift を一行も書かずに Apple アプリのような品質。" },
        { h: "エージェントファースト", p: "ミニアプリは小さく宣言的 —— AI エージェントが端から端まで作るのに最適。ほとんどのミニアプリは AI が作成し、人間がレビュー。" },
        { h: "自分用、または共有", p: "ミニアプリは非公開で動かすことも、公開することもできます。公開ミニアプリは GitHub PR でカタログに加わり、作者・ソース・レビュアーが見えます。" },
        { h: "ローカルファースト + サンドボックス", p: "すべてデバイス上で動作、データはローカル SQLite。ロジックはサンドボックス化されたインタプリタで動作;ネットワークやシステムアクセスはインストール前に宣言・可視化。" },
      ],
    },
    quickstart: {
      title: "最初のツールを作る",
      agentLede: "下のテキストを Claude または Codex に貼り付けてください。Aglet をインストールし、フレームワークを学習し、動く hello-world ツールを作ってくれます:",
      copy: "コピー",
      copied: "コピーしました!",
      manualTitle: "自分の手でやりたい?",
      manualLede: "CLI をインストール(アプリは上記)してから:",
      c1: "# 新しいミニアプリを生成(aglet.json + ui.tsx + locales)",
      c2: "# ui.tsx を編集し、オフラインで検証",
      c3: "# アプリ内でライブ実行、ホットリロード",
      docsNote: `完全な作成リファレンス:<code>aglet agents-md</code> を実行。`,
    },
    get: {
      title: "入手",
      lede: "アプリでミニアプリを実行、または CLI で自作:",
      appComment: "# アプリ —— 署名・公証済みの .dmg をダウンロードし「アプリケーション」へ:",
      cliComment: "# CLI —— 自分のミニアプリを作成・インストール・テスト:",
      note: `アプリは Sparkle で自動更新。iOS / Android は近日対応。`,
    },
    footer: { catalog: "カタログ", privacy: "プライバシー", registry: "Registry", builtins: "内蔵ミニアプリ", feedback: "フィードバック" },
  },
};
