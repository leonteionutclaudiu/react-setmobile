import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import classes from './Form.module.css';

function SectionForm() {
  return (
    <section className={classes.section}>
      <Form className={classes.form}>
        <h2>Sign up for beta access</h2>
        <p className={classes.text}>
          Cras quis cursus augue,vel fermentum ex.Praesent gravida commodo
          fringilla.
        </p>
        <div className={classes.flex}>
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
        </div>
      </Form>
    </section>
  );
}

export default SectionForm;
