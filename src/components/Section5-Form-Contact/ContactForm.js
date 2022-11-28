import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import classes from './ContactForm.module.css';

function ContactForm() {
  return (
    <section className={classes.section}>
      <h2 className={classes.title}>Contact Us</h2>
      <p className={classes.text}>
        Phasellus pretium justo nec sagittis tincidunt.
      </p>
      <Form className={classes.form}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            className={classes.bgcolor}
            type="text"
            placeholder="Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            className={classes.bgcolor}
            type="email"
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            className={classes.bgcolor}
            type="text"
            placeholder="Subject"
          />
        </Form.Group>
        <Form.Control
          className={classes.bgcolor}
          as="textarea"
          placeholder="Enter your message"
          style={{ height: '200px' }}
        />
        <Button className={classes.btn} variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
    </section>
  );
}

export default ContactForm;
