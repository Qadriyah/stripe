import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notifications, { notify } from 'react-notify-toast';
import { addCourse } from '../actions/courseAction';
import { renderTextInput } from './textInput/inputHelpers';
import { isEmpty } from '../utils';

class Grades extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: "",
            mark: "",
            courseList: [],
            inputs: {}
        }
    }

    onSubmit = event => {
        event.preventDefault();
        const { course, mark } = this.state;
        const inputData = this.getFormData();
        if (!inputData.isValid) {
            console.log('All fields are required');
            notify.show("this is sample text", "custom", 5000, {});
            return true;
        }
        let { courseList } = this.state;
        const { addCourse } = this.props;
        const newCourse = {
            course,
            mark
        }

        if (this.isCoiurseExists(courseList, course)) {
            courseList = this.updateCourse(courseList, course);
        }

        this.setState({ courseList: [...courseList, newCourse] }, () => {
            const { courseList: list } = this.state;
            addCourse(list);
        });
    }

    getFormData = () => {
        const { inputs } = this.state;
        const data = {};
        const errors = {};
        Object.values(inputs).forEach(input => {
            const { name } = input.props;
            data[name] = input.getValue();
            if (isEmpty(input.getValue())) errors[name] = `${name} is required`
        });
        return {
            data,
            isValid: isEmpty(errors)
        };
    }

    /**
     * Finds if the course already exists
     * @param Array courseList
     * @param string course
     * 
     * @returns Object
     */
    isCoiurseExists = (courseList, course) => courseList.find(score => score.course === course);

    /**
     * Removes course duplicates
     * @param Array courseList
     * @param string course
     * 
     * @returns Array
     */
    updateCourse = (courseList, course) => courseList.filter(score => score.course !== course);

    render() {
        return (
            <div className="grade-form">
                <h4 className="mb-5">New Course</h4>
                <Notifications />
                <form onSubmit={this.onSubmit}>
                    {renderTextInput({
                        name: "course",
                        placeholder: "Course Name",
                        label: "Course",
                        className: "form-control form-control-lg",
                        serverError: '',
                        parent: this
                    })}
                    {renderTextInput({
                        name: "score",
                        placeholder: "Score",
                        label: "Score",
                        className: "form-control form-control-lg",
                        serverError: '',
                        parent: this
                    })}
                    <input
                        type="submit"
                        className="btn btn-primary btn-lg btn-block mt-2"
                    />
                </form>
            </div>
        )
    }
}

export default connect(null, { addCourse })(Grades);
