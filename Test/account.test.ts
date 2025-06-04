import {describe, expect, test} from 'vitest';
import {Account} from '../src/account';

describe('Account calculation tests', () => {

test('Deposit', ():void => {
    let account : Account = new Account('checking');

    account.deposit(10);

    expect(account.balance).toEqual(10);
})

test('Deposit, then withdraw', ()=> {

    let account = new Account('savings');

    account.deposit(10);

    account.withdraw(4);

    expect(account.balance).toEqual(6);
})

test('Adding interest to a checking account throws expected error',()=>{

    let account = new Account('negative');
    
    expect(() => account.deposit(-2)).toThrowError ('Please supply an amount larger than 0');
})

})

    

