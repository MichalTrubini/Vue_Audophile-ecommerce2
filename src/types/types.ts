export interface ProductCategory {
  id: number;
  title: string;
  slug: string;
  new: boolean;
  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  description: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  abbrev: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  cartImage: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  others: {
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }[];
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  eMoneyNumber: number | null;
  eMoneyPin: number | null;
}
