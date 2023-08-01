export function tokenize(input) {
  return input
    .toLowerCase()
    .split(/[\s,]+/)
    .filter(token => token);
}

export function matches(title, tokens) {
  const token = tokens.shift();
  if (!token) return true;
  const index = title.indexOf(token);
  if (index === -1) return false;
  const remaining = title.slice(index + token.length);
  return matches(remaining, tokens);
}
