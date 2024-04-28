import { a as d, j as n } from "./jsx-runtime-9dc53467.js";
import { r as a } from "./index-76fb7be0.js";
import { t as h } from "./tasksAPI-c88ee661.js";
import { a as _, b as E } from "./type-a0f69047.js";
import "./_commonjsHelpers-de833af9.js";
import "./commonAPI-9afb705d.js";
const F = { title: "API TASKS" },
  T = () => {
    const [l, i] = a.useState(null),
      [s, c] = a.useState(""),
      r = () => {
        h.getTasks(s)
          .then((o) => {
            console.log("data", o), i(o);
          })
          .catch((o) => {
            console.log("error", o.message);
          });
      };
    return d("div", {
      children: [
        JSON.stringify(l),
        d("div", {
          children: [
            n("input", {
              value: s,
              placeholder: "idTodo",
              onChange: (o) => {
                c(o.currentTarget.value);
              },
            }),
            n("button", { onClick: r, children: "get tasks" }),
          ],
        }),
      ],
    });
  },
  p = () => {
    const [l, i] = a.useState(null),
      [s, c] = a.useState(""),
      [r, o] = a.useState(""),
      u = () => {
        h.createTask(s, r)
          .then((e) => {
            console.log("data", e), i(e);
          })
          .catch((e) => {
            console.log("error", e.message);
          });
      };
    return d("div", {
      children: [
        JSON.stringify(l),
        d("div", {
          children: [
            n("input", {
              value: s,
              placeholder: "idTodo",
              onChange: (e) => {
                c(e.currentTarget.value);
              },
            }),
            n("input", {
              value: r,
              placeholder: "title",
              onChange: (e) => {
                o(e.currentTarget.value);
              },
            }),
            n("button", { onClick: u, children: "creat task" }),
          ],
        }),
      ],
    });
  },
  g = () => {
    const [l, i] = a.useState(null),
      [s, c] = a.useState(""),
      [r, o] = a.useState(""),
      u = () => {
        h.deleteTask(r, s)
          .then((e) => {
            console.log("data", e), i(e);
          })
          .catch((e) => {
            console.log("error", e.message);
          });
      };
    return d("div", {
      children: [
        JSON.stringify(l),
        d("div", {
          children: [
            n("input", {
              value: s,
              placeholder: "idTask",
              onChange: (e) => {
                c(e.currentTarget.value);
              },
            }),
            n("input", {
              value: r,
              placeholder: "idTodo",
              onChange: (e) => {
                o(e.currentTarget.value);
              },
            }),
            n("button", { onClick: u, children: "delete task" }),
          ],
        }),
      ],
    });
  },
  k = () => {
    const [l, i] = a.useState(""),
      [s, c] = a.useState(""),
      [r, o] = a.useState(""),
      [u, e] = a.useState(_.Completed),
      [v, N] = a.useState(E.Urgently),
      [x, U] = a.useState(null),
      j = () => {
        h.updateTask(r, s, {
          title: l,
          description: "",
          status: u,
          priority: v,
          startDate: null,
          deadline: null,
        })
          .then((t) => {
            console.log("data", t), U(t);
          })
          .catch((t) => {
            console.log("error", t.message);
          });
      };
    return d("div", {
      children: [
        JSON.stringify(x),
        d("div", {
          children: [
            n("input", {
              value: l,
              placeholder: "title",
              onChange: (t) => {
                i(t.currentTarget.value);
              },
            }),
            n("input", {
              value: s,
              placeholder: "idTask",
              onChange: (t) => {
                c(t.currentTarget.value);
              },
            }),
            n("input", {
              value: r,
              placeholder: "idTodo",
              onChange: (t) => {
                o(t.currentTarget.value);
              },
            }),
            n("input", {
              value: u,
              placeholder: "status",
              onChange: (t) => {
                e(+t.currentTarget.value);
              },
            }),
            n("input", {
              value: v,
              placeholder: "priority",
              onChange: (t) => {
                N(+t.currentTarget.value);
              },
            }),
            n("button", { onClick: j, children: "update task" }),
          ],
        }),
      ],
    });
  };
var S, m, C;
T.parameters = {
  ...T.parameters,
  docs: {
    ...((S = T.parameters) == null ? void 0 : S.docs),
    source: {
      originalSource: `() => {
  const [date, setDate] = useState<TasksType | null>(null);
  const [idTodo, setIdTodo] = useState('');
  const onClick = () => {
    tasksAPI.getTasks(idTodo).then(data => {
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
        <button onClick={onClick}>get tasks</button>
    </div>
    </div>;
}`,
      ...((C = (m = T.parameters) == null ? void 0 : m.docs) == null
        ? void 0
        : C.source),
    },
  },
};
var I, y, D;
p.parameters = {
  ...p.parameters,
  docs: {
    ...((I = p.parameters) == null ? void 0 : I.docs),
    source: {
      originalSource: `() => {
  const [date, setDate] = useState<CommonAPIType | null>(null);
  const [idTodo, setIdTodo] = useState('');
  const [title, setTitle] = useState('');
  const onClick = () => {
    tasksAPI.createTask(idTodo, title).then(data => {
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
            <input value={title} placeholder={'title'} onChange={e => {
        setTitle(e.currentTarget.value);
      }} />
            <button onClick={onClick}>creat task</button>
        </div>

    </div>;
}`,
      ...((D = (y = p.parameters) == null ? void 0 : y.docs) == null
        ? void 0
        : D.source),
    },
  },
};
var P, b, f;
g.parameters = {
  ...g.parameters,
  docs: {
    ...((P = g.parameters) == null ? void 0 : P.docs),
    source: {
      originalSource: `() => {
  const [date, setDate] = useState<CommonAPIType | null>(null);
  const [idTask, setIdTask] = useState('');
  const [idTodo, setIdTodo] = useState('');
  const onClick = () => {
    tasksAPI.deleteTask(idTodo, idTask).then(data => {
      console.log('data', data);
      setDate(data);
    }).catch(error => {
      console.log('error', error.message);
    });
  };
  return <div>{JSON.stringify(date)}
        <div>
            <input value={idTask} placeholder={'idTask'} onChange={e => {
        setIdTask(e.currentTarget.value);
      }} />
            <input value={idTodo} placeholder={'idTodo'} onChange={e => {
        setIdTodo(e.currentTarget.value);
      }} />
            <button onClick={onClick}>delete task</button>
        </div>
    </div>;
}`,
      ...((f = (b = g.parameters) == null ? void 0 : b.docs) == null
        ? void 0
        : f.source),
    },
  },
};
var A, O, J;
k.parameters = {
  ...k.parameters,
  docs: {
    ...((A = k.parameters) == null ? void 0 : A.docs),
    source: {
      originalSource: `() => {
  const [title, setTitle] = useState('');
  const [idTask, setIdTask] = useState('');
  const [idTodo, setIdTodo] = useState('');
  const [status, setStatus] = useState(TaskStatuses.Completed);
  const [priority, setPriority] = useState(TaskPriorities.Urgently);
  const [date, setDate] = useState<null | CommonAPIType<{
    item: TaskType;
  }>>(null);
  const onclick = () => {
    tasksAPI.updateTask(idTodo, idTask, {
      title,
      description: '',
      status,
      priority,
      startDate: null,
      deadline: null
    }).then(data => {
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
            <input value={idTask} placeholder={'idTask'} onChange={e => {
        setIdTask(e.currentTarget.value);
      }} />
            <input value={idTodo} placeholder={'idTodo'} onChange={e => {
        setIdTodo(e.currentTarget.value);
      }} />
            <input value={status} placeholder={'status'} onChange={e => {
        setStatus(+e.currentTarget.value);
      }} />
            <input value={priority} placeholder={'priority'} onChange={e => {
        setPriority(+e.currentTarget.value);
      }} />
            <button onClick={onclick}>update task</button>
        </div>


    </div>;
}`,
      ...((J = (O = k.parameters) == null ? void 0 : O.docs) == null
        ? void 0
        : J.source),
    },
  },
};
const H = ["GetTask", "CreateTask", "DeleteTask", "UpdateTask"];
export {
  p as CreateTask,
  g as DeleteTask,
  T as GetTask,
  k as UpdateTask,
  H as __namedExportsOrder,
  F as default,
};
