export interface ProductCategory {
    id: number;
    title: string;
    new: boolean;
    category: string;
    categoryImage: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    description: string;
  }