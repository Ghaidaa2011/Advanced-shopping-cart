import { Row } from "react-bootstrap"
import storeitems from '../data/storeitems.json'
import { Col } from "react-bootstrap"
import StoreItem from "./StoreItem"
const Store = () => {
  return (
    <>
    <h1>Store</h1>
    <Row lg={3} md={2} sm={1} className="g-3">
      {storeitems.map((item)=> (
        <Col key={item.id}>
          <StoreItem {...item}/>
        </Col>
      ))}
    </Row>
    </>
  )
}

export default Store