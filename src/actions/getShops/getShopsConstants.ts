export type ShopsConstants = {
  "@attributes": Attributes;
  total_hit_count: number;
  hit_per_page: number;
  page_offset: number;
  rest: Rest[];
};

export type Rest = {
  "@attributes": Attributes2;
  id: string;
  update_date: string;
  name: string;
  name_kana: string;
  latitude: string;
  longitude: string;
  category: string;
  url: string;
  url_mobile: string;
  coupon_url: Couponurl;
  image_url: Imageurl;
  address: string;
  tel: string;
  tel_sub: string;
  fax: string;
  opentime: string;
  holiday: string;
  access: Access;
  parking_lots: string;
  pr: Pr;
  code: Code;
  budget: number;
  party: number | string;
  lunch: number | string;
  credit_card: string;
  e_money: string;
  flags: Flags;
};

type Flags = {
  mobile_site: number;
  mobile_coupon: number;
  pc_coupon: number;
};

type Code = {
  areacode: string;
  areaname: string;
  prefcode: string;
  prefname: string;
  areacode_s: string;
  areaname_s: string;
  category_code_l: string[];
  category_name_l: string[];
  category_code_s: string[];
  category_name_s: string[];
};

type Pr = {
  pr_short: string;
  pr_long: string;
};

type Access = {
  line: string;
  station: string;
  station_exit: string;
  walk: string;
  note: string;
};

type Imageurl = {
  shop_image1: string;
  shop_image2: string;
  qrcode: string;
};

type Couponurl = {
  pc: string;
  mobile: string;
};

type Attributes2 = {
  order: number;
};

type Attributes = {
  api_version: string;
};
