module.exports = {
  disableEmoji: false,
  format: "{type}{scope}: {emoji}{subject}",
  list: [
    "test",
    "feat",
    "fix",
    "chore",
    "docs",
    "refactor",
    "style",
    "ci",
    "perf",
  ],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: [
    "type",
    "scope",
    "subject",
    "body",
    "breaking",
    "issues",
    "lerna",
  ],
  scopes: [],
  types: {
    chore: {
      description: "ビルドプロセスや補助ツールの変更",
      emoji: "🤖",
      value: "chore",
    },
    ci: {
      description: "CIに関する変更",
      emoji: "🎡",
      value: "ci",
    },
    docs: {
      description: "ドキュメントのみ変更",
      emoji: "✏️",
      value: "docs",
    },
    feat: {
      description: "新機能",
      emoji: "🎸",
      value: "feat",
    },
    fix: {
      description: "バグ修正",
      emoji: "🐛",
      value: "fix",
    },
    perf: {
      description: "パフォーマンス改善",
      emoji: "⚡️",
      value: "perf",
    },
    refactor: {
      description: "バグ修正でも機能追加でもないコード変更",
      emoji: "💡",
      value: "refactor",
    },
    release: {
      description: "リリースコミット",
      emoji: "🏹",
      value: "release",
    },
    style: {
      description:
        "コーディングスタイル変更（Markup, white-space, formatting, missing semi-colons...）",
      emoji: "💄",
      value: "style",
    },
    test: {
      description: "漏れたテストの追加",
      emoji: "💍",
      value: "test",
    },
  },
};
