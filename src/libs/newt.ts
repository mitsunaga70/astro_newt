// src/lib/newt.ts

import { createClient } from "newt-client-js";

export interface Article {
  _id: string;
  title: string;
  slug: string;
  body: string;
  coverImage: {
    src: string;
    width: number;
    height: number;
  };
}

export const newtClient = createClient({
  spaceUid: import.meta.env.NEWT_SPACE_UID,
  token: import.meta.env.NEWT_CDN_API_TOKEN,
  apiType: "cdn",
});
