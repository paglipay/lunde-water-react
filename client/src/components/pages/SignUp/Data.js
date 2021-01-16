import { Form } from 'react-bootstrap';

export const homeObjOne = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'SIGN UP TODAY',
  headline: 'Sign up today, get your water tomorrow',
  description:
    <>
      <Form>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" />
          <Form.Text className="text-muted">
            Please enter a memorable username.
        </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          <Form.Text className="text-muted">
            Password needs to be 6 characters or more.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formRepeatPassword">
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control type="password" placeholder="Repeat Password" />
          <Form.Text className="text-muted">
            Please repeat the password
            </Form.Text>
        </Form.Group>
      </Form>
    </>,
  buttonLabel: 'Sign Up',
  imgStart: '',
  img: 'images/svg-6.svg',
  alt: 'Credit Card'
};

export const homeObjTwo = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: '100% SECURE',
  headline: 'Stay protected 24/7 anywhere anytime',
  description:
    'We have you covered no matter where you are located. Over 140 locations worldwide to ensure you have access anytime',
  buttonLabel: 'Learn More',
  imgStart: '',
  img: 'images/svg-5.svg',
  alt: 'Vault'
};

export const homeObjThree = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'EASY SETUP',
  headline: 'Super fast and simple onboarding process',
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  buttonLabel: 'Start Now',
  imgStart: 'start',
  img: 'images/svg-7.svg',
  alt: 'Vault'
};

export const homeObjFour = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'DATA ANALYTICS',
  headline: 'Every transaction is stored on our secure cloud database',
  description:
    'Never ever have to worry again about saved reciepts. We store your data, so you can access it anytime.',
  buttonLabel: 'Sign Up Now',
  imgStart: 'start',
  img: 'images/svg-8.svg',
  alt: 'Vault'
};
