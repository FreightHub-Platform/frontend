import { useEffect, useState } from "react";
import Image from "next/image";
import { getConsignerById } from "../../../../utils/consigner";

const Logo = () => {
  const [imageUrl, setImageUrl] = useState("/images/logo.jpeg"); // default image
  
  useEffect(() => {
    const fetchConsignerData = async () => {
      try {
        const jwt = localStorage.getItem('jwt');
        const consigner ={
          id : localStorage.getItem('id')
        } 
        if (jwt) {
          const consignerData = await getConsignerById(consigner, jwt);
          console.log(consignerData);
          if (consignerData && consignerData.logo) {
            setImageUrl(consignerData.logo); 
          }
        }
      } catch (error) {
        console.error("Error fetching consigner data:", error);
      }
    };
    
    fetchConsignerData();
  }, []);

  return (
    <div className="border-2 border-black p-2 rounded-lg">
      <Image
        src={imageUrl}
        width={200}
        height={200}
        alt="Consigner Logo"
      />
    </div>
  );
};

export default Logo;
