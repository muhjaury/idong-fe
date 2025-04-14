export const IMAGE_TYPE_FILE_UPLOAD = [
  "image/x-png",
  "image/x-png;charset=UTF-8",
  "image/x-png;charset=utf-8",
  "image/png",
  "image/png;charset=UTF-8",
  "image/png;charset=utf-8",
  "image/jpeg",
  "image/jpeg;charset=UTF-8",
  "image/jpeg;charset=utf-8",
];

export const PDF_TYPE_FILE_UPLOAD = [
  "application/pdf",
  "application/pdf;charset=UTF-8",
  "application/pdf;charset=utf-8",
];

export const TYPES_FILE_UPLOAD = [
  ...IMAGE_TYPE_FILE_UPLOAD,
  ...PDF_TYPE_FILE_UPLOAD,
];
