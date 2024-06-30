import { Button, Card } from "@material-ui/core";
import axios from 'axios';
import { useState } from "react";
import * as styles from "./test.module.css";
import ProductRecommendation from "components/productRecommendation/ProductRecommendation";

function Test() {
  const [img, setImg] = useState<any>();
  const [skinType, setSkinType] = useState<any>();
  const handleFileUpload = (e: any) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);  
    axios.post('http://127.0.0.1:5000/getSkinType', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      .then(response => {
          const skinType = (response.data.msg as string).replace('Predicted class: ', '');
          setSkinType(skinType);
          getImg(file);
      })
      .catch(error => {
        console.error(error);
      });
  };
      
  const getImg = (file: any) => {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (fileReader.result) {
          setImg(fileReader.result);
        }
      }
      fileReader.readAsDataURL(file);
  };

  return <div className={styles.component}>
    {
      skinType
      ? <>
          <img src={img} className={styles.uploadedImage} />
          <ProductRecommendation type={skinType} />
        </>
      : <Card className={styles.card}>
        <h2 className={styles.title}>Upload a selfie</h2>
        <p>By uploading a selfie we can analyze your skin conditions and type. Make sure your skin is well exposed so that we can offer you the best experience.</p>
        <form>
          <label htmlFor="file-input">
            <Button variant="contained" color="primary" component="span">
              Upload
            </Button>
          </label>
          <input hidden id="file-input" type="file" onInput={handleFileUpload} />
        </form>
      </Card>
    }
  </div>;
}

export default Test
