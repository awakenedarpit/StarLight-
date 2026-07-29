export type WishData = {
  celebration: string;
  recipient: string;
  date: string;
  message: string;
  theme: string;
  music: string;
  photos: string[];
};

export const initialWishData: WishData = {
  celebration: "",
  recipient: "",
  date: "",
  message: "",
  theme: "Galaxy",
  music: "",
  photos: [],
};