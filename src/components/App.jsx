const webSite = {
  name: 'React',
  url: 'https://uk.legacy.reactjs.org/docs/create-a-new-react-app.html'

}

const colors = ["Червоний", "Синій", "Зелений"]

let firstNumber = 26
let secondNumber = 14

const userName = "Іван Воронюк"

export const App = () => {
  return (
    <>
      <h1>{userName}</h1>
      <a href={webSite.url}>{webSite.name}</a>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src="https://reactnative.dev/img/logo-og.png" alt="React logo" />
      <br />
      <p>{firstNumber + secondNumber}</p>
      <ul>
        {colors.map((color) => 
          <li>{color}</li>
        )}
      </ul>

    </>
  )
};
