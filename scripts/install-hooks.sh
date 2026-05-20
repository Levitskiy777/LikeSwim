#!/usr/bin/env bash
# Run this once after cloning to install local git hooks.
set -e

HOOKS_DIR="$(git rev-parse --git-dir)/hooks"

install_hook() {
  local name="$1"
  local src="scripts/git-hooks/$name"
  local dst="$HOOKS_DIR/$name"

  cp "$src" "$dst"
  chmod +x "$dst"
  echo "✅ Installed $name hook"
}

install_hook "pre-push"
echo "🎉 All hooks installed."
