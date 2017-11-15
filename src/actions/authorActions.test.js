import expect from 'expect';
import * as authorActions from './authorActions';
import * as types from './actionTypes';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

//Test async action
describe('Author Actions', () => {
    describe('loadAuthorsSuccess', () => {
        it('should create a LOAD_AUTHORS_SUCCESS action', () => {
            //arrange
            const authors = [
                {
                  id: 'cory-house',
                  firstName: 'Cory',
                  lastName: 'House'
                },
                {
                  id: 'scott-allen',
                  firstName: 'Scott',
                  lastName: 'Allen'
                },
                {
                  id: 'dan-wahlin',
                  firstName: 'Dan',
                  lastName: 'Wahlin'
                }
              ];
            const expectedAction = {
                type: types.LOAD_AUTHORS_SUCCESS,
                authors: authors
            };

            //actionTypes.js
            const action = authorActions.loadAuthorsSuccess(authors);

            //assert
            expect(action).toEqual(expectedAction);
    
        });
    });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it('should create BEGIN_AJAX_CALL and LOAD_AUTHORS_SUCCESS when loading authors', (done) => {
        // Here's an example call to nock.
        // nock('http://exampleApiCall.com/')
        //     .get('/courses')
        //     .reply(200, {body: { course: [{id: 1, firstName: 'Cory', lastName: 'House'}] }});

        const expectedActions = [
            {type: types.BEGIN_AJAX_CALL},
            {type: types.LOAD_AUTHORS_SUCCESS, body: {authors: [
                {
                  id: 'cory-house',
                  firstName: 'Cory',
                  lastName: 'House'
                },
                {
                  id: 'scott-allen',
                  firstName: 'Scott',
                  lastName: 'Allen'
                },
                {
                  id: 'dan-wahlin',
                  firstName: 'Dan',
                  lastName: 'Wahlin'
                }
              ]
            }}
        ];

        const store = mockStore({authors: []}, expectedActions);
        store.dispatch(authorActions.loadAuthors()).then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
            expect(actions[1].type).toEqual(types.LOAD_AUTHORS_SUCCESS);
            done();
        });
    });
});

