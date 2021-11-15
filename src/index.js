import React from 'react'
import classes from './styles.module.css'
import Accordion from 'react-bootstrap/Accordion'
import StarRatingComponent from 'react-star-rating-component'
import 'bootstrap/dist/css/bootstrap.min.css'

export const MultiLevelStarRating = ({ topics }) => {
  return (
    <div className={classes.container}>
      {topics.map((topic) => (
        <Accordion key={topic.key}>
          <Accordion.Item eventKey={topic.key}>
            <Accordion.Header>
              <div className={classes.combo}>
                <div className={classes.title}>{topic.title} </div>
                <StarRatingComponent
                  name={topic.title}
                  editing={topic.editable}
                  value={topic.rating}
                />
              </div>
            </Accordion.Header>
            <Accordion.Body>
              {topic.items.map((item, key) => (
                <li key={key}>
                  <div className={classes.items}>
                    <div className={classes.title}>{item.title}</div>
                    <StarRatingComponent
                      name={topic.title}
                      editing={topic.editable}
                      value={item.rating}
                    />
                  </div>
                </li>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </div>
  )
}
