import { useAppStore } from "../../lib/store";

const CloseAllClicked = () => {
  const { closeAllClicked } = useAppStore();

  return (
      <span
        onClick={closeAllClicked}
        className="block backdrop-blur-sm w-screen h-screen absolute top-0"
      ></span>
  );
};

export default CloseAllClicked;
