export interface Interface_Img {
  src?: any;
  display?: string;
}

export interface Interface_Request {
  method: string;
  body?: any;
  headers?: any;
}

export interface Interface_File {
  id?: number;
  originalFile?: File | null;
  size?: string;
  type?: string;
  name?: string;
  blob?: Blob | null;
  value?: ArrayBuffer | null;
  objectURL?: URL | null;
  base64?: string;
}

interface Interface_Breadcrumb {
  label: string;
  value: string;
}

export interface Interface_PageTitle {
  breadcrumb?: Interface_Breadcrumb[];
  showBreadcrumb?: boolean;
  title: string;
}

export interface Interface_Components {
  display?: string;
  displaynavigation?: boolean;
  height?: number;
  loading?: string;
  scrolled?: string;
  type?: string;
  removeshadow?: string;

  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}
