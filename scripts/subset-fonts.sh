#!/usr/bin/env bash
# Regenerate the self-hosted Pretendard subsets in public/fonts/.
# Run this whenever visible text (translations / Resume.tsx) changes, otherwise
# newly added glyphs fall back to the system font.
#
# Requirements: python with `fonttools` and `brotli` (pip install fonttools brotli),
#               node, curl.
set -euo pipefail

VER="v1.3.9"
BASE="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@${VER}/packages"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

echo "→ collecting used characters"
node "$ROOT/scripts/collect-chars.js"

echo "→ downloading source variable fonts"
curl -sSL -o "$TMP/ko.woff2" "$BASE/pretendard/dist/web/variable/woff2/PretendardVariable.woff2"
curl -sSL -o "$TMP/jp.woff2" "$BASE/pretendard-jp/dist/web/variable/woff2/PretendardJPVariable.woff2"

mkdir -p "$ROOT/public/fonts"

echo "→ subsetting (ko)"
python -m fontTools.subset "$TMP/ko.woff2" \
  --text-file="$ROOT/scripts/chars-ko.txt" --flavor=woff2 \
  --layout-features='*' --no-hinting \
  --output-file="$ROOT/public/fonts/pretendard-subset.woff2"

echo "→ subsetting (ja)"
python -m fontTools.subset "$TMP/jp.woff2" \
  --text-file="$ROOT/scripts/chars-ja.txt" --flavor=woff2 \
  --layout-features='*' --no-hinting \
  --output-file="$ROOT/public/fonts/pretendard-jp-subset.woff2"

echo "→ done:"
ls -l "$ROOT/public/fonts/"
