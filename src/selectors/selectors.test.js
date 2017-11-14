import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author Selectors', () => {
    describe('authorsFormattedForDropdown', () => {
        it('should return author data formatted for use in a dropdown', () => {
            const authors = [
                {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
                {id: 'erik-mura', firstName: 'Erik', lastName: 'Mura'}
            ];
    
           const expected = [
               {value: 'cory-house', text: 'Cory House'},
               {value: 'erik-mura', text: 'Erik Mura'}
           ];

           expect(authorsFormattedForDropdown(authors)).toEqual(expected);
        });    
    });
});
