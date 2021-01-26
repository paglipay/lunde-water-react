import { Form } from 'react-bootstrap';

const questions = [
  { question: 'Do you need to be home for the delivery?', type: "y/n" },
  // { question:'Do you have a preferred day of delivery?', type:"week"},
  { question: 'Do you have a preferred time of delivery?', type: "datetime" },
  { question: 'Does GPS take us to your property?', type: "y/n" },
  { question: 'Are there any specific directions and details that we need to know to reach your property?', type: "textarea" },
  { question: "Do we need to enter the gated property at all (if there’s even a gate)?", type: "y/n" },
  { question: 'Are there any gate codes, padlock combinations or other barriers to property entry that we need to know about?', type: "y/n" },
  { question: 'If so, Please Enter Code.', type: "text" },
  { question: 'Do we fill your water tank by connecting to a hydrant or by connecting directly to the tank through the top hole or a valve that is connected to the tank?', type: "textarea" },
  { question: 'How close can our tanker truck get to the tank or hydrant?', type: "text" },
  { question: 'Do we fill your water tank by connecting to a hydrant or by connecting directly to the tank through the top hole or a valve that is connected to the tank?', type: "textarea" },
  { question: 'How close can our tanker truck get to the tank or hydrant?', type: "textarea" },

]

// const questions1 = [
//   { question: 'Do you need to be home for the delivery?', type:"y/n" },
//   { question:'Do you have a preferred time of delivery?', type:"datetime"},

// ]

// const questions2 = [

//   { question:'Are there any specific directions and details that we need to know to reach your property?', type:"textarea"},
//   { question:'Does GPS take us to your property?', type:"y/n" },
//   { question:"Do we need to enter the gated property at all (if there’s even a gate)?", type:"y/n" },
//   { question:'Are there any gate codes, padlock combinations or other barriers to property entry that we need to know about?', type:"y/n" },
//   { question:'Enter Code.', type:"text" },


// ]

// const questions3 = [
//   { question:'Do we fill your water tank by connecting to a hydrant or by connecting directly to the tank through the top hole or a valve that is connected to the tank?', type:"textarea" },
//   { question:'How close can our tanker truck get to the tank or hydrant?', type:"textarea" },
//   { question:'Do we have safe and clear access to the fill spot, whether it’s the hydrant or tank itself?', type:"y/n" },
//   { question:'Do you know the water capacity of your tank and if it will take our full 4,000 gallons?', type:"textarea" },

// ]


const questions1 = [
  { question: 'Do you need to be home for the delivery?', type: "y/n" },
  // { question:'Do you have a preferred day of delivery?', type:"week"},
  { question: 'Do you have a preferred time of delivery?', type: "datetime" },

]

const questions2 = [

  { question: 'Does GPS take us to your property?', type: "y/n" },
  { question: 'Are there any specific directions and details that we need to know to reach your property?', type: "textarea" },

]

const questions3 = [
  { question: "Do we need to enter the gated property at all (if there’s even a gate)?", type: "y/n" },
  { question: 'Are there any gate codes, padlock combinations or other barriers to property entry that we need to know about?', type: "y/n" },
  { question: 'If so, Please Enter Code.', type: "text" },

]

const questions4 = [
  { question: 'Do we fill your water tank by connecting to a hydrant or by connecting directly to the tank through the top hole or a valve that is connected to the tank?', type: "textarea" },
  { question: 'How close can our tanker truck get to the tank or hydrant?', type: "text" },

]

const questions5 = [
  { question: 'Do we fill your water tank by connecting to a hydrant or by connecting directly to the tank through the top hole or a valve that is connected to the tank?', type: "textarea" },
  { question: 'How close can our tanker truck get to the tank or hydrant?', type: "textarea" },

]

export const dynmicForm = (questions) => <>
  <Form>
    {questions.map(q => {
      if (q.type === 'y/n') {
        return (<>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>{q.question} </Form.Label>

            <Form.Check
              name={`${q.question}_yes_no`}
              type="radio"
              id={`default-radio`}
              label={`Yes`}
            />

            <Form.Check
              name={`${q.question}_yes_no`}
              type="radio"
              label={`No`}
              id={`default-radio`}
            />

          </Form.Group>
          <br />
        </>)
      }
      else if (q.type === 'week') {
        return (<>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>{q.question} </Form.Label>
            <Form.Control type="week" placeholder="Enter Day of Week" />
          </Form.Group>
          <br />
        </>)
      }
      else if (q.type === 'datetime') {
        return (<>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>{q.question} </Form.Label>
            <Form.Control type="time" placeholder="Enter Date" />
          </Form.Group>
          <br />
        </>)
      }
      else if (q.type === 'text') {
        return (<>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>{q.question} </Form.Label>
            <Form.Control type="text" placeholder="Enter Text" />
          </Form.Group>
          <br />
        </>)
      }
      else {
        return (<>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>{q.question} </Form.Label>
            <Form.Control as="textarea" rows={4} />
            {/* <Form.Text className="text-muted">
    Please enter a memorable answer.
  </Form.Text> */}
          </Form.Group>
          <br />
        </>)
      }
    })}
  </Form>
</>


export const questions_arry = [
  { headline: 'Time for a Delivery?', questions: questions1 },
  { headline: "What's Your Location Like?", questions: questions2 },
  { headline: 'How to Access the Property?', questions: questions3 },
  { headline: 'About the Tank?', questions: questions4 },
]

export const homeObjOne = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'New Customer Questions',
  headline: 'Please Answer Questions',
  description: 'TEST DESCRIPTION',
  buttonLabel: 'Next',
  imgStart: 'start',
  img: 'images/svg-2.svg',
  alt: 'Credit Card',
  onClick: () => console.log('goto Qustion2')
};
