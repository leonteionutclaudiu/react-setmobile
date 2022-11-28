import Section2Card from './Section-2-Card';
import classes from './CardS2.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBolt,
  faChartArea,
  faCloud,
  faLock,
} from '@fortawesome/free-solid-svg-icons';

const icon1 = <FontAwesomeIcon icon={faBolt} />;
const icon2 = <FontAwesomeIcon icon={faChartArea} />;
const icon3 = <FontAwesomeIcon icon={faCloud} />;
const icon4 = <FontAwesomeIcon icon={faLock} />;

const DATA = [
  {
    id: `m1`,
    title: `Amet enim`,
    text: `Phasellus congue posuere lectus eu gravida.Phasellus ut mollis ex,gravida rhoncus mi.Maecenas eu ligula nec mi tincidunt suscipit eu in lacus.`,
  },

  {
    id: `m2`,
    title: `Ipsum dolor`,
    text: `IntegerPraesent uma nunc,convallis ac feugiat aliquet,omare elementum non tellus.Nam enim sapien,omare et dui ut,faucibus interdum enim.`,
  },

  {
    id: `m3`,
    title: `Cras quis`,
    text: `IntegerPraesent uma nunc,convallis ac feugiat aliquet,omare elementum non tellus.Nam enim sapien,omare et dui ut,faucibus interdum enim.`,
  },

  {
    id: `m4`,
    title: `Phasellus pretium`,
    text: `IntegerPraesent uma nunc,convallis ac feugiat aliquet,omare elementum non tellus.Nam enim sapien,omare et dui ut,faucibus interdum enim.`,
  },
];

function CardS2() {
  return (
    <section className={classes.section}>
      <div className={classes.allCards}>
        <div className={classes.card1}>
          <div className={classes.icon}>{icon1}</div>
          <Section2Card title={DATA[0].title} text={DATA[0].text} />
        </div>
        <div className={classes.card2}>
          <div className={classes.icon}>{icon2}</div>
          <Section2Card title={DATA[1].title} text={DATA[1].text} />
        </div>
        <div className={classes.card3}>
          <div className={classes.icon}>{icon3}</div>
          <Section2Card title={DATA[2].title} text={DATA[2].text} />
        </div>
        <div className={classes.card4}>
          <div className={classes.icon}>{icon4}</div>
          <Section2Card title={DATA[3].title} text={DATA[3].text} />
        </div>
      </div>
    </section>
  );
}

export default CardS2;
