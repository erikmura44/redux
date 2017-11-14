import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import CourseForm from './CourseForm';

function setup(saving) {
    const props = {
        course: {}, saving: saving, errors: {},
        onSave: () => {},
        onChange: () => {}
    };

return shallow(<CourseForm {...props} /> );
}

