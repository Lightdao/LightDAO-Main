import { useState } from "react";
import { ChangeEvent } from 'react';
import UploadItem from "../components/NewListingsStep2";
import NewListingsStep3 from "../components/NewListingsStep3";
import NewListingsStep4 from "../components/NewListingsStep4";
import NewListingsStep5 from "../components/NewListingsStep5";
import NewListingsStep6 from "../components/NewListingsStep6";
import NewListingsStep7 from "../components/NewListingsStep7";

export interface StepHandler {
  incrementStepNumber(): void;
  decrementStepNumber(): void;
}

export interface ImageData {
    selectedImage: File | null;
    imagePreviewUrl: string | null;
}

interface ImageHandler {
    handleImageChange(event: ChangeEvent<HTMLInputElement>): void;
}

export type Images = StepHandler & ImageData & ImageHandler;


const NewListing: React.FC<{}> = () => {
    const [stepNumber, setStepNumber] = useState(1);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        setSelectedImage(file);
        
        //image is given temporary URL so we can display it and send it anywhere
        setImagePreviewUrl(URL.createObjectURL(file));
      } else {
        setSelectedImage(null);
        setImagePreviewUrl(null);
      }
    };

    function incrementStepNumber() {
        setStepNumber(stepNumber + 1);
    }

    function decrementStepNumber() {
        setStepNumber(stepNumber - 1);
    }

    switch (stepNumber)
    {
        case 1:
            return <UploadItem incrementStepNumber={incrementStepNumber} decrementStepNumber={decrementStepNumber} />;
        case 2:
            return <NewListingsStep3 incrementStepNumber={incrementStepNumber} decrementStepNumber={decrementStepNumber} imagePreviewUrl={imagePreviewUrl} handleImageChange={handleImageChange} selectedImage={selectedImage} />;
        case 3:
            return <NewListingsStep4 incrementStepNumber={incrementStepNumber} decrementStepNumber={decrementStepNumber} />;
        case 4:
            return <NewListingsStep5 incrementStepNumber={incrementStepNumber} decrementStepNumber={decrementStepNumber} />;
        case 5:
            return <NewListingsStep6 incrementStepNumber={incrementStepNumber} decrementStepNumber={decrementStepNumber} />;
        case 6:
            return <NewListingsStep7 selectedImage={selectedImage} imagePreviewUrl={imagePreviewUrl}/>;
    }

    return <></>;
}

export default NewListing;