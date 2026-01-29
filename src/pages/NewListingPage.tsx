import { useState } from "react";
import { ChangeEvent } from "react";
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

//questions for backend person
//ask solana dev about nft auctions and how complex it would be to implement
//How would you grab nfts associated with people who have only made listings on the site here?
//

export interface NftMetaData {
  name: string;
  description: string;
  //maybe make properties enum or something later?
  properties: string;
  price: number;
  royalties: number;
  collection: string;
}

export interface ImageData {
  selectedImage: File | null;
  imagePreviewUrl: string | null;
  data: NftMetaData;
}

interface ImageHandler {
  handleImageChange(event: ChangeEvent<HTMLInputElement>): void;
}

export type Images = StepHandler & ImageData & ImageHandler;

interface NftFunctionHandlers {
  data: NftMetaData;
  handleInputChange(event: ChangeEvent<HTMLInputElement>): void;
}

export type NftHandles = StepHandler & NftFunctionHandlers;

const NewListing: React.FC<{}> = () => {
  const [stepNumber, setStepNumber] = useState(1);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const [data, setData] = useState<NftMetaData>({
    name: "",
    description: "",
    properties: "",
    price: 0.0,
    royalties: 0.0,
    collection: "",
  });

  //TODO: maybe make this into some kind of general form component
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log("n: ", data.name, data.price);
  };

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

  switch (stepNumber) {
    case 1:
      return (
        <UploadItem
          incrementStepNumber={incrementStepNumber}
          decrementStepNumber={decrementStepNumber}
        />
      );
    case 2:
      return (
        <NewListingsStep3
          incrementStepNumber={incrementStepNumber}
          decrementStepNumber={decrementStepNumber}
          imagePreviewUrl={imagePreviewUrl}
          handleImageChange={handleImageChange}
          data={data}
          selectedImage={selectedImage}
        />
      );
    case 3:
      return (
        <NewListingsStep4
          incrementStepNumber={incrementStepNumber}
          decrementStepNumber={decrementStepNumber}
          data={data}
          handleInputChange={handleInputChange}
        />
      );
    case 4:
      return (
        <NewListingsStep5
          incrementStepNumber={incrementStepNumber}
          decrementStepNumber={decrementStepNumber}
          data={data}
          handleInputChange={handleInputChange}
        />
      );
    case 5:
      return (
        <NewListingsStep6
          incrementStepNumber={incrementStepNumber}
          decrementStepNumber={decrementStepNumber}
        />
      );
    case 6:
      return (
        <NewListingsStep7
          selectedImage={selectedImage}
          imagePreviewUrl={imagePreviewUrl}
          data={data}
        />
      );
  }

  return <></>;
};

export default NewListing;
