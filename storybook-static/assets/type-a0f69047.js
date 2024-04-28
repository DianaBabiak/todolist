var n = ((l) => (
    (l.All = "All"), (l.Active = "Active"), (l.Completed = "Completed"), l
  ))(n || {}),
  d = ((l) => (
    (l[(l.New = 0)] = "New"),
    (l[(l.InProgress = 1)] = "InProgress"),
    (l[(l.Completed = 2)] = "Completed"),
    (l[(l.Draft = 3)] = "Draft"),
    l
  ))(d || {}),
  p = ((l) => (
    (l[(l.Low = 0)] = "Low"),
    (l[(l.Middle = 1)] = "Middle"),
    (l[(l.Hi = 2)] = "Hi"),
    (l[(l.Urgently = 3)] = "Urgently"),
    (l[(l.Later = 4)] = "Later"),
    l
  ))(p || {});
export { n as T, d as a, p as b };
