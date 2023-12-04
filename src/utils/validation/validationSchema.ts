import * as Yup from "yup";

interface MyFile extends File {
  type: string;
  lastModified: number;
  name: string;
  webkitRelativePath: string;
  size: number;
}

const phoneNumberRegExp = /^\+38 \(\d{3}\) \d{3} - \d{2} - \d{2}$/;

export const emailValidationSchema = Yup.string()
  .email("Enter valid email")
  .required("Required field");

export const nameValidationSchema = Yup.string()
  .min(2, "Name should be 2-60 characters")
  .max(60, "Name should be 2-60 characters")
  .required("Required field");


export const positionValidationSchema = Yup.number()
  .required("Required field");

export const phoneValidationSchema = Yup.string()
    .matches(phoneNumberRegExp, 'Use format +38 (XXX) XXX - XX - XX')
  .required("Required field");


// Function to validate file size
const validateFileSize = (file: MyFile, maxSizeMB: number): boolean => {
  const fileSizeInMB = file.size / 1024 / 1024; // Convert bytes to MB
  return fileSizeInMB <= maxSizeMB;
};

// Function to validate image resolution
const validateImageResolution = (file: MyFile, minWidth: number, minHeight: number): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      const validResolution = img.width >= minWidth && img.height >= minHeight;
      resolve(validResolution);
    };
    img.onerror = () => resolve(false);
  });
};

export const photoValidationSchema = Yup.mixed()
  .required('A photo is required')
  .test(
    'fileSize',
    'The photo size must not be greater than 5 Mb',
    async (file) => {
      if (!file) {
        return true;
      }
      return validateFileSize(file as MyFile, 5);
    }
  )
  .test(
    'fileResolution',
    'Minimum size of photo is 70x70px',
    async (file) => {
      if (!file) {
        return true;
      }
      return await validateImageResolution(file as MyFile, 70, 70);
    }
  );


