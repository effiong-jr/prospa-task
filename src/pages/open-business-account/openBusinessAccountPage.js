import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Accordion, Card, ListGroup } from 'react-bootstrap'

import CustomButton from '../../components/custom-button/customButton'
import Layout from '../../layout/signin-signup-layout/signInSignupLayout'
import CustomCard from '../../components/custom-card/customCard'
import tickImg from '../../assets/images/tick.svg'

import './openBusinessAccount.scss'

const OpenBusinessAccount = (props) => {
  const [accountType, setAccountType] = useState({
    type1: { name: 'type1', isSelected: true },
    type2: { name: 'type2', isSelected: false },
    type3: { name: 'type3', isSelected: false },
  })

  const history = useHistory()

  const handleSelectedAccount = (selected) => {
    switch (selected.name) {
      case accountType.type1.name:
        return setAccountType({
          type1: { name: 'type1', isSelected: true },
          type2: { name: 'type2', isSelected: false },
          type3: { name: 'type3', isSelected: false },
        })
      case accountType.type2.name:
        return setAccountType({
          type1: { name: 'type1', isSelected: false },
          type2: { name: 'type2', isSelected: true },
          type3: { name: 'type3', isSelected: false },
        })
      case accountType.type3.name:
        return setAccountType({
          type1: { name: 'type1', isSelected: false },
          type2: { name: 'type2', isSelected: false },
          type3: { name: 'type3', isSelected: true },
        })

      default:
        return accountType
    }
  }

  return (
    <Layout
      title="Open a new business account"
      desc="A short description comes here"
      canGoBack={true}
      registeredUser={true}
    >
      <section className="open-biz-account">
        <Accordion defaultActiveKey="0">
          {/* Card 1 */}
          <CustomCard
            className={`${accountType.type1.isSelected && 'active-card'}`}
          >
            <div
              eventKey="0"
              className={`mt-4 mx-3 option-btn  ${
                accountType.type1.isSelected ? 'selected' : 'not-selected'
              }`}
              onClick={() => handleSelectedAccount(accountType.type1)}
            ></div>
            <div>
              <Accordion.Toggle
                as={Card.Header}
                eventKey="0"
                className="pb-2 pl-0"
                onClick={() => handleSelectedAccount(accountType.type1)}
              >
                <p className="title m-0 p-0">
                  I have a registered business / charity with CAC
                </p>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="pt-0 pl-1">
                  <ListGroup horizontal>
                    <ListGroup.Item className="px-2 py-1">
                      <img src={tickImg} alt="tick" />
                    </ListGroup.Item>
                    <ListGroup.Item className="px-0 py-1">
                      Account in your business name
                    </ListGroup.Item>
                  </ListGroup>

                  <ListGroup horizontal>
                    <ListGroup.Item className="px-2 py-1">
                      <img src={tickImg} alt="tick" />
                    </ListGroup.Item>

                    <ListGroup.Item className="px-0 py-1">
                      Send to and receive transfers from all Nigerian banks
                    </ListGroup.Item>
                  </ListGroup>

                  <ListGroup horizontal>
                    <ListGroup.Item className="px-2 py-1">
                      <img src={tickImg} alt="tick" />
                    </ListGroup.Item>
                    <ListGroup.Item className="px-0 py-1">
                      Tools for business management
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </div>
          </CustomCard>

          {/* Card 2 */}
          <CustomCard
            className={`${accountType.type2.isSelected && 'active-card'}`}
          >
            <div
              className={`mt-4 mx-3 px-1 option-btn ${
                accountType.type2.isSelected ? 'selected' : 'not-selected'
              }`}
              onClick={() => handleSelectedAccount(accountType.type2)}
            ></div>
            <div>
              <Accordion.Toggle
                as={Card.Header}
                eventKey="1"
                className="pb-2 pl-0"
                onClick={() => handleSelectedAccount(accountType.type2)}
              >
                <p className="title m-0 p-0">
                  My business is not yet registered, I would like to register{' '}
                  <br />
                  <span className="mb-1">
                    Everything you need to start your business
                  </span>
                </p>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="pt-0">
                  <ListGroup horizontal>
                    <ListGroup.Item className="px-2 py-1">
                      <img src={tickImg} alt="tick" />
                    </ListGroup.Item>
                    <ListGroup.Item className="px-0 py-1">
                      Account in your business name
                    </ListGroup.Item>
                  </ListGroup>

                  <ListGroup horizontal>
                    <ListGroup.Item className="px-2 py-1">
                      <img src={tickImg} alt="tick" />
                    </ListGroup.Item>

                    <ListGroup.Item className="px-0 py-1">
                      Send to and receive transfers from all Nigerian banks
                    </ListGroup.Item>
                  </ListGroup>

                  <ListGroup horizontal>
                    <ListGroup.Item className="px-2 py-1">
                      <img src={tickImg} alt="tick" />
                    </ListGroup.Item>
                    <ListGroup.Item className="px-0 py-1">
                      Tools for business management
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </div>
          </CustomCard>

          {/* Card 3 */}
          <CustomCard
            className={`${accountType.type3.isSelected && 'active-card'}`}
          >
            <div
              className={`mt-4 mx-3 option-btn ${
                accountType.type3.isSelected ? 'selected' : 'not-selected'
              }`}
              onClick={() => handleSelectedAccount(accountType.type3)}
            ></div>
            <div>
              <Accordion.Toggle
                as={Card.Header}
                eventKey="2"
                className="pb-2 pl-0"
                onClick={() => handleSelectedAccount(accountType.type3)}
              >
                <p className="title m-0 p-0">
                  I’m a freelancer I do business in my personal name
                </p>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body className="pt-0">
                  <ListGroup horizontal>
                    <ListGroup.Item className="px-2 py-1">
                      <img src={tickImg} alt="tick" />
                    </ListGroup.Item>
                    <ListGroup.Item className="px-0 py-1">
                      Item 1
                    </ListGroup.Item>
                  </ListGroup>

                  <ListGroup horizontal>
                    <ListGroup.Item className="px-2 py-1">
                      <img src={tickImg} alt="tick" />
                    </ListGroup.Item>

                    <ListGroup.Item className="px-0 py-1">
                      Item 2
                    </ListGroup.Item>
                  </ListGroup>

                  <ListGroup horizontal>
                    <ListGroup.Item className="px-2 py-1">
                      <img src={tickImg} alt="tick" />
                    </ListGroup.Item>
                    <ListGroup.Item className="px-0 py-1">
                      Item 3
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </div>
          </CustomCard>
        </Accordion>

        <div className="open-biz-account__nxt-btn">
          <CustomButton onClick={() => history.push('/login')}>
            Next
          </CustomButton>
        </div>
      </section>
    </Layout>
  )
}

export default OpenBusinessAccount
