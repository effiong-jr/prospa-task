import { ProgressBar } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'

import CustomCard from '../../../components/custom-card/customCard'

import './cashflow.scss'

const Cashflow = () => {
  return (
    <CustomCard>
      <div className="dashboard__account__stats__cashflow">
        <div className="dashboard__account__stats__cashflow--title">
          Cash flow
        </div>

        <div className="dashboard__account__stats__cashflow__progress-bar">
          <ListGroup>
            <ListGroup.Item className="d-flex p-0 progress__bar">
              <div className="progress__bar--title">Bank Fees</div>
              <div className="progress__bar--bar">
                <div className="amount">- N 250,000</div>
                <ProgressBar now={90} />
              </div>
            </ListGroup.Item>

            <ListGroup.Item className="d-flex p-0 progress__bar">
              <div className="progress__bar--title">Internet</div>
              <div className="progress__bar--bar">
                <div className="amount">- N 250,000</div>
                <ProgressBar now={63} />
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex p-0 progress__bar">
              <div className="progress__bar--title">Marketing</div>
              <div className="progress__bar--bar">
                <div className="amount">- N 250,000</div>
                <ProgressBar now={30} />
              </div>
            </ListGroup.Item>

            <ListGroup.Item className="d-flex p-0 progress__bar">
              <div className="progress__bar--title">Transfer</div>
              <div className="progress__bar--bar">
                <div className="amount">- N 250,000</div>
                <ProgressBar now={30} />
              </div>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </CustomCard>
  )
}
export default Cashflow
