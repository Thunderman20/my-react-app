import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import Button2 from "./Button/Button2.jsx";
import Button3 from "./Button/Button3.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import ProfilePicture from "./ProfilePicture.jsx";
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";
import MyComponent2 from "./MyComponent2.jsx"
import ColorPicker from "./ColorPicker.jsx";
import MyComponent3 from "./MyComponent3.jsx";
import MyComponent4 from "./MyComponent4.jsx";
import MyComponent5 from "./MyComponent5.jsx";
import ToDoList from "./ToDoList.jsx";
import MyComponent6 from "./MyComponent6.jsx";
import MyComponent7 from "./MyComponent7.jsx";
import DigitalClock from "./DigitalClock.jsx";
import ComponentA from "./componentA.jsx";
import MyComponent8 from "./MyComponent8.jsx";
import Stopwatch from "./StopWatch.jsx";
import Calculator from "./Calculator.jsx";
function App() {

  const fruits = [
    {id:1, name: "Strawberry", calories: 95 },
    {id:2, name: "Pomogranet", calories: 45 },
    {id:3, name: "Kiwi", calories: 105 },
    {id:4, name: "Mango", calories: 159 },
    {id:5, name: "Pineapple", calories: 37 },
  ];
  const vegetables = [
    {id:6, name: "Potatoes", calories: 110 },
    {id:7, name: "celery", calories: 15 },
    {id:8, name: "carrots", calories: 25 },
    {id:9, name: "corn", calories: 63 },
    {id:10, name: "brocoli", calories: 50 },
  ];
  const isLoggedIn = true; // Set your initial isLoggedIn value or get it from your state/props

  return (
    <>
      <div className="header-box"><Header /></div>
    <section>
      <div id="Calculator-container"><Calculator/></div>
      <div><DigitalClock/></div>
      <div id="stopwatchcotainer"><Stopwatch/></div>
      <div><ComponentA/></div>
      <div><ColorPicker/></div>
      <div><MyComponent2/></div>
      <div><Counter/></div>
      <div><MyComponent6 id="mycomponent6"/></div>
      <div><MyComponent7/></div>
      <div><Button />
      <Button2 />
      <Button3/>
      </div>
      <div>
      <MyComponent/>
      </div>
      <div><ProfilePicture/></div>
      <div>
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Student/>
      </div>
      <div>

      <Food />
      </div>
      <div>
      {fruits.length > 0 &&<List items={fruits} category="fruits" />}
      {vegetables.length >0 &&<List items={vegetables} category="vegetable" />}

      </div>
      <div>
        <MyComponent3/>
      </div>
      <div>
        <MyComponent4/>
      </div>
      <div>
        <MyComponent5/>
      </div>
      <div>
        <ToDoList/>
      </div>
      <div>
        <MyComponent8/>
      </div>
      <div>
      <UserGreeting isLoggedIn={isLoggedIn} username="Thunder" />

      {isLoggedIn && (
        <>
          <Card />
         
        </>
      )}

      </div>
        <div>
      <Footer />

        </div>
      </section>
    </>
  );
}

export default App;
