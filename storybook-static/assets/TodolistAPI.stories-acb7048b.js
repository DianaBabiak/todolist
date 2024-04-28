import { j as s, a as d } from "./jsx-runtime-9dc53467.js";
import { r as o } from "./index-76fb7be0.js";
import { t as g } from "./todolistsApi-61ec3b29.js";
import "./_commonjsHelpers-de833af9.js";
import "./commonAPI-9afb705d.js";
const E = { title: "API TODOLIST" },
  c = () => {
    const [a, r] = o.useState(null);
    return (
      o.useEffect(() => {
        g.getTodolists()
          .then((t) => {
            console.log("data", t), r(t);
          })
          .catch((t) => {
            console.log("error", t.message);
          });
      }, []),
      s("div", { children: JSON.stringify(a) })
    );
  },
  u = () => {
    const [a, r] = o.useState(null),
      [t, i] = o.useState(""),
      l = () => {
        g.createTodolist(t)
          .then((e) => {
            console.log("data", e), r(e);
          })
          .catch((e) => {
            console.log("error", e.message);
          });
      };
    return d("div", {
      children: [
        JSON.stringify(a),
        d("div", {
          children: [
            s("input", {
              value: t,
              placeholder: "title",
              onChange: (e) => {
                i(e.currentTarget.value);
              },
            }),
            s("button", { onClick: l, children: "create todolist" }),
          ],
        }),
      ],
    });
  },
  T = () => {
    const [a, r] = o.useState(null),
      [t, i] = o.useState(""),
      l = () => {
        g.deleteTodolist(t)
          .then((e) => {
            console.log("data", e), r(e);
          })
          .catch((e) => {
            console.log("error", e.message);
          });
      };
    return d("div", {
      children: [
        JSON.stringify(a),
        d("div", {
          children: [
            s("input", {
              value: t,
              placeholder: "idTodo",
              onChange: (e) => {
                i(e.currentTarget.value);
              },
            }),
            s("button", { onClick: l, children: "delete todolist" }),
          ],
        }),
      ],
    });
  },
  p = () => {
    const [a, r] = o.useState(null),
      [t, i] = o.useState(""),
      [l, e] = o.useState(""),
      A = () => {
        g.updateTodolist(l, t)
          .then((n) => {
            console.log("data", n), r(n);
          })
          .catch((n) => {
            console.log("error", n.message);
          });
      };
    return d("div", {
      children: [
        JSON.stringify(a),
        d("div", {
          children: [
            s("input", {
              value: t,
              placeholder: "title",
              onChange: (n) => {
                i(n.currentTarget.value);
              },
            }),
            s("input", {
              value: l,
              placeholder: "idTodo",
              onChange: (n) => {
                e(n.currentTarget.value);
              },
            }),
            s("button", { onClick: A, children: "update todolist" }),
          ],
        }),
      ],
    });
  };
var h, m, v;
c.parameters = {
  ...c.parameters,
  docs: {
    ...((h = c.parameters) == null ? void 0 : h.docs),
    source: {
      originalSource: `() => {
  const [date, setDate] = useState<TodolistType[] | null>(null);
  useEffect(() => {
    todolistsApi.getTodolists().then(data => {
      console.log('data', data);
      setDate(data);
    }).catch(error => {
      console.log('error', error.message);
    });
  }, []);
  return <div>{JSON.stringify(date)}</div>;
}`,
      ...((v = (m = c.parameters) == null ? void 0 : m.docs) == null
        ? void 0
        : v.source),
    },
  },
};
var S, C, f;
u.parameters = {
  ...u.parameters,
  docs: {
    ...((S = u.parameters) == null ? void 0 : S.docs),
    source: {
      originalSource: `() => {
  const [date, setDate] = useState<CommonAPIType<{
    item: TodolistType;
  }> | null>(null);
  const [title, setTitle] = useState('');
  const onClick = () => {
    todolistsApi.createTodolist(title).then(data => {
      console.log('data', data);
      setDate(data);
    }).catch(error => {
      console.log('error', error.message);
    });
  };
  return <div>{JSON.stringify(date)}
        <div>
            <input value={title} placeholder={'title'} onChange={e => {
        setTitle(e.currentTarget.value);
      }} />
            <button onClick={onClick}>create todolist</button>
        </div>
    </div>;
}`,
      ...((f = (C = u.parameters) == null ? void 0 : C.docs) == null
        ? void 0
        : f.source),
    },
  },
};
var D, y, k;
T.parameters = {
  ...T.parameters,
  docs: {
    ...((D = T.parameters) == null ? void 0 : D.docs),
    source: {
      originalSource: `() => {
  const [date, setDate] = useState<CommonAPIType<object> | null>(null);
  const [idTodo, setIdTodo] = useState('');
  const onClick = () => {
    todolistsApi.deleteTodolist(idTodo).then(data => {
      console.log('data', data);
      setDate(data);
    }).catch(error => {
      console.log('error', error.message);
    });
  };
  return <div>{JSON.stringify(date)}
        <div>
            <input value={idTodo} placeholder={'idTodo'} onChange={e => {
        setIdTodo(e.currentTarget.value);
      }} />
            <button onClick={onClick}>delete todolist</button>
        </div>
    </div>;
}`,
      ...((k = (y = T.parameters) == null ? void 0 : y.docs) == null
        ? void 0
        : k.source),
    },
  },
};
var I, b, O;
p.parameters = {
  ...p.parameters,
  docs: {
    ...((I = p.parameters) == null ? void 0 : I.docs),
    source: {
      originalSource: `() => {
  const [date, setDate] = useState<null | CommonAPIType<object>>(null);
  const [title, setTitle] = useState('');
  const [idTodo, setIdTodo] = useState('');
  const onClick = () => {
    todolistsApi.updateTodolist(idTodo, title).then(data => {
      console.log('data', data);
      setDate(data);
    }).catch(error => {
      console.log('error', error.message);
    });
  };
  return <div>{JSON.stringify(date)}
        <div>
            <input value={title} placeholder={'title'} onChange={e => {
        setTitle(e.currentTarget.value);
      }} />
            <input value={idTodo} placeholder={'idTodo'} onChange={e => {
        setIdTodo(e.currentTarget.value);
      }} />

            <button onClick={onClick}>update todolist</button>
        </div>
    </div>;
}`,
      ...((O = (b = p.parameters) == null ? void 0 : b.docs) == null
        ? void 0
        : O.source),
    },
  },
};
const _ = [
  "GetTodolists",
  "CreateTodolist",
  "DeleteTodolist",
  "UpdateTodolist",
];
export {
  u as CreateTodolist,
  T as DeleteTodolist,
  c as GetTodolists,
  p as UpdateTodolist,
  _ as __namedExportsOrder,
  E as default,
};
