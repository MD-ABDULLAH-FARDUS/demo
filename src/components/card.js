const date = new Date()
const dateName = date.getDate()
const monthName = date.getMonth()
const yearName = date.getFullYear()

function Card() {
  return  <div className='card'>
  <h3 className='cardTitle'>Call Family</h3>
  <p className='cardDec'>Making a card in react js by watching the tutorial videos of Anisul Islam</p>
  <p className='cardFooter'>{`${dateName}/${monthName}/${yearName}`}</p>
</div>
}

export default Card;