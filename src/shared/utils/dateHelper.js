export const formatDate = (dateString) => {
    var date = new Date(dateString).toLocaleDateString()
    return date
}