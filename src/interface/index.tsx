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
  originalFile?: File | null;
  size?: string;
  type?: string;
  name?: string;
  blob?: Blob | null;
  value?: ArrayBuffer | null;
  objectUrl?: URL | null;
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
  displayNavigation?: boolean;
  height?: number;
  loading?: string;
  scrolled?: string;
  type?: string;

  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}
