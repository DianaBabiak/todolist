import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { forwardRef } from "react";
import { useAppDispatch, useAppSelector } from "../../state/store.ts";
import { changeErrorMessageAC } from "../../state/app/appReducer.ts";

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  },
);
export function ErrorMessage() {
  const errorMessage = useAppSelector(({ app }) => app.errorMessage);
  const dispatch = useAppDispatch();
  const handleClose = (_: unknown, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(changeErrorMessageAC(null));
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={!!errorMessage}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
