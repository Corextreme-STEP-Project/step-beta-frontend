export const FILE_TYPES = {
  PDF: 'application/pdf',
  DOCX: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  DOC: 'application/msword',
  XLS: 'application/vnd.ms-excel',
  XLSX: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  JPG: 'image/jpeg',
  PNG: 'image/png',
  TXT: 'text/plain',
  ZIP: 'application/zip',
  RAR: 'application/x-rar-compressed'
};

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
export const MAX_TOTAL_SIZE = 50 * 1024 * 1024; // 50MB

export const validateFile = (file) => {
  const errors = [];
  
  // Check file size
  if (file.size > MAX_FILE_SIZE) {
    errors.push(`File ${file.name} is too large. Maximum size is ${MAX_FILE_SIZE / 1024 / 1024}MB`);
  }

  // Check file type
  const allowedTypes = Object.values(FILE_TYPES);
  if (!allowedTypes.includes(file.type)) {
    errors.push(`File type ${file.type} is not supported`);
  }

  return errors;
};

export const getFileIcon = (fileType) => {
  switch (fileType) {
    case FILE_TYPES.PDF:
      return 'PictureAsPdf';
    case FILE_TYPES.DOCX:
    case FILE_TYPES.DOC:
      return 'Article';
    case FILE_TYPES.XLS:
    case FILE_TYPES.XLSX:
      return 'TableChart';
    case FILE_TYPES.JPG:
    case FILE_TYPES.PNG:
      return 'Image';
    case FILE_TYPES.ZIP:
    case FILE_TYPES.RAR:
      return 'FolderZip';
    default:
      return 'InsertDriveFile';
  }
};

export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}; 