interface FirstPreviewImage {
  plain: string;
  watermarked: string;
}

interface AuthorDetails {
  publicName: string;
  subjects: string[];
}

interface Author {
  details: AuthorDetails;
}

export interface Product {
  firstPreviewImage: FirstPreviewImage;
  title: string;
  description: string;
  author: Author;
  price: number;
  tags: string[];
}

export interface FetchData {
  (query: string): Promise<void>;
}
