import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Section3Card({ title, text, link }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Img variant="top" src={link} />
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
  );
}

export default Section3Card;
