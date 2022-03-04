import test from 'ava'

import { parser } from '../index'

const rawStr = `{"tops":[{"Model":{"name":{"name":"User","span":{"start":6,"end":10}},"fields":[{"field_type":{"Supported":{"name":"Int","span":{"start":25,"end":28}}},"name":{"name":"id","span":{"start":15,"end":17}},"arity":"Required","attributes":[{"name":{"name":"id","span":{"start":35,"end":37}},"arguments":{"arguments":[],"empty_arguments":[],"trailing_comma":null},"span":{"start":35,"end":37}},{"name":{"name":"default","span":{"start":39,"end":46}},"arguments":{"arguments":[{"name":null,"value":{"Function":["autoincrement",{"arguments":[],"empty_arguments":[],"trailing_comma":null},{"start":47,"end":62}]},"span":{"start":47,"end":62}}],"empty_arguments":[],"trailing_comma":null},"span":{"start":39,"end":63}}],"documentation":null,"span":{"start":15,"end":64},"is_commented_out":false},{"field_type":{"Supported":{"name":"String","span":{"start":76,"end":82}}},"name":{"name":"name","span":{"start":66,"end":70}},"arity":"Optional","attributes":[{"name":{"name":"comment","span":{"start":86,"end":93}},"arguments":{"arguments":[{"name":null,"value":{"NumericValue":["123",{"start":94,"end":97}]},"span":{"start":94,"end":97}}],"empty_arguments":[],"trailing_comma":null},"span":{"start":86,"end":98}}],"documentation":null,"span":{"start":66,"end":99},"is_commented_out":false}],"attributes":[],"documentation":null,"span":{"start":0,"end":102},"commented_out":false}}]}`
const rawObj = JSON.parse(rawStr)
const str = parser(`model User {
  id        Int      @id @default(autoincrement())
  name      String?  @comment(123)
  }`)
const obj = JSON.parse(str)

test('parser schema str', (t) => {
  t.is(rawStr, str)
})

test('check top', (t) => {
  t.is(rawObj.tops[0].Model.name.name, obj.tops[0].Model.name.name)
})
