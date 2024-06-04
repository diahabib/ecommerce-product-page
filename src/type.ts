export interface ProductData {
  images: string[];
  imagesThumbnail: string[];
  company: string;
  title: string;
  description: string;
  price: number;
  reduction: number;
}

export type CartDialogContextType = {
  dialog: boolean;
  handleClickDialog: () => void;
};

export type AddToCartContextType = {
  nbArticles: number;
  handleUpdate: (nb: number) => void;
};

type functionWithoutParam = () => void;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type functionWithOneParam = (param: any) => void;
//type functionWithTwoParam = (param:any) => void;
type StateType = {
  counter: number;
};
type ActionType = {
  type: "increment" | "decrement" | "reset";
};

export type {
  functionWithoutParam,
  functionWithOneParam,
  StateType,
  ActionType,
};
