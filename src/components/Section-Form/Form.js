import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import classes from './Form.module.css';

function SectionForm() {
  return (
    <Form className={classes.form}>
      <h2>Sign up for beta access</h2>
      <p>
        Cras quis cursus augue,vel fermentum ex.Praesent gravida commodo
        fringilla.
      </p>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          className={classes.input}
          type="email"
          placeholder="Email Address"
        />
      </Form.Group>
      <Button className={classes.btn} variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  );
}

export default SectionForm;
