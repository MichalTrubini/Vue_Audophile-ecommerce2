export interface ProductCategory {
    id: number;
    category: string;
    categoryImage: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    description: string;
  }