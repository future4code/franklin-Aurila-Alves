export const goToHome = (navigate) => {
    navigate("/")
 }
export const goToDetails = (navigate, id) =>{
    navigate(`/admin/trips/${id}`)
} 