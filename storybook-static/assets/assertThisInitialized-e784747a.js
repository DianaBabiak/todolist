function o(t, e) {
  return (
    (o = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, n) {
          return (r.__proto__ = n), r;
        }),
    o(t, e)
  );
}
function c(t, e) {
  (t.prototype = Object.create(e.prototype)),
    (t.prototype.constructor = t),
    o(t, e);
}
function p(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
export { c as _, p as a, o as b };
