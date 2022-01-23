const TrendingSectionData = props => {
  const {trendingApiDetails} = props
  const {id} = trendingApiDetails

  return (
    <div>
      <p>{id}</p>
    </div>
  )
}
export default TrendingSectionData
