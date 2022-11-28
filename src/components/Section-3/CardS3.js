import Section3Card from './Section-3-Card';
import classes from './CardS3.module.css';

const DATA = [
  {
    title: `Sed lorem adipiscing`,
    text: `Phasellus congue posuere lectus eu gravida.Phasellus ut mollis ex,gravida rhoncus mi.Maecenas eu ligula nec mi tincidunt suscipit eu in lacus.`,
    link: 'https://i.ibb.co/GTMz2nX/pic01.jpg',
  },

  {
    title: `Accumsan integer`,
    text: `IntegerPraesent uma nunc,convallis ac feugiat aliquet,omare elementum non tellus.Nam enim sapien,omare et dui ut,faucibus interdum enim.`,
    link: 'https://i.ibb.co/GTMz2nX/pic01.jpg',
  },
];

function CardS3() {
  return (
    <div className={classes.allCards}>
      <div className={classes.card1}>
        <Section3Card
          title={DATA[0].title}
          text={DATA[0].text}
          link={DATA[0].link}
        />
      </div>
      <div className={classes.card2}>
        <Section3Card
          title={DATA[1].title}
          text={DATA[1].text}
          link={DATA[1].link}
        />
      </div>
    </div>
  );
}

export default CardS3;
