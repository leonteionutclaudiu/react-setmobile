import Card from 'react-bootstrap/Card';

function Section2Card({ title, text }) {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Section2Card;
