export interface Content {
    questionTitle: string;
    types: ContentType[];
  }

export interface ContentType {
    title: string;
    image: string;
    next?: Content;
  }
