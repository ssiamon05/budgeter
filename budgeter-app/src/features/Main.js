import BudgetView from "./BudgetView"
import Form from "./Form"

export default function Main(props) {
   return (
   <>
   <BudgetView store={props}/>
   <Form store={props}/>
   </>
   )
}