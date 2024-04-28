let i;
const d = new Uint8Array(16);
function e() {
  if (
    !i &&
    ((i =
      typeof crypto < "u" &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto)),
    !i)
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
    );
  return i(d);
}
const u = [];
for (let n = 0; n < 256; ++n) u.push((n + 256).toString(16).slice(1));
function p(n, t = 0) {
  return (
    u[n[t + 0]] +
    u[n[t + 1]] +
    u[n[t + 2]] +
    u[n[t + 3]] +
    "-" +
    u[n[t + 4]] +
    u[n[t + 5]] +
    "-" +
    u[n[t + 6]] +
    u[n[t + 7]] +
    "-" +
    u[n[t + 8]] +
    u[n[t + 9]] +
    "-" +
    u[n[t + 10]] +
    u[n[t + 11]] +
    u[n[t + 12]] +
    u[n[t + 13]] +
    u[n[t + 14]] +
    u[n[t + 15]]
  );
}
export { e as r, p as u };
