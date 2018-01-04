import '../env'
import { expect } from 'chai';
import { signUp } from '../../src/actions';

describe('function signUp ', () => {
  it('should create a new row in the users table', () => {
    // TODO: FIXME and write a real test
    return signUp.createUser('fake name', 'false email', 'made up password')
      .then((user) => {
        expect(user.name).to.equal('fake name')
      })
  })
})
