import Rating from "./components/Rating"; //Компонентите с Upper Camelcase защото ги третира като html

const App = () => {
  return ( <>
            <Rating description="How do you feel about the App?"/> 
            <Rating color="red" feedbackMessages={['Hate it', 'Hate it less', 'Meeh', 'Good', 'Bomboclad']}/>
          </>
  );
}
 
export default App;