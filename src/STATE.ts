interface State {
  level: string;
  character: string;
  screen: SCREEN;
}

export enum SCREEN {
  START = 0,
  PlAY = 1,
  OVER = 2,
}

const STATE: State = {
  level: "",
  character: "",
  screen: SCREEN.START,
};

export default STATE;
