type siteType = {
  siteTitle: string;
  siteDesc: string;
  siteUrl: string;
};

export const siteMeta: siteType = {
  siteTitle: "サイトタイトル",
  siteDesc: "ディスクリプションが入ります。",
  siteUrl: "https://newt.fieldweb.co.jp/",
};

export const pageInfo = {
  TOP: {
    pageTitle: "",
    pageDesc: "",
  },
  page404: {
    pageTitle: "お探しのページが見つかりませんでした",
    pageDesc: "",
    pageNoindex: true,
  },
};
