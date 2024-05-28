export interface RootObject {
  brands: Brand[];
  footer: Brand[];
  navigation: Navigation[];
}

export interface Navigation {
  alias: null | string;
  channelExclusions: ChannelExclusion[];
  children: Brand[];
  content: Content;
  display: null;
  id: string;
  link: Link;
  style: Style;
  type: NavigationType;
  webLargePriority: number;
}

export interface Brand {
  alias: null | string;
  channelExclusions: ChannelExclusion[];
  children: Navigation[];
  content: Content;
  display: Display | null;
  id: string;
  link: Link | null;
  style: Style;
  type: BrandType;
  webLargePriority: number;
}

export enum ChannelExclusion {
  Apps = "apps",
  WebLarge = "webLarge",
  WebSmall = "webSmall",
}

export interface Content {
  mobileImageUrl: null | string;
  subTitle: null | string;
  title: string;
  webLargeImageUrl: null | string;
}

export interface Link {
  appUrl: null | string;
  brandSectionAlias: null | string;
  categoryId: number | null;
  linkType: LinkType | null;
  webUrl: null | string;
}

export enum LinkType {
  AToZBrands = "aToZBrands",
  Category = "category",
  External = "external",
  Internal = "internal",
}

export interface Style {
  mobileStyleType: EStyleType;
  webLargeStyleType: EStyleType;
}

export enum EStyleType {
  Dark = "dark",
  Light = "light",
  NoTitle = "noTitle",
  Premium = "premium",
  Sale = "sale",
}

export enum NavigationType {
  AToZBrands = "aToZBrands",
  Link = "link",
}

export interface Display {
  mobileDisplayLayout: MobileDisplayLayout;
  mobileTemplateId: number;
  mobileTemplateName: MobileTemplateName;
  webLargeColumnSpan: number;
  webLargeTemplateId: number;
  webLargeTemplateName: WebLargeTemplateName;
}

export enum MobileDisplayLayout {
  Carousel = "carousel",
  List = "list",
}

export enum MobileTemplateName {
  CircleImageList = "circleImageList",
  CircleImageRight = "circleImageRight",
  Empty = "",
  HomepageLinks = "homepageLinks",
  ImageBackground = "imageBackground",
  ImageCardsWithDescription = "imageCardsWithDescription",
  ImageTileWithTitle = "imageTileWithTitle",
}

export enum WebLargeTemplateName {
  CircleImageListLarge = "circleImageListLarge",
  Empty = "",
  FullMarketingImage = "fullMarketingImage",
  GridCircleImageLarge = "gridCircleImageLarge",
  HalfMarketingImage = "halfMarketingImage",
  ImageCardsWithDescriptionLarge = "imageCardsWithDescriptionLarge",
  TextList = "textList",
  ThirdMarketingImage = "thirdMarketingImage",
}

export enum BrandType {
  Container = "container",
  Link = "link",
}
