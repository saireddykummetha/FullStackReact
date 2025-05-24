const backendDomain='http://localhost:8000'

const SummaryApi={
    signUp:{
        url:`${backendDomain}/api/signup`,
        method:'POST',
    },
    signIn:{
         url:`${backendDomain}/api/signin`,
        method:'POST',
    },
    User:{
         url:`${backendDomain}/api/user-details`,
         method:'GET',
    },
     Logout:{
         url:`${backendDomain}/api/userlogout`,
         method:'GET',
    },
    Uploadproduct:{
         url:`${backendDomain}/api/uploadProduct`,
         method:'POST',
    },
     Allproducts:{
         url:`${backendDomain}/api/allproducts`,
         method:'GET',
    },
       Searchproduct:{
         url:`${backendDomain}/api/search`,
         method:'GET',
    },
        Review:{
         url:`${backendDomain}/api/menu`,
         method:'POST',
    },
     Allreview:{
         url:`${backendDomain}/api/allreview`,
         method:'GET',
     }
}
export default SummaryApi;