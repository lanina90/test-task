import React, {useRef, useState} from 'react';
import styles from './ImageInput.module.scss'


const ImageInput = ({error, onChange}:
                      { error: string | undefined,
                        onChange: (file: any) => void,
                      }) => {
  const [fileName, setFileName] = useState('Upload your photo');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | null = event.target.files ? event.target.files[0] : null;
    if (file) {
      setFileName(file.name);
      onChange(file)
    }
  };

  return (
    <div className={styles.upload}>
      <input type="file" id="file-input" ref={fileInputRef} accept={"image/jpeg, image/jpg"} hidden onChange={handleFileChange} />
      <button type="button" id="custom-button" onClick={handleButtonClick}>
        <span className={`${styles.uploadLeft} ${error ? styles.errorMessage : ""}`}>Upload</span>
        <span className={`${styles.uploadRight} ${error ? styles.errorMessage : ""}`} id="file-name">{fileName}</span>
      </button>
      {error && <span className={styles.error}>{error}</span>}
    </div>

  );
};

export default ImageInput;