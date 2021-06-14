import { Accordion, Card, ListGroup } from 'react-bootstrap'

import CustomButton from '../../components/custom-button/customButton'
import Layout from '../../layout/signin-signup-layout/signInSignupLayout'
import CustomCard from '../../components/custom-card/customCard'
import tickImg from '../../assets/images/tick.svg'

import './openBusinessAccount.scss'

const OpenBusinessAccount = (props) => {
  return (
    <Layout
      title="Open a new business account"
      desc="A short description comes here"
      canGoBack={true}
    >
      <section>
        <Accordion defaultActiveKey="0">
          {/* Card 1 */}
          <CustomCard>
            <Accordion.Toggle as={Card.Header} eventKey="0" className="pb-2">
              <p className="title m-2">
                I have a registered business / charity with CAC
              </p>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="pt-0">
                <ListGroup horizontal variant="flush">
                  <ListGroup.Item className="px-2 py-1">
                    <img src={tickImg} alt="tick" />
                  </ListGroup.Item>
                  <ListGroup.Item className="px-0 py-1">
                    Account in your business name
                  </ListGroup.Item>
                </ListGroup>

                <ListGroup horizontal variant="flush">
                  <ListGroup.Item className="px-2 py-1">
                    <img src={tickImg} alt="tick" />
                  </ListGroup.Item>

                  <ListGroup.Item className="px-0 py-1">
                    Send to and receive transfers from all Nigerian banks
                  </ListGroup.Item>
                </ListGroup>

                <ListGroup horizontal variant="flush">
                  <ListGroup.Item className="px-2 py-1">
                    <img src={tickImg} alt="tick" />
                  </ListGroup.Item>
                  <ListGroup.Item className="px-0 py-1">
                    Tools for business management
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Accordion.Collapse>
          </CustomCard>

          {/* Card 2 */}
          <CustomCard>
            <Accordion.Toggle as={Card.Header} eventKey="1" className="pb-2">
              <p className="title mb-1">
                My business is not yet registered, I would like to register{' '}
                <br />
                <span className="mb-1">
                  Everything you need to start your business
                </span>
              </p>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="pt-0">
                <ListGroup horizontal variant="flush">
                  <ListGroup.Item className="px-2 py-1">
                    <img src={tickImg} alt="tick" />
                  </ListGroup.Item>
                  <ListGroup.Item className="px-0 py-1">
                    Account in your business name
                  </ListGroup.Item>
                </ListGroup>

                <ListGroup horizontal variant="flush">
                  <ListGroup.Item className="px-2 py-1">
                    <img src={tickImg} alt="tick" />
                  </ListGroup.Item>

                  <ListGroup.Item className="px-0 py-1">
                    Send to and receive transfers from all Nigerian banks
                  </ListGroup.Item>
                </ListGroup>

                <ListGroup horizontal variant="flush">
                  <ListGroup.Item className="px-2 py-1">
                    <img src={tickImg} alt="tick" />
                  </ListGroup.Item>
                  <ListGroup.Item className="px-0 py-1">
                    Tools for business management
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Accordion.Collapse>
          </CustomCard>

          {/* Card 3 */}
          <CustomCard>
            <Accordion.Toggle as={Card.Header} eventKey="2" className="pb-2">
              <p className="title m-2">
                I’m a freelancer I do business in my personal name
              </p>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body className="pt-0">
                <ListGroup horizontal variant="flush">
                  <ListGroup.Item className="px-2 py-1">
                    <img src={tickImg} alt="tick" />
                  </ListGroup.Item>
                  <ListGroup.Item className="px-0 py-1">Item 1</ListGroup.Item>
                </ListGroup>

                <ListGroup horizontal variant="flush">
                  <ListGroup.Item className="px-2 py-1">
                    <img src={tickImg} alt="tick" />
                  </ListGroup.Item>

                  <ListGroup.Item className="px-0 py-1">Item 2</ListGroup.Item>
                </ListGroup>

                <ListGroup horizontal variant="flush">
                  <ListGroup.Item className="px-2 py-1">
                    <img src={tickImg} alt="tick" />
                  </ListGroup.Item>
                  <ListGroup.Item className="px-0 py-1">Item 3</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Accordion.Collapse>
          </CustomCard>
        </Accordion>

        <div>
          <CustomButton>Next</CustomButton>
        </div>
      </section>
    </Layout>
  )
}

export default OpenBusinessAccount
