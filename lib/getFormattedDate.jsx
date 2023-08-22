const getFormattedDate = (dateString) => {
  return new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
    new Date(dateString)
  )
}

export default getFormattedDate
