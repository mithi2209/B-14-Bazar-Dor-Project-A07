

const AllProductsDataFetch = async() => {
   try{
          const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products");
          const data = await res.json();
          return(data);
     }
     catch (error) {
          console.log("Error fetching workout data:", error);
          
      }
    
};

export default AllProductsDataFetch;



export const ProductDetailsData = async() =>{
       try{
          const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products/${id}`);

          const data = await res.json();

          return(data);
     }
     catch (error) {
          console.log("Error fetching workout data:", error);
          
      }
    
};