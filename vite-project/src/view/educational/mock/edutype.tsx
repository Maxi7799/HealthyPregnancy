export type chapterType = {
  name: string;
  text: string;
};

export type eduType = {
  name: string;
  imgUrl: string;
  chapter: Array<chapterType>;
  question: questionType;
};

export type questionType = {
  title: string;
  select: selectType;
  answer: string;
};

export type selectType = {
  A: string;
  B: string;
  C: string;
  D: string;
};
