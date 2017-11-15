import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import CourseListRow from './CourseListRow';

function setup() {
    const props = {
        course: {id: '1', watchHref: 'localhost:3000/course/1', title: 'Eriks Course', authorId: '1', length: '4', category: '1'}
    };

return shallow(<CourseListRow {...props} /> );
}

describe('CourseListRow', () => {
    it('renders tr and td', () => {
        const wrapper = setup();
        expect(wrapper.find('tr').length).toBe(1);
        expect(wrapper.find('td').length).toBe(5);
    });
});
