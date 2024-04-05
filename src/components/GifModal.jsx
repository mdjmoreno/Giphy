import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useModalState } from "../Hooks/useModalState";
import GifItem from "./GifItem";

export default function GitModal({
  opened,
  title = "show gif",
  onClose,
  onNext,
  onPrevious,
  ...props
}) {
  const { isOpened, setIsOpened } = useModalState(opened);
  const handleClose = (confirmed) => {
    setIsOpened(false);
    onClose && onClose(confirmed);
  };
  return (
    <Dialog
      open={isOpened}
      onClose={() => handleClose(null)}
      fullWidth
      maxWidth="xs"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <GifItem {...props} />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose(null)}>Close</Button>
        <Button variant="contained" onClick={onNext}>
          Previous
        </Button>
        <Button variant="contained" onClick={onPrevious}>
          Next
        </Button>
      </DialogActions>
    </Dialog>
  );
}
