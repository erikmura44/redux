import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import CourseList from './CourseList';

function setup() {
    const props = {
        courses: [{id: 1, title: 'Eriks'}]
    };
    return shallow(<CourseList {...props} /> );
}


describe('CourseList', () => {
    it('renders table and th', () => {
        const wrapper = setup();
        expect(wrapper.find('table').length).toBe(1);
        expect(wrapper.find('th').length).toBe(5);
    });

    it('renders tbody', () => {
        const wrapper = setup();
        expect(wrapper.find('tbody').length).toBe(1);
    });
});
