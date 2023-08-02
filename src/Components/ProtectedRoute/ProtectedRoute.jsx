function ProtectedRoutes({isLoggedIn,component}) {

  if(!isLoggedIn)
      window.location.href ="/login"
      
  return <>
    {component()}
  </>;
}

export default ProtectedRoutes;
